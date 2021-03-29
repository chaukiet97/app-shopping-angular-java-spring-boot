import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/shared/core/service/products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-ins-brand-product',
  templateUrl: './ins-brand-product.component.html',
  styleUrls: ['./ins-brand-product.component.css']
})
export class InsBrandProductComponent implements OnInit {
  formBrand: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsBrandProductComponent>,
    // public dialog: NgDialogAnimationService,
    private productsService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.item.id != 0) {
      this.productsService.getBrandByID(this.item.id).subscribe(res => {
        if (res.error = 200) {
          this.fromConfig(res.data)
        }
      })
    }
    else {
      this.fromConfig();
    }
  }
  fromConfig(item: any = {}) {
    let config = {
      id: [item.id || 0],
      name: [item.name, Validators.required]
    }
    this.formBrand = this.formBuilder.group(config);
  }
  onIns() {
    if (this.item.id != 0) {
      this.productsService.updateBrand(this.formBrand.value.name, this.item.id).subscribe(res => {
        if (res.error == 200) {
          this.snackBar.open(`Cập nhật Thương Hiệu ${this.formBrand.value.name} thành công `, "Đóng", {
            duration: 2000,
          });
          this.dialogRef.close({})
        }
        else {
          this.snackBar.open(`Cập nhật Thương Hiệu ${this.formBrand.value.name} thất bại `, "Đóng", {
            duration: 2000,
          });
        }
      })

    } else {
      this.productsService.insertBrand(this.formBrand.value).subscribe(res => {
        if (res.error == 200) {
          this.snackBar.open(`Thêm Thương Hiệu ${this.formBrand.value.name} thành công `, "Đóng", {
            duration: 2000,
          });
          this.dialogRef.close({})
        }
        else {
          this.snackBar.open(`Thêm Thương Hiệu ${this.formBrand.value.name} thất bại `, "Đóng", {
            duration: 2000,
          });
        }
      })
    }
  }

}
