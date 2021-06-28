import { DialogDeleteCustomerComponent } from './../shared/component/customer/dialog-delete-customer/dialog-delete-customer.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from './../../shared/core/service/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  cutomer: any = [];
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id', 'name', 'email', 'phone', 'sex', 'brithday', 'address', 'create_time', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    public customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(res => {
      if (res.error == 200) {
        this.cutomer = res.data;
        this.dataSource = new MatTableDataSource(this.cutomer);
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
  onDeleteCustomer(data){
    const dialogRef = this.dialog.open(DialogDeleteCustomerComponent, {
      width: '400px',
      data: { data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllCustomer();
    });
  }

}
