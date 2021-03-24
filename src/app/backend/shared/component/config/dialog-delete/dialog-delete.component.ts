import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PagesService } from './../../../../../shared/core/service/pages.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {
  formDeleteGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    // public dialog: NgDialogAnimationService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private pagesService: PagesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log(this.item.data);
    this.formDeleteGroup = this.formBuilder.group({
      value: ["", Validators.required]
    });
  }
  onDelete(){
    if (this.formDeleteGroup.value.value ==this.item.data.name) {
      this.pagesService.deletePageGroup(this.item.data.id).subscribe(res=>{
        if (res.error ==200) {
          this.snackBar.open(`Xóa ${this.formDeleteGroup.value.value} thành công `, "Đóng", {
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
      this.snackBar.open(`Giá trị ${this.formDeleteGroup.value.value} không chính xác `, "Đóng", {
        duration: 2000,
      });
    }

  }

}
