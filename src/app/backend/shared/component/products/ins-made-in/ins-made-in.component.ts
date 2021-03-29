import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/shared/core/service/products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-ins-made-in',
  templateUrl: './ins-made-in.component.html',
  styleUrls: ['./ins-made-in.component.css']
})
export class InsMadeInComponent implements OnInit {
  formMadeIn: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsMadeInComponent>,
    // public dialog: NgDialogAnimationService,
    private productsService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.item.id != 0) {
      this.productsService.getMadeInById(this.item.id).subscribe(res => {
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
    this.formMadeIn = this.formBuilder.group(config);
  }
  onIns() {
    if (this.item.id != 0) {
      this.productsService.updateMadeIn(this.formMadeIn.value.name,this.item.id).subscribe(res=>{
        if (res.error == 200) {
          this.snackBar.open(`Cập nhật Nơi Sản Xuất ${this.formMadeIn.value.name} thành công `, "Đóng", {
            duration: 2000,
          });
          this.dialogRef.close({})
        }
        else{
          this.snackBar.open(`Cập nhật Nơi Sản Xuất ${this.formMadeIn.value.name} thất bại `, "Đóng", {
            duration: 2000,
          });
        }
      })

    } else {
      this.productsService.insertMadeIn(this.formMadeIn.value).subscribe(res => {
        if (res.error == 200) {
          this.snackBar.open(`Thêm Nơi Sản Xuất ${this.formMadeIn.value.name} thành công `, "Đóng", {
            duration: 2000,
          });
          this.dialogRef.close({})
        }
        else{
          this.snackBar.open(`Thêm Nơi Sản Xuất ${this.formMadeIn.value.name} thất bại `, "Đóng", {
            duration: 2000,
          });
        }
      })
    }
  }

}
