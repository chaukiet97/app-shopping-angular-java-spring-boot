import { LinkService } from './../../../../../shared/core/service/link.service';
import { PagesService } from './../../../../../shared/core/service/pages.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CKEditor4, CKEditorComponent } from 'ckeditor4-angular';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-ins-pages',
  templateUrl: './ins-pages.component.html',
  styleUrls: ['./ins-pages.component.css']
})
export class InsPagesComponent implements OnInit {
  fromPage: FormGroup;
  groupPage: any = [];
  type = [
    { id: 1, label: "Link" },
    { id: 2, label: "Trang" },
    { id: 3, label: "Sản phẩm" },
    { id: 4, label: "Tin tức" }
  ];
  listTypeProduct: any = [];
  name = 'ckeditor4-angular';
  ckeConfig: CKEditor4.Config;
  mycontent: string;
  @ViewChild("myckeditor") ckeditor: CKEditorComponent;
  checkStatus = 1;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsPagesComponent>,
    // public dialog: NgDialogAnimationService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private pagesService: PagesService,
    private snackBar: MatSnackBar,
    public link: LinkService,
  ) {
    this.mycontent = `<p>Nhập nội dung chi tiết trang</p>`;
  }

  ngOnInit(): void {
    if (this.item.id) {
      this.pagesService.getPageById(this.item.id).subscribe(res => {
        if (res.error == 200) {
          this.checkStatus = res.data['status'];
          this.mycontent = res.data['detail']
          this.fromConfig(res.data)
        }
      })

    } else {
      this.fromConfig();
    }
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
    this.getPageGroup();
    this.getPageByType();
  }
  getPageGroup() {
    this.pagesService.getPageGroup().subscribe(res => {
      if (res.error == 200) {
        this.groupPage = res.data
      }
    })

  }
  getPageByType() {
    this.pagesService.getPageByType().subscribe(res => {
      if (res.error == 200) {
        this.listTypeProduct = res.data;
      }
    })
  }
  onChangeLink(e) {
    const url = this.link._convent(e.target.value);
    this.fromPage.value.link = url;
  }
  fromConfig(item: any = {}) {
    let config = {
      id: [item.id || 0],
      name: [item.name, Validators.required],
      link: [item.link, Validators.required],
      group_id: [item.group_id, 0],
      detail: [item.detail, Validators.required],
      type: [item.type, Validators.required],
      parent_id: [item.parent_id, 0],
      description: [item.description, Validators.required],
      status: [item.status, 0],
      create_time: [item.create_time, new Date()]
    }
    this.fromPage = this.formBuilder.group(config);
  }
  onChange(event: CKEditor4.EventInfo): void {
    this.fromPage.value['detail'] = event.editor.getData();
  }
  onChangeStatus(event: MatSlideToggleChange) {
    this.checkStatus = event ? event.checked == true ? 1 : 0 : this.fromPage.value['status'];
  }
  onIns() {
    this.fromPage.value['status'] = this.checkStatus;
    if (this.item.id != 0) {
      this.pagesService.updatePage(this.fromPage.value, this.item.id).subscribe((res) => {
        if (res.error == 200) {
          this.snackBar.open(`Cập nhật Trang ${this.fromPage.value.name} thành công `, "Đóng", {
            duration: 2000,
          });
          this.dialogRef.close({});
        }
        else {
          this.snackBar.open(`Cập nhật Trang ${this.fromPage.value.name} thất bại `, "Đóng", {
            duration: 2000,
          });
        }
      })
    } else {
      this.pagesService.insertPage(this.fromPage.value).subscribe((res) => {
        if (res.error == 200) {
          this.snackBar.open(`Thêm Trang ${this.fromPage.value.name} thành công `, "Đóng", {
            duration: 2000,
          });
          this.dialogRef.close({});
        }
        else {
          this.snackBar.open(`Thêm Trang ${this.fromPage.value.name} thất bại `, "Đóng", {
            duration: 2000,
          });
        }
      })
    }


  }
}
