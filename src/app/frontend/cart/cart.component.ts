import { ApiService } from 'src/app/shared/core/service/api.service';
import { UserService } from './../../shared/core/service/user.service';
import { CartService } from './../../shared/core/service/cart.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item: any;
  datacart: any = [];
  lengthdatacart: number;
  @ViewChild('table') table: MatTable<any>;
  dataSource = new MatTableDataSource([]);
  displayedColumns = ['images', 'name', 'price', 'count', 'action'];
  countOrder: number = 1;
  constructor(
    private cart: CartService,
    private userService: UserService,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.item = this.userService.getFe2User();
    for (let index = 0; index < this.cart.get().length; index++) {
      this.apiService.getProductById(this.cart.get()[index]['id']).subscribe(res => {
        if (res.error == 200) {
          this.datacart.push(res.data[0]);
          this.dataSource.data = this.datacart;
        }
      })
    }


  }
  addcart(amount, id) {
    let data = this.cart.reduce();
    if (data[id]) {
      data[id].amount = +amount;
    }
    this.cart.edit(data[id], id);
  }

}
