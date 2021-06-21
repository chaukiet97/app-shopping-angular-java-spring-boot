import { DeleteBannerComponent } from './../../shared/component/banner/delete-banner/delete-banner.component';
import { InsBannerComponent } from './../../shared/component/banner/ins-banner/ins-banner.component';
import { SettingsService } from './../../../../shared/core/service/settings.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: any = [];
  @ViewChild('table') table: MatTable<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id', 'name', 'link', 'images', 'type', 'status', 'create_time', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private dialog: MatDialog,
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.getAllBanner();
  }
  getAllBanner() {
    this.settingsService.getAllBanner().subscribe(res => {
      if (res.error === 200) {
        this.banner = res.data;
        this.dataSource = new MatTableDataSource(this.banner);
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
  onInsBanner(id = 0): void {
    const dialogRef = this.dialog.open(InsBannerComponent, {
      width: '850px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBanner()
    });
  }
  onDeleteBanner(item){
    const dialogRef = this.dialog.open(DeleteBannerComponent, {
      width: '400px',
      data: { item }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBanner();
    });

  }


}
