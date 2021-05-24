import { LinkService } from './../../../../../shared/core/service/link.service';
import { ProductsService } from 'src/app/shared/core/service/products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-ins-group-product',
  templateUrl: './ins-group-product.component.html',
  styleUrls: ['./ins-group-product.component.css'],
  providers:[LinkService]
})
export class InsGroupProductComponent implements OnInit {
  formProductsGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsGroupProductComponent>,
    // public dialog: NgDialogAnimationService,
    private productsService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    public link: LinkService,
  ) { }

  ngOnInit(): void {
    if (this.item.id != 0) {
      this.productsService.getProducGrouptById(this.item.id).subscribe(res => {
        if (res.error == 200) {
          this.fromConfig(res.data);
        }
      })
    } else {
      this.fromConfig();
    }

  }
  fromConfig(item: any = {}) {
    let config = {
      id: [item.id || 0],
      name: [item.name, Validators.required],
      link:[item.link, Validators.required]
    }
    this.formProductsGroup = this.formBuilder.group(config);
  }

  onChangeLink(e) {
    const url = this.link._convent(e.target.value);
    this.formProductsGroup.value.link = url;
  }

  onIns() {
    if (this.item.id != 0) {
      this.productsService.updateProductGroup(this.formProductsGroup.value.name, this.item.id).subscribe(res => {
        if (res.error == 200) {
          this.dialogRef.close({});

        }
      })
    } else {
      this.productsService.insertProductGroup(this.formProductsGroup.value).subscribe(res => {
        if (res.error == 200) {
          this.dialogRef.close({});
        }
      })
    }
  }

}
