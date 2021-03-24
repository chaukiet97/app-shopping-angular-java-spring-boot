import { InsGroupProductComponent } from './../shared/component/products/ins-group-product/ins-group-product.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductsService } from 'src/app/shared/core/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productGroup: any = [];
  @ViewChild('table') table: MatTable<any>;
  dataSourceProductGroup: MatTableDataSource<any>;
  displayedColumnsProductGroup = ['name', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private dialog: MatDialog,
    private productsSerivce: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProductGroup();
  }
  getProductGroup() {
    this.productsSerivce.getProductGroup().subscribe((res) => {
      if (res.error == 200) {
        this.productGroup = res.data;
        this.dataSourceProductGroup = new MatTableDataSource(this.productGroup);
        this.dataSourceProductGroup.paginator = this.paginator;
        this.dataSourceProductGroup.sort = this.sort;
      }
    })
  }
  onIns(item: any): void {
    const dialogRef = this.dialog.open(InsGroupProductComponent, {
      width: '400px',
      data: { data: item }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProductGroup()
    });
  }

}
