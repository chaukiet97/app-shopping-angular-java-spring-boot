import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from './../../shared/core/service/user.service';
import { ApiService } from 'src/app/shared/core/service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import CryptoJS from 'crypto-js';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formSignin: FormGroup;
  hide: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private userService:UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formSignin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSignin(){
    let data ={
      email: this.formSignin.value['email'],
      password:CryptoJS.SHA512(this.formSignin.value['password']).toString(),
    }
    this.apiService.login(data).subscribe(loginRes=>{
      if (loginRes.error == 200) {
        this.userService.setFe2Cus(loginRes.data[0]);
        this.snackBar.open("Đăng nhập thành công.", "Đóng");
        this.router.navigate(['/']);
      }
      else{
        this.snackBar.open(loginRes.message, "Đóng")
      }
    })
  }

}
