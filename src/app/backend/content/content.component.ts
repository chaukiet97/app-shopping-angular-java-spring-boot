import { DeleteContendComponent } from './../shared/component/content/delete-contend/delete-contend.component';
import { InsContendComponent } from './../shared/component/content/ins-contend/ins-contend.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteGroupContendComponent } from './../shared/component/content/delete-group-contend/delete-group-contend.component';
import { ContentService } from './../../shared/core/service/content.service';
import { InsGroupComponent } from '../shared/component/content/ins-group/ins-group.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentGroup: any = [];
  content: any = [];
  @ViewChild('table') table: MatTable<any>;
  dataSourceContentGroup: MatTableDataSource<any>;
  displayedColumnsContentGroup = ['name', 'action'];
  dataSourceContent: MatTableDataSource<any>;
  displayedColumnsContent = ['id','images', 'name', 'link', 'create_time', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    public contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.getAllContentGroup();
    this.getAllContent();
  }
  getAllContent(){
    this.contentService.getAllContent().subscribe(res=>{
      if (res.error == 200) {
        this.content = res.data;
        this.dataSourceContent = new MatTableDataSource(this.content);
        this.dataSourceContent.paginator = this.paginator;
        this.dataSourceContent.sort = this.sort;
      }
    })
  }
  getAllContentGroup() {
    this.contentService.getAllContentGroup().subscribe(res => {
      if (res.error == 200) {
        this.contentGroup = res.data;
        this.dataSourceContentGroup = new MatTableDataSource(this.contentGroup);
      }
    })

  }
  onInsGroup(id = 0): void {
    const dialogRef = this.dialog.open(InsGroupComponent, {
      width: '400px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllContentGroup();
    });
  }
  onDeleteContentGroup(data) {
    const dialogRef = this.dialog.open(DeleteGroupContendComponent, {
      width: '400px',
      data: { data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllContentGroup();
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceContent.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceContent.paginator) {
      this.dataSourceContent.paginator.firstPage();
    }
  }
  onInsContent(id = 0): void {
    const dialogRef = this.dialog.open(InsContendComponent, {
      width: '600px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllContent();
    });
  }
  onDeleteContent(data){
    const dialogRef = this.dialog.open(DeleteContendComponent, {
      width: '400px',
      data: { data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllContent();
    });
  }

}
