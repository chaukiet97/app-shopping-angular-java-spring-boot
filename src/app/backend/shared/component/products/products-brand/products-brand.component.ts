import { MatSnackBar } from '@angular/material/snack-bar';
import { InsBrandProductComponent } from './../ins-brand-product/ins-brand-product.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from './../../../../../shared/core/service/products.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-brand',
  templateUrl: './products-brand.component.html',
  styleUrls: ['./products-brand.component.css']
})
export class ProductsBrandComponent implements OnInit {
  brand: any = [];
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
    this.getAllBrand();
  }

  getAllBrand() {
    this.productsSerivce.getAllBrand().subscribe(res => {
      if (res.error == 200) {
        this.brand = res.data;
        this.dataSource = new MatTableDataSource(this.brand);
        this.dataSource.paginator = this.paginator;

      }
    })
  }

  onInsBrand(id = 0): void {
    const dialogRef = this.dialog.open(InsBrandProductComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBrand();
    });
  }
  onDelete(item) {
    this.productsSerivce.deleteBrand(item.id).subscribe(res => {
      if (res.error == 200) {
        this.snackBar.open(`Xóa Thương Hiệu của ${item.name} thành công `, "Đóng", {
          duration: 2000,
        });
        this.getAllBrand();
      } else {
        this.snackBar.open(`Xóa Thương Hiệu của ${item.name} thất bại `, "Đóng", {
          duration: 2000,
        });
      }
    })
  }

}
