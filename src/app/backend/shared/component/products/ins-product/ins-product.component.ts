import { LinkService } from './../../../../../shared/core/service/link.service';
import { ProductsService } from './../../../../../shared/core/service/products.service';
import { ImagesService } from './../../../../../shared/core/service/images.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CKEditor4, CKEditorComponent } from 'ckeditor4-angular';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ins-product',
  templateUrl: './ins-product.component.html',
  styleUrls: ['./ins-product.component.css'],
  providers:[LinkService,ImagesService]
})
export class InsProductComponent implements OnInit {
  fromProduct: FormGroup;
  group: any = [];
  brand: any = [];
  made_in: any = [];
  product:any = [];
  name = 'ckeditor4-angular';
  ckeConfig: CKEditor4.Config;
  mycontent: string;
  @ViewChild("myckeditor") ckeditor: CKEditorComponent;
  checkStatus = 1;
  public images = new ImagesService();
  public list_images = new ImagesService();
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsProductComponent>,
    private productsService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private snackBar: MatSnackBar,
    public link: LinkService,
  ) {

  }

  ngOnInit(): void {
    if (this.item.id) {
      this.productsService.getProductById(this.item.id).subscribe(res=>{
        if (res.error == 200) {
          this.fromConfig(res.data);
          this.product = res.data;
          this.mycontent = res.data.detail;
          const imagesConfig = { path: 'http://localhost:4200/../../assets/products/', data: res.data.images };
          this.images._ini(imagesConfig);
          const list_imagesConfig = { path: 'http://localhost:4200/../../assets/products/', data: JSON.parse(res.data.list_images), multiple: true };
          this.list_images._ini(list_imagesConfig);
        }
      })

    } else {
      this.fromConfig();
      this.mycontent = ``;
      const imagesConfig = { path: 'http://localhost:4200/../../assets/products/', data: null };

      this.images._ini(imagesConfig);

      const list_imagesConfig = { path: 'http://localhost:4200/../../assets/products/', data: null, multiple: true };

      this.list_images._ini(list_imagesConfig);
    }

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
    this.getBrand();
    this.getMadein();
    this.getProductGroup();
  }
  fromConfig(item: any = {}) {
    let config = {
      id: [item.id || 0],
      name: [item.name],
      link: [item.link],
      group_id: [item.group_id],
      brand_id: [item.brand_id],
      made_in_id: [item.made_in_id],
      images: [this.images, new ImagesService()],
      list_images: [this.list_images, new ImagesService()],
      price: [item.price,],
      price_sale: [item.price_sale,],
      count: [item.count],
      detail: [item.detail],
      description: [item.description],
      status: [item.status, 0],
      create_time: [item.create_time, new Date()]
    }
    this.fromProduct = this.formBuilder.group(config);
  }
  getProductGroup() {
    this.productsService.getProductGroup().subscribe(res => {
      if (res.error == 200) {
        this.group = res.data
      }
    })
  }
  getBrand() {
    this.productsService.getAllBrand().subscribe(res => {
      if (res.error == 200) {
        this.brand = res.data;
      }
    })
  }
  getMadein() {
    this.productsService.getAllMadeIn().subscribe(res => {
      if (res.error == 200) {
        this.made_in = res.data
      }
    })
  }
  onChangeLink(e) {
    const url = this.link._convent(e.target.value);
    this.fromProduct.value.link = url;
  }

  onChange(event: CKEditor4.EventInfo): void {
    this.fromProduct.value['detail'] = event.editor.getData();
  }
  onChangeStatus(event: MatSlideToggleChange) {
    // this.fromProduct.value['status'] = event.checked == true ? 1 : 0;
  }
  onIns() {
    let list_images=[]
    for (let index = 0; index < this.list_images._get(true)['add'].length; index++) {
        list_images.push(this.list_images._get(true)['add'][index].name)
    }
    this.fromProduct.value['images']= this.images._get(true)['add'][0].name;
    this.fromProduct.value['list_images'] = JSON.stringify(list_images);
    this.productsService.inserProduct(this.fromProduct.value).subscribe((res)=>{
      if (res.error == 200) {
        this.snackBar.open(`Thêm sản phẩm ${this.fromProduct.value['name']} thành công `, "Đóng");
      }
      else{
        this.snackBar.open(`${res.message}`, "Đóng");
      }
    })
  }
  onUpd(){
    let list_images=[]
    for (let index = 0; index < this.list_images._get(true)['add'].length; index++) {
        list_images.push(this.list_images._get(true)['add'][index]['name'])
    }
    this.fromProduct.value['images']= this.images._get(true)['add'][0]['name'];
    this.fromProduct.value['list_images'] = JSON.stringify(list_images);
    this.productsService.updateProduct(this.item.id, this.fromProduct.value).subscribe((res)=>{
      if (res.error == 200) {
        this.snackBar.open(`Cập nhật sản phẩm vơi ${this.fromProduct.value['name']} thành công `, "Đóng");
      }
      else{
        this.snackBar.open(`${res.message}`, "Đóng");
      }
    })
  }

}
