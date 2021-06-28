import { DialogDeletePageComponent } from './../shared/component/config/dialog-delete-page/dialog-delete-page.component';
import { DialogDeleteComponent } from './../shared/component/config/dialog-delete/dialog-delete.component';
import { PagesService } from './../../shared/core/service/pages.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InsGroupPagesComponent } from './../shared/component/pages/ins-group-pages/ins-group-pages.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsPagesComponent } from '../shared/component/pages/ins-pages/ins-pages.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  step = 0;
  pageGroup: any = [];
  page: any = [];
  @ViewChild('table') table: MatTable<any>;
  dataSourcePageGroup: MatTableDataSource<any>;
  displayedColumnsPageGroup = ['name', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSourcePage: MatTableDataSource<any>;
  displayedColumnsPage = ['id', 'name', 'link', 'type', 'status', 'create_time', 'action'];
  constructor(
    public dialog: MatDialog,
    public pagesService: PagesService
  ) { }

  ngOnInit(): void {
    this.getAllPage();
    this.getPageGroup();
  }
  getPageGroup() {
    this.pagesService.getPageGroup().subscribe(res => {
      if (res.error == 200) {
        this.pageGroup = res.data;
        this.dataSourcePageGroup = new MatTableDataSource(this.pageGroup);
      }
    })

  }
  getAllPage() {
    this.pagesService.getAllPage().subscribe(res => {
      if (res.error == 200) {
        this.page = res.data;
        this.dataSourcePage = new MatTableDataSource(this.page);
        this.dataSourcePage.paginator = this.paginator;
        this.dataSourcePage.sort = this.sort;

      }
    })
  }
  onInsGroup(id = 0): void {
    const dialogRef = this.dialog.open(InsGroupPagesComponent, {
      width: '400px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPageGroup();
    });
  }
  onInsPage(id = 0): void {
    const dialogRef = this.dialog.open(InsPagesComponent, {
      width: '800px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllPage();
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourcePage.filter = filterValue.trim().toLowerCase();

    if (this.dataSourcePage.paginator) {
      this.dataSourcePage.paginator.firstPage();
    }
  }
  onDeletePagesGroup(data){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '400px',
      data: { data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPageGroup();
    });

  }
  onDeletePage(data){
    const dialogRef = this.dialog.open(DialogDeletePageComponent, {
      width: '400px',
      data: { data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllPage();
    });
  }

}
