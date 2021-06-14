import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from '../../../../shared/core/service/settings.service';
import { ImagesService } from '../../../../shared/core/service/images.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css'],
  providers: [ImagesService]
})
export class WebsiteComponent implements OnInit {
  fromSettingWebsite: FormGroup;
  logo = new ImagesService();
  shortcut = new ImagesService();
  id: number;
  constructor(
    private fromBuilder: FormBuilder,
    private settingsService: SettingsService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.settingsService.getProfileWebsite().subscribe((res) => {
      if (res.error === 200) {
        this.id = res.data.id;
        const logoConfig = { path: 'http://localhost:4200/../../assets/website/', data: res.data.logo };
        this.logo._ini(logoConfig);

        const shortcutConfig = { path: 'http://localhost:4200/../../assets/website/', data: res.data.shortcut };
        this.shortcut._ini(shortcutConfig);
        this.formConfig(res.data);
      } else {
        const logoConfig = { path: 'http://localhost:4200/../../assets/website/', data: null };
        this.logo._ini(logoConfig);

        const shortcutConfig = { path: 'http://localhost:4200/../../assets/website/', data: null };
        this.shortcut._ini(shortcutConfig);
        this.formConfig();
      }
    })
  }
  formConfig(item: any = {}) {
    let config = {
      id: [item.id | 0],
      logo: [this.logo || new ImagesService()],
      shortcut: [this.shortcut || new ImagesService()],
      title: [item.title, Validators.required],
      description: [item.description, Validators.required],
    }
    this.fromSettingWebsite = this.fromBuilder.group(config);
  }
  onSave() {
    let dataInsnert = {
      logo: this.logo._get(true)['add'][0].name,
      shortcut: this.shortcut._get(true)['add'][0].name,
      title: this.fromSettingWebsite.value['title'],
      description: this.fromSettingWebsite.value['description']
    }
    let dataUpdate = {
      logo: this.logo._get(true)['add'][0]['name'],
      shortcut: this.shortcut._get(true)['add'][0]['name'],
      title: this.fromSettingWebsite.value['title'],
      description: this.fromSettingWebsite.value['description']
    }

    if (this.id) {
      this.settingsService.updateSettingWebsite(dataUpdate,this.id).subscribe(res => {
        if (res.error === 200) {
          this.snackBar.open(`Cập nhật cấu hình website thành công `, "Đóng", { duration: 2000 });
        }
      })
    } else {
      this.settingsService.insertSettingWebsite(dataInsnert).subscribe(res => {
        if (res.error === 200) {
          this.snackBar.open(`Thêm cấu hình website thành công `, "Đóng", { duration: 2000 });
        }
      })
    }

  }

}
