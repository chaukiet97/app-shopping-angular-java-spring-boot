import { CustomerService } from './../../../../../shared/core/service/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentService } from './../../../../../shared/core/service/content.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-dialog-delete-customer',
  templateUrl: './dialog-delete-customer.component.html',
  styleUrls: ['./dialog-delete-customer.component.css']
})
export class DialogDeleteCustomerComponent implements OnInit {

  formDeletepage: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogDeleteCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private customerService: CustomerService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formDeletepage = this.formBuilder.group({
      value: ["", Validators.required]
    });
  }
  onDelete(){
    if (this.formDeletepage.value.value ==this.item.data.name) {
      this.customerService.deleteCustomer(this.item.data.id).subscribe(res=>{
        if (res.error ==200) {
          this.snackBar.open(`Xóa ${this.formDeletepage.value.value} thành công `, "Đóng", {
            duration: 2000,

          });
          this.dialogRef.close({});
        } else {
          this.snackBar.open(res.message, "Đóng", {
            duration: 2000,
          });
        }
      })
    } else {
      this.snackBar.open(`Giá trị ${this.formDeletepage.value.value} không chính xác `, "Đóng", {
        duration: 2000,
      });
    }

  }

}
