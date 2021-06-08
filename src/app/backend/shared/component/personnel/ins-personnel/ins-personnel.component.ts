import { UserService } from './../../../../../shared/core/service/user.service';
import { ImagesService } from './../../../../../shared/core/service/images.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-ins-personnel',
  templateUrl: './ins-personnel.component.html',
  styleUrls: ['./ins-personnel.component.css']
})
export class InsPersonnelComponent implements OnInit {
  fromInsParsonnel: FormGroup;
  sex = [
    { value: 0, title: "Nữ" },
    { value: 1, title: "Nam" }

  ];
  hide: boolean = true;
  public images = new ImagesService();
  isDisabled: boolean;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsPersonnelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.item.id) {
      this.userService.getUserByID(this.item.id).subscribe((res) => {
        if (res.error == 200) {
          const imagesConfig = { path: 'http://localhost:4200/../../assets/personnel/', data: res.data.avatar };
          this.images._ini(imagesConfig);
          res.data.password_hash = "***********";
          this.fromConfig(res.data);
          this.isDisabled = true;

        }
      })
    } else {

      const imagesConfig = { path: 'http://localhost:4200/../../assets/personnel/', data: null };
      this.images._ini(imagesConfig);
      this.fromConfig();
      this.isDisabled = false
    }
  }

  fromConfig(item: any = {}) {
    let config = {
      id: [item.id],
      firstname: [item.firstname, Validators.required],
      lastname: [item.lastname, Validators.required],
      email: [item.email, Validators.required],
      phone: [item.phone, Validators.required],
      password_hash: [{ value: item.password_hash, disabled: this.item.id ? true : false }, Validators.required],
      sex: [item.sex | 1],
      brithday: [item.brithday, Validators.required],
      avatar: [this.images, new ImagesService()],
      status: [item.status | 1],
    }
    this.fromInsParsonnel = this.formBuilder.group(config);
  }
  onIns() {
    this.fromInsParsonnel.value['status'] = false ? 0 : 1;
    this.fromInsParsonnel.value['avatar'] = this.images._get(true)['add'][0].name;
    this.userService.insertUser(this.fromInsParsonnel.value).subscribe(res => {
      if (res.error == 200) {
        this.snackBar.open(`Thêm nhân viên ${this.fromInsParsonnel.value['firstname'] + " " + this.fromInsParsonnel.value['lastname']} thành công `, "Đóng");
      }
      else {
        this.snackBar.open(`${res.message}`, "Đóng");
      }
    })
    this.dialogRef.close({ data: null })

  }

  onUpd() {
    this.fromInsParsonnel.value['status'] = false ? 0 : 1;
    this.fromInsParsonnel.value['avatar'] = this.images.action == false ? this.images.data[0].name : this.images._get(true)['add'][0].name;
    this.userService.updateUser(this.fromInsParsonnel.value, this.item.id).subscribe(res => {
      if (res.error == 200) {
        this.snackBar.open(`Cập nhật nhân viên nhân viên ${this.fromInsParsonnel.value['firstname'] + " " + this.fromInsParsonnel.value['lastname']} thành công `, "Đóng", {
          duration: 2000,
        });
      }
      else {
        this.snackBar.open(`${res.message}`, "Đóng", {
          duration: 2000,
        });
      }

    })
    this.dialogRef.close({ data: null })
  }
}
