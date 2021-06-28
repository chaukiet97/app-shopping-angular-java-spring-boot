import { CKEditor4, CKEditorComponent } from 'ckeditor4-angular';
import { ImagesService } from './../../../../../shared/core/service/images.service';
import { LinkService } from './../../../../../shared/core/service/link.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentService } from './../../../../../shared/core/service/content.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ins-contend',
  templateUrl: './ins-contend.component.html',
  styleUrls: ['./ins-contend.component.css']
})
export class InsContendComponent implements OnInit {
  formInsContent: FormGroup;
  public images = new ImagesService();
  name = 'ckeditor4-angular';
  ckeConfig: CKEditor4.Config;
  mycontent: string;
  @ViewChild("myckeditor") ckeditor: CKEditorComponent;
  contentGroup: any = [];
  content: any = [];
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsContendComponent>,
    private contentService: ContentService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private snackBar: MatSnackBar,
    public link: LinkService,
  ) { }

  ngOnInit(): void {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
    if (this.item.id) {
      this.contentService.getContentById(this.item.id).subscribe(res=>{
        if (res.error == 200) {
          this.content = res.data;
          this.mycontent = res.data.detail;
          const imagesConfig = { path: 'http://localhost:4200/../../assets/content/', data: res.data.images };
          this.images._ini(imagesConfig);
          this.fromConfig(res.data);
          // console.log(this.mycontent);

        }
      })

    } else {
      this.fromConfig();
      this.mycontent = ``;
      const imagesConfig = { path: 'http://localhost:4200/../../assets/content/', data: null };

      this.images._ini(imagesConfig);
    }
    this.getContentGroup();
  }
  getContentGroup() {
    this.contentService.getAllContentGroup().subscribe(res => {
      if (res.error == 200) {
        this.contentGroup = res.data;
      }
    })
  }
  fromConfig(item: any = {}) {
    let config = {
      id: [item.id || 0],
      name: [item.name, Validators.required],
      link: [item.link, Validators.required],
      group_id: [item.group_id, Validators.required],
      images: [this.images || new ImagesService()],
      detail: [this.mycontent, Validators.required],
      description: [item.description, Validators.required],
      status: [1, Validators.required],
    }
    this.formInsContent = this.formBuilder.group(config);
  }
  onChangeLink(e) {
    const url = this.link._convent(e.target.value);
    this.formInsContent.value.link = url;
  }

  onChange(event: CKEditor4.EventInfo): void {
    this.formInsContent.value['detail'] = event.editor.getData();
  }
  onIns() {
    this.formInsContent.value['images'] = this.images._get(true)['add'][0].name;
    this.contentService.insertContent(this.formInsContent.value).subscribe(res => {
      if (res.error == 200) {
        this.snackBar.open(`Thêm Tin Tức ${this.formInsContent.value.name} thành công `, "Đóng", {
          duration: 2000,
        });
        this.dialogRef.close({message:"Thành công"});
      }
      else {
        this.snackBar.open(`Thêm Tin Tức ${this.formInsContent.value.name} thất bại `, "Đóng", {
          duration: 2000,
        });
      }
    })
  }
  onUpd() {
    this.formInsContent.value['images'] = this.images.action == false ? this.images.data[0].name : this.images._get(true)['add'][0].name;
    this.contentService.updateContent(this.formInsContent.value, this.item.id).subscribe(res => {
      if (res.error == 200) {
        this.snackBar.open(`Cập nhật Tin Tức ${this.formInsContent.value.name} thành công `, "Đóng", {
          duration: 2000,
        });
        this.dialogRef.close({message:"Thành công"});

      }
      else {
        this.snackBar.open(`Cập nhật Tin Tức ${this.formInsContent.value.name} thất bại `, "Đóng", {
          duration: 2000,
        });
      }
    })
  }

}
