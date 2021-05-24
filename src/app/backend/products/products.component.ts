import { DialogDeleteProductsComponent } from './../shared/component/config/dialog-delete-products/dialog-delete-products.component';
import { InsProductComponent } from './../shared/component/products/ins-product/ins-product.component';
import { InsGroupProductComponent } from './../shared/component/products/ins-group-product/ins-group-product.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductsService } from 'src/app/shared/core/service/products.service';
import { InsMadeInComponent } from '../shared/component/products/ins-made-in/ins-made-in.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  step = 0;
  product: any = [];
  @ViewChild('table') table: MatTable<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id','name', 'images', 'count', 'price', 'price_sale', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private dialog: MatDialog,
    private productsSerivce: ProductsService
  ) { }


  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct() {
    this.productsSerivce.getAllProduct().subscribe(res => {
      if (res.error == 200) {
        this.product = res.data;
        this.dataSource = new MatTableDataSource(this.product);
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
  setStep(index: number) {
    this.step = index;
  }
  onInsProduct(id = 0): void {
    const dialogRef = this.dialog.open(InsProductComponent, {
      width: '850px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProduct()
    });
  }
  onDeleteProduct(data){
    const dialogRef = this.dialog.open(DialogDeleteProductsComponent, {
      width: '400px',
      data: { data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProduct();
    });
  }
}
