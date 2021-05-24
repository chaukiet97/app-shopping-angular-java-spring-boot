import { UserService } from './../../shared/core/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, Validators, FormBuilder, ValidationErrors, FormControl, FormGroupDirective } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fromRegister: FormGroup;
  hide: boolean = true;
  public lock = false;
  public isLoginFail = false;
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fromConfig();
  }
  fromConfig() {
    let config = {
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      name:[''],
      email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
      phone: ['', [Validators.required, Validators.pattern('^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$')]],
      brithday: ['', Validators.required],
      sex: ['', Validators.required],
      password_hash: ['', Validators.required],
    }
    this.fromRegister = this.formBuilder.group(config);
  }
  getErrorMessage(controlName: string) {
    // this.fromRegister.valid
    if (this.fromRegister.controls[controlName].hasError('required')) {
      return `${controlName} không được để trống`
    }
    if (this.fromRegister.controls[controlName].hasError('pattern')) {
      return `${controlName} không đúng`
    }
    if (this.fromRegister.controls['password_hash'] != this.fromRegister.controls['config_password']) {
      return `Mật khẩu không khớp`
    }

    return 'Passwords must match'
  }

  login() {
    if (this.lock) {
      this.snackBar.open("Không được bấm đăng nhập nhiều lần. Vui lòng đợi.", "Đóng")
      return;
    }

    this.isLoginFail = false;
    this.lock = true;
    this.fromRegister.value['name'] = this.fromRegister.value['firstname'] + this.fromRegister.value['lastname'];
    this.fromRegister.value['brithday'] = moment(this.fromRegister.value['brithday']).format();
    this.fromRegister.value['password_hash'] = CryptoJS.SHA512(this.fromRegister.value['password_hash']).toString();
    this.userService.register(this.fromRegister.value).subscribe(res=>{
      this.lock = false;
      if (res.error == 200) {
        this.router.navigate(['admin/dashboard']);
        this.isLoginFail = false;
        this.snackBar.open("Đăng ký thành công.", "Đóng")
      } else if (res.error == 404){
        this.snackBar.open(res.message, "Đóng")
      }
      else{
        this.snackBar.open(res.message, "Đóng")
        this.isLoginFail = true;
      }
    })
  }

}
