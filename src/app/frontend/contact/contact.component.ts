import { ApiService } from './../../shared/core/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fromContact: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.fromContact = this.formBuilder.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }
  sendContact(){
    this.apiService.addContact(this.fromContact.value).subscribe(res=>{
      if (res.error === 200) {
        this.snackBar.open(`Gửi liên hệ thành công `, "Đóng", {
          duration: 2000,
        });
      }
      else{
        this.snackBar.open(`Gửi liên hệ thất bại`, "Đóng", {
          duration: 2000,
        });
      }
    })
  }

}
