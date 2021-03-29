import { MatSnackBar } from '@angular/material/snack-bar';
import { InsMadeInComponent } from './../ins-made-in/ins-made-in.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from './../../../../../shared/core/service/products.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-made-in',
  templateUrl: './products-made-in.component.html',
  styleUrls: ['./products-made-in.component.css']
})
export class ProductsMadeInComponent implements OnInit {
  madein: any = [];
  @ViewChild('table') table: MatTable<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['name', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private dialog: MatDialog,
    private productsSerivce: ProductsService,
    private snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.getAllMadeIn();
  }

  getAllMadeIn() {
    this.productsSerivce.getAllMadeIn().subscribe(res => {
      if (res.error == 200) {
        this.madein = res.data;
        this.dataSource = new MatTableDataSource(this.madein);
        this.dataSource.paginator = this.paginator;

      }
    })
  }

  onInsMadeIn(id = 0): void {
    const dialogRef = this.dialog.open(InsMadeInComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllMadeIn();
    });
  }
  onDelete(item) {
    this.productsSerivce.deleteMadeIn(item.id).subscribe(res => {
      if (res.error == 200) {
        this.snackBar.open(`Xóa Nơi Sản Xuất tại ${item.name} thành công `, "Đóng", {
          duration: 2000,
        });
        this.getAllMadeIn();
      } else {
        this.snackBar.open(`Xóa Nơi Sản Xuất tại ${item.name} thất bại `, "Đóng", {
          duration: 2000,
        });
      }
    })
  }
}
