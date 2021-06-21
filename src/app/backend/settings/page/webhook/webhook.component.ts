import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from './../../../../shared/core/service/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-webhook',
  templateUrl: './webhook.component.html',
  styleUrls: ['./webhook.component.css']
})
export class WebhookComponent implements OnInit {
  fromSettingWebhook: FormGroup;
  linkWebhook = "";
  title = "";
  constructor(
    private fromBuilder: FormBuilder,
    private settingsService: SettingsService,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
    this.formConfig();
    this.title = "Chuyển khoản ngân hàng"
    this.linkWebhook = window.location.origin + '/api/bank_transfer_handler';
    this.getListBankAcc();
  }
  formConfig(item: any = {}) {
    let config = {
      id: [item.id | 0],
      title: [item.guide || "Chuyển khoản ngân hàng", Validators.required],
      description: [item.description, Validators.required],
      guide: [item.guide, Validators.required],
      param1: [{ value: item.param1 || ` ${environment.api_host}/api/bank_transfer_handler`, disabled: true }],
      param2: [item.description || this.makeid(16)],
      prefix: [item.prefix || "DH", Validators.required],
      difference: [item.difference || 10000, Validators.required]
    }
    // { value: item.password_hash, disabled: this.item.id ? true : false }
    this.fromSettingWebhook = this.fromBuilder.group(config);
  }
  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
  getListBankAcc() {
    this.settingsService.getAllBankVN().subscribe(res=>{
      console.log(res);

    })
  }
}
