import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PagesService } from './../../../../../shared/core/service/pages.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-delete-page',
  templateUrl: './dialog-delete-page.component.html',
  styleUrls: ['./dialog-delete-page.component.css']
})
export class DialogDeletePageComponent implements OnInit {
  formDeletepage: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogDeletePageComponent>,
    // public dialog: NgDialogAnimationService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private pagesService: PagesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formDeletepage = this.formBuilder.group({
      value: ["", Validators.required]
    });
  }
  onDelete(){
    if (this.formDeletepage.value.value ==this.item.data.name) {
      this.pagesService.deletePage(this.item.data.id).subscribe(res=>{
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
