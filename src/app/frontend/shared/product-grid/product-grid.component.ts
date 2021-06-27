import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from './../../../shared/core/service/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  @Input('item') item: any;

  @Input('hidden_new') hidden_new: number

  @Input('type') type: number;
  public cart: any = {};
  public amount: number;
  constructor(
    public route: ActivatedRoute,

    public router: Router,

    private apiCart: CartService,
  ) { }

  ngOnInit(): void {
  }
  addCart(skip) {
    this.cart.id = this.item.id + this.cart.color + this.cart.size
    let data = this.apiCart.reduce();
    if (data[this.cart.id]) {
        let a = isNaN(+data[this.cart.id].amount) ? 1 : +data[this.cart.id].amount;
        this.cart.amount = +a + this.amount;
    }
    this.apiCart.edit(this.cart, this.cart.id)
    console.log(this.apiCart);

    if (skip == true) {
        this.router.navigate(['/gio-hang']);
    }
  }

}
