import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from './../../shared/core/service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import CryptoJS from 'crypto-js';
import * as moment from 'moment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignup: FormGroup;
  hide: boolean = true;
  sex=[
    {id:1, value:"Nam"},
    {id:2, value:"Nữ"}

  ]
  constructor(
    private apiService: ApiService,
    private fromBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.formSignup = this.fromBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', new Date()],
      address:['', Validators.required],
      password: ['', Validators.required],
      sex:['',0]
    })
  }
  onSignup(){
    this.formSignup.value['birthday']=moment(this.formSignup.value['birthday']).format("YYYYM-MM-DD");
    this.formSignup.value['password']=CryptoJS.SHA512(this.formSignup.value['password']).toString();
    this.apiService.signup(this.formSignup.value).subscribe(res=>{
      if (res.error == 200) {
        console.log(res.data);
        this.router.navigate(['/dang-nhap']);
        this.snackBar.open("Đăng ký thành công.", "Đóng")
      }
    })

  }

}
