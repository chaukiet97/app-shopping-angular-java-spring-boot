import { UserService } from './../../../../../shared/core/service/user.service';
import { ContactService } from './../../../../../shared/core/service/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-reply-contact',
  templateUrl: './reply-contact.component.html',
  styleUrls: ['./reply-contact.component.css']
})
export class ReplyContactComponent implements OnInit {
  fromReplyContact: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ReplyContactComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private snackBar: MatSnackBar,
    private contactService: ContactService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.item.id) {
      this.contactService.getContactByID(this.item.id).subscribe(res => {
        if (res.error === 200) {
          this.fromConfig(res.data);
        }
      })
    } else {
      this.fromConfig();
    }

  }
  fromConfig(item: any = {}) {
    let config = {
      name: [item.name],
      subject: [item.subject],
      message: [item.message],
      day_send: [item.day_send],
      reply: [item.reply,Validators.required],
    }
    this.fromReplyContact = this.formBuilder.group(config);
  }
  onReply(){
    let data = {
      'reply': this.fromReplyContact.value['reply'],
      'maker_id' : this.userService.getFe2User().id
    }
    this.contactService.replyContact(data,this.item.id).subscribe(res=>{
      if (res.error == 200) {
        this.snackBar.open(`Gởi feedback khách hàng ${this.fromReplyContact.value['name']} thành công `, "Đóng", {
          duration: 2000,
        });
      }
      this.snackBar.open(res.message, "Đóng", {
        duration: 2000,
      });
    })

  }
}
