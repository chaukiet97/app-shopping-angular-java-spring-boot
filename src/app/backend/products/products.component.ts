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
  constructor(
    private dialog: MatDialog,
    private productsSerivce: ProductsService
  ) { }


  ngOnInit(): void {
  }
  setStep(index: number) {
    this.step = index;
  }
}
