import { LinkService } from './../../../../../shared/core/service/link.service';
import { PagesService } from './../../../../../shared/core/service/pages.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ins-group-pages',
  templateUrl: './ins-group-pages.component.html',
  styleUrls: ['./ins-group-pages.component.css'],
  providers:[LinkService]
})
export class InsGroupPagesComponent implements OnInit {
  formPagesGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsGroupPagesComponent>,
    // public dialog: NgDialogAnimationService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private pagesService: PagesService,
    private snackBar: MatSnackBar,
    public link: LinkService,
  ) { }

  ngOnInit(): void {
    if (this.item.id) {
      this.pagesService.getPageGroupByID(this.item.id).subscribe(res => {
        if (res.error == 200) {
          this.fromConfig(res.data);
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
      name: [item.name, Validators.required],
      link:[item.link, Validators.required]
    }
    this.formPagesGroup = this.formBuilder.group(config);
  }
  onChangeLink(e) {
    const url = this.link._convent(e.target.value);
    this.formPagesGroup.value.link = url;
  }
  onIns() {
    if (this.item.id != 0) {
      this.pagesService.updatePageGroup(this.formPagesGroup.value.name, this.item.id).subscribe(res => {
        if (res.error == 200) {
          this.snackBar.open(`Cập nhật Nhóm Trang ${this.formPagesGroup.value.name} thành công `, "Đóng", {
            duration: 2000,
          });
          this.dialogRef.close({});
        }
        else {
          this.snackBar.open(`Cập nhật Nhóm Trang ${this.formPagesGroup.value.name} thất bại `, "Đóng", {
            duration: 2000,
          });
        }

      })
    }
    else {
      this.pagesService.insertPageGroup(this.formPagesGroup.value).subscribe(res => {
        if (res.error == 200) {
          this.snackBar.open(`Thêm Nhóm Trang ${this.formPagesGroup.value.name} thành công `, "Đóng", {
            duration: 2000,
          });
          this.dialogRef.close({});
        }
        else{
          this.snackBar.open(`Thêm Nhóm Trang ${this.formPagesGroup.value.name} thất bại `, "Đóng", {
            duration: 2000,
          });
        }
      })
    }
  }

}
