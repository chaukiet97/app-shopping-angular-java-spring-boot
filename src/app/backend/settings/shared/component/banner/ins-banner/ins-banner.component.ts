import { ImagesService } from '../../../../../../shared/core/service/images.service';
import { SettingsService } from '../../../../../../shared/core/service/settings.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-ins-banner',
  templateUrl: './ins-banner.component.html',
  styleUrls: ['./ins-banner.component.css'],
  providers: [ImagesService]
})
export class InsBannerComponent implements OnInit {
  formBanner: FormGroup;
  public images = new ImagesService();
  type_banner = [
    { id: 0, label: 'Hình Banner' },
    { id: 1, label: 'Hình Quảng Cáo' }
  ]
  banner: any = [];
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsBannerComponent>,
    private settingService: SettingsService,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    if (this.item.id) {
      this.settingService.getBannerByID(this.item.id).subscribe(res => {
        if (res.error === 200) {
          this.banner = res.data;
          const imagesConfig = { path: 'http://localhost:4200/../../assets/banner/', data: res.data.images };
          this.images._ini(imagesConfig);
          this.fromConfig(res.data);
        }
      })
    } else {
      const imagesConfig = { path: 'http://localhost:4200/../../assets/banner/', data: null };
      this.images._ini(imagesConfig);
      this.fromConfig();
    }

  }
  fromConfig(item: any = {}) {
    let config = {
      id: [item.id],
      name: [item.name || "", Validators.required],
      link: [item.link || ""],
      type: [item.type || 0],
      images: [this.images || new ImagesService()],
      status: [item.status == 1 ? true : false],
      create_time: [item.create_time],
      description: [item.description],
    }
    this.formBanner = this.formBuilder.group(config);
  }
  onIns() {
    if (this.item.id == 0) {
      let data = {
        name: this.formBanner.value['name'],
        link: this.formBanner.value['link'],
        type: this.formBanner.value['type'],
        images: this.images._get(true)['add'][0].name,
        status: this.formBanner.value['status'] == true ? 1 : 0,
        description: this.formBanner.value['description'],
      }
      this.settingService.insertSettingBanner(data).subscribe(res => {
        if (res.error === 200) {
          this.snackBar.open(`Thêm Banner thành công `, "Đóng", { duration: 2000 });
          this.dialogRef.close({ message: "Thành công" })
        }
        else {
          this.snackBar.open(res.message, "Đóng", { duration: 2000 });

        }
      })
    } else {
      let data = {
        name: this.formBanner.value['name'],
        link: this.formBanner.value['link'],
        type: this.formBanner.value['type'],
        images: this.images._get(true)['old'].length == 0 ? this.images._get(true)['add'][0].name : this.images._get(true)['old'][0],
        status: this.formBanner.value['status'] == true ? 1 : 0,
        description: this.formBanner.value['description'],
      }
      this.settingService.updateBanner(this.item.id, data).subscribe(res => {
        if (res.error === 200) {
          this.snackBar.open(`Cập nhật Banner thành công `, "Đóng", { duration: 2000 });
          this.dialogRef.close({ message: "Thành công" })
        }
        else {
          this.snackBar.open(res.message, "Đóng", { duration: 2000 });

        }
      })

    }

  }
}
