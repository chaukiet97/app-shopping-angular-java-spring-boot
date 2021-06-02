import { UpdatePasswordComponent } from './../shared/component/personnel/update-password/update-password.component';
import { DeletePersonnelComponent } from './../shared/component/personnel/delete-personnel/delete-personnel.component';
import { InsPersonnelComponent } from './../shared/component/personnel/ins-personnel/ins-personnel.component';
import { UserService } from './../../shared/core/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  user:any= [];
  @ViewChild('table') table: MatTable<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id','email', 'name', 'phone', 'sex', 'brithday', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private dialog: MatDialog,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(res=>{
      if (res.error == 200) {
        this.user = res.data;
        this.dataSource = new MatTableDataSource(this.user);
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
  onInspersonnel(id = 0): void {
    const dialogRef = this.dialog.open(InsPersonnelComponent, {
      width: '800px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllUser();
      }

    });
  }
  onDeletepersonnel(data){
    const dialogRef = this.dialog.open(DeletePersonnelComponent, {
      width: '400px',
      data: { data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllUser();
    });

  }
  onUpdatePassword(id){
    const dialogRef = this.dialog.open(UpdatePasswordComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllUser();
    });
  }

}
