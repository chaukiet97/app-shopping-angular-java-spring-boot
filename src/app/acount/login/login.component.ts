import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from './../../shared/core/service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import CryptoJS from 'crypto-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public lock = false;
  public isLoginFail = false;
  hide: boolean = true;
  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    if (this.lock) {
      this.snackBar.open("Không được bấm đăng nhập nhiều lần. Vui lòng đợi.", "Đóng")
      return;
    }

    this.isLoginFail = false;
    this.lock = true;
    let data ={
      email: this.loginForm.value['email'],
      password:CryptoJS.SHA512(this.loginForm.value['password']).toString(),
    }
    this.userService.login(data).subscribe((userRes) => {
      this.lock = false;
      if (userRes.error == 200) {
        this.userService.setFe2User(userRes.data[0])
        this.router.navigate(['admin/dashboard']);
        this.isLoginFail = false;
        this.snackBar.open("Đăng nhập thành công.", "Đóng")
      } else if (userRes.error == 404){
        this.snackBar.open(userRes.message, "Đóng")
      }
      else{
        this.snackBar.open(userRes.message, "Đóng")
        this.isLoginFail = true;
      }
    });
  }

}
