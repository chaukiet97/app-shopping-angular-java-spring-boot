import { DeleteContactComponent } from './../shared/component/contact/delete-contact/delete-contact.component';
import { ReplyContactComponent } from './../shared/component/contact/reply-contact/reply-contact.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from './../../shared/core/service/contact.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any = []
  @ViewChild('table') table: MatTable<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id','name', 'phone', 'subject', 'message', 'day_send', 'status','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private contactService: ContactService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAllContact();
  }
  getAllContact() {
    this.contactService.getAllContact().subscribe(res => {
      if (res.error === 200) {
        this.contact = res.data;
        this.dataSource = new MatTableDataSource(this.contact);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onReplyContact(id): void {
    const dialogRef = this.dialog.open(ReplyContactComponent, {
      width: '500px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllContact();
      }

    });
  }
  onDeleteContact(data){
    const dialogRef = this.dialog.open(DeleteContactComponent, {
      width: '400px',
      data: { data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllContact();
    });

  }

}
