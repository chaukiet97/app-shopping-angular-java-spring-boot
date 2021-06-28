import { LinkService } from './../../../../../shared/core/service/link.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentService } from './../../../../../shared/core/service/content.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-ins-group',
  templateUrl: './ins-group.component.html',
  styleUrls: ['./ins-group.component.css']
})
export class InsGroupComponent implements OnInit {
  formContentGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private contentService: ContentService,
    private snackBar: MatSnackBar,
    public link: LinkService,
  ) { }

  ngOnInit(): void {
    if (this.item.id) {
      this.contentService.getContentGroupByID(this.item.id).subscribe(res=>{
        if (res.error == 200) {
          this.fromConfig(res.data)
        }
      })
    } else {
    this.fromConfig()

    }

  }
  fromConfig(item: any = {}) {
    let config = {
      id: [item.id || 0],
      name: [item.name, Validators.required],
      link: [item.link, Validators.required]
    }
    this.formContentGroup = this.formBuilder.group(config);
  }
  onChangeLink(e) {
    const url = this.link._convent(e.target.value);
    this.formContentGroup.value.link = url;
  }
  onIns() {
    this.contentService.insertContentGroup(this.formContentGroup.value).subscribe(res => {
      if (res.error == 200) {
        this.snackBar.open("Thêm nhóm tin tức thành công", " Đóng");
      this.dialogRef.close({message:"Thành công"})
      }
      else{
        this.snackBar.open(res.message, " Đóng");
      }
    })
  }
  onUp(){
    this.contentService.updateContentGroup(this.formContentGroup.value, this.item.id).subscribe(res=>{
      if (res.error == 200) {
        this.snackBar.open("Cập nhật nhóm tin tức thành công", " Đóng");
      this.dialogRef.close({message:"Thành công"})
      }
      else{
        this.snackBar.open(res.message, " Đóng");
      }

    })
  }
}
