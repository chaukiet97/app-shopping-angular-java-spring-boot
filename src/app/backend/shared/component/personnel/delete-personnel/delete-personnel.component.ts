import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../../../shared/core/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-delete-personnel',
  templateUrl: './delete-personnel.component.html',
  styleUrls: ['./delete-personnel.component.css']
})
export class DeletePersonnelComponent implements OnInit {
  fromDeletePersonnel : FormGroup
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DeletePersonnelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private snackBar: MatSnackBar,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.fromDeletePersonnel = this.formBuilder.group({
      value: ["", Validators.required]
    });
  }
  onDelete(){
    if (this.fromDeletePersonnel.value.value ==this.item.data.name) {
      this.userService.deleteUserById(this.item.data.id).subscribe(res=>{
        if (res.error ==200) {
          this.snackBar.open(`Xóa ${this.fromDeletePersonnel.value.value} thành công `, "Đóng", {
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
      this.snackBar.open(`Giá trị ${this.fromDeletePersonnel.value.value} không chính xác `, "Đóng", {
        duration: 2000,
      });
    }


  }

}
