import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../../../shared/core/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import CryptoJS from 'crypto-js';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  resetPassForm: FormGroup;

  key: string;
  private sub: any;
  isExpiredRePassToken: boolean;
  isResetPassword: boolean = false;
  isSimilarOldPass: boolean = false;
  hide: boolean = true;
  nameUpdatePassword: string;
  id: number;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdatePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private snackBar: MatSnackBar,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserByID(this.item.id).subscribe((res) => {
      this.nameUpdatePassword = res.data.name;
      this.id = res.data.id;
    })
    this.resetPassForm = this.formBuilder.group({
      newPW: ['', Validators.compose([Validators.required, this.validateStrengthPassword])],
      confirmNewPW: ['', Validators.compose([Validators.required, this.validateStrengthPassword])]
    }, {
      validator: this.comparePassword
    }
    )
  }
  comparePassword = (c: AbstractControl) => {
    this.isSimilarOldPass = false;
    const v = c.value;
    let ok1 = v.newPW === v.confirmNewPW;
    return (ok1) ? null : {
      passwordnotmatch: true
    };
  }

  validateStrengthPassword(controls: AbstractControl) {
    const password = controls.value;
    let regexStrPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return regexStrPass.test(password) ? null : { passInvalid: true };
  }
  newPassword() {
    let password_hash = CryptoJS.SHA512(this.resetPassForm.value.newPW).toString();
    this.userService.updatePassord(password_hash, this.id).subscribe((res) => {
      if (res.error === 200) {
        this.isResetPassword = true;
        this.dialogRef.close({data:this.isResetPassword})
        this.snackBar.open("Cập nhật mật khẩu thành công", "Đóng", {
          duration: 2000,
        });
      } else {
        this.isSimilarOldPass = true;
        this.snackBar.open(res.message, "Đóng", {
          duration: 2000,
        });
      }
    })
  }

}
