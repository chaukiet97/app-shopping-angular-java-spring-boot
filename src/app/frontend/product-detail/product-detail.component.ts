import { ApiService } from './../../shared/core/service/api.service';
import { CartService } from './../../shared/core/service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public parent_link;

  public link;

  public item: any = {};

  public list = { data: [], cached: [], active: 0, limit: 5 };

  public data: any = [];

  public cart: any = {};

  constructor(

    public route: ActivatedRoute,

    public router: Router,

    private apiCart: CartService,

    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.link = params.link;
      this.parent_link = params.parent_link;
      this.apiService.getProdutDetailByLink(this.link).subscribe(res => {
        if (res.error === 200) {
          this.item = res.data[0];
          let listimages = (res.data.list_images && res.data.list_images.length > 5) ? JSON.parse(res.data.list_images) : [];
          if (this.item.images && this.item.images.length > 4) {

            this.list.cached = [this.item.images].concat(listimages);

          } else {

            this.item.images = (listimages.length > 0) ? listimages[0] : 0;

            this.list.cached = listimages;
          }
          this.list.data = this.list.cached.slice(0, this.list.limit);

        }
      })
      this.apiService.getProdutByLink(this.parent_link).subscribe(res => {
        if (res.error === 200) {
          this.data = res.data;
        }
      })






    })
    setTimeout(() => {
      if (window["viewLibrary"]) {

        window["viewLibrary"]();
      }

    }, 1000);

  }
  isActive(item, index, skip) {

    this.item.images = item;

    this.list.active = index;

    if (skip == true) {

      this.item.images = item.value;

      this.list.data = []
      let res = item.valuelistimg === '' ? item.valuelistimg : JSON.parse(item.valuelistimg);

      for (let j = 0; j < res.length; j++) {
        this.list.data.push(this.list.cached[j])
      }

    }

  }
  addcart(skip) {
    this.cart.id = this.item.id
    let data = this.apiCart.reduce();
    if (data[this.cart.id]) {
        let a = data[this.cart.id].amount == null ? 0 : +data[this.cart.id].amount;
        this.cart.amount = +a + this.item.price_sale>0?this.item.price_sale:this.item.price;
    }
    this.apiCart.edit(this.cart, this.cart.id)
    if (skip == true) {
        this.router.navigate(['/gio-hang']);
    }
    console.log(this.cart);
console.log(this.apiCart.get());

  }

}
