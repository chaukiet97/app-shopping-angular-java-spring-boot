import { SettingsService } from './../../../../../../shared/core/service/settings.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-banner',
  templateUrl: './delete-banner.component.html',
  styleUrls: ['./delete-banner.component.css']
})
export class DeleteBannerComponent implements OnInit {


  formDeleteBanner: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DeleteBannerComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private settingsService: SettingsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formDeleteBanner = this.formBuilder.group({
      value: ["", Validators.required]
    });
  }
  onDelete(){
    if (this.formDeleteBanner.value.value ==this.item.item.name) {
      this.settingsService.deleteBanner(this.item.item.id).subscribe(res=>{
        if (res.error ==200) {
          this.snackBar.open(`Xóa ${this.formDeleteBanner.value.value} thành công `, "Đóng", {
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
      this.snackBar.open(`Giá trị ${this.formDeleteBanner.value.value} không chính xác `, "Đóng", {
        duration: 2000,
      });
    }

  }

}
