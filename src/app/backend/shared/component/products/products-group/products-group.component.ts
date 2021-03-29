import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { InsGroupProductComponent } from './../ins-group-product/ins-group-product.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from './../../../../../shared/core/service/products.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-group',
  templateUrl: './products-group.component.html',
  styleUrls: ['./products-group.component.css']
})
export class ProductsGroupComponent implements OnInit {
  productGroup: any = [];
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
    this.getProductGroup();
  }
  getProductGroup() {
    this.productsSerivce.getProductGroup().subscribe((res) => {
      if (res.error == 200) {
        this.productGroup = res.data;
        this.dataSource = new MatTableDataSource(this.productGroup);
        this.dataSource.paginator = this.paginator;
      }
    })
  }
  onInsProductGroup(id = 0): void {
    const dialogRef = this.dialog.open(InsGroupProductComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProductGroup()
    });
  }
  onDelete(item){
    this.productsSerivce.deleteProductGroup(item.id).subscribe(res=>{
      if (res.error == 200) {
        this.snackBar.open(`Xóa nhóm sản phẩm ${item.name} thành công `, "Đóng", {
          duration: 2000,
        });
        this.getProductGroup();
      }
      else {
        this.snackBar.open(`Xóa nhóm sản phẩm ${item.name} thất bại `, "Đóng", {
          duration: 2000,
        });
      }
    })
  }

}
