import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from './../../../../../shared/core/service/products.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-delete-products',
  templateUrl: './dialog-delete-products.component.html',
  styleUrls: ['./dialog-delete-products.component.css']
})
export class DialogDeleteProductsComponent implements OnInit {

  formDeleteProduct: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogDeleteProductsComponent>,
    // public dialog: NgDialogAnimationService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private productsService: ProductsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formDeleteProduct = this.formBuilder.group({
      value: ["", Validators.required]
    });
  }
  onDelete(){
    // if (this.formDeleteProduct.value.value ==this.item.data.name) {
    //   this.productsService.deleteProduct(this.item.data.id).subscribe(res=>{
    //     if (res.error ==200) {
    //       this.snackBar.open(`Xóa ${this.formDeleteProduct.value.value} thành công `, "Đóng", {
    //         duration: 2000,

    //       });
    //       this.dialogRef.close({});
    //     } else {
    //       this.snackBar.open(res.message, "Đóng", {
    //         duration: 2000,
    //       });
    //     }
    //   })
    // } else {
    //   this.snackBar.open(`Giá trị ${this.formDeleteProduct.value.value} không chính xác `, "Đóng", {
    //     duration: 2000,
    //   });
    // }

  }
}
