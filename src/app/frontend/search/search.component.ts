import { TableService } from './../../shared/core/service/table.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkService } from './../../shared/core/service/link.service';
import { ApiService } from './../../shared/core/service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  item: any;
  product: any = []
  public group: any = [];
  public brand: any = [];
  public made_in: any = [];
  public valueorgin: any = [];
  public valuebrand: any = [];
  public valueproduct: any = [];
  public price: any = { min: 0, max: 0 };
  private cols = [

    { field: 'name', filter: true },

  ];
  constructor(
    private apiService: ApiService,
    private link: LinkService,
    private route: ActivatedRoute,
    private router: Router,
    public cwstable: TableService,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.item = params.link;
      this.search(this.item);


    });
  }
  search(link) {
    this.router.navigate(['/search/' + link]);
    let value = this.link._convent(link);
    let data = {
      link: value
    }
    this.apiService.search(data).subscribe(res => {
      if (res.error == 200) {
        this.product = res.data;
        this.cwstable._ini({ cols: this.cols, data: res.data, count: 10 });
        console.log(this.cwstable.data.length);

        this.extract();
      }
      else {
        this.product = res.data;
        this.cwstable._ini({ cols: this.cols, data: [], count: 10 });
        console.log(this.cwstable.data.length);

        this.extract();
      }
    })
  }
  extract = () => {
    let brand = {};

    let made_in = {};

    let product_group = {}

    let price = { min: 0, max: 0 };

    if (this.cwstable.cachedList.length > 0) {

      price.min = (+this.cwstable.cachedList[0].price_sale > 0) ? +this.cwstable.cachedList[0].price_sale : +this.cwstable.cachedList[0].price_buy;
    }
    this.cwstable.cachedList.reduce((n, o, i) => {

      if (o.brand_id && +o.brand_id > 0) {
        if (!brand[o.brand_id]) {

          brand[o.brand_id] = { id: o.brand_id, name: o.name_brand, count: 0 };
        }
        if (brand[o.brand_id]) {

          brand[o.brand_id].count = +brand[o.brand_id].count + 1;
        }
      }
      if (o.made_in_id && +o.made_in_id > 0) {

        if (!made_in[o.made_in_id]) {
          made_in[o.made_in_id] = { id: o.made_in_id, name: o.name_made, count: 0 };
        }
        if (made_in[o.made_in_id]) {

          made_in[o.made_in_id].count = +made_in[o.made_in_id].count + 1;
        }
      }

      if (o.group_id && +o.group_id > 0) {
        if (!product_group[o.group_id]) {
          product_group[o.group_id] = { id: o.group_id, name: o.name_group, count: 0 };
        }
        if (product_group[o.group_id]) {

          product_group[o.group_id].count = +product_group[o.group_id].count + 1;
        }
      }
      let p = (+o.price_sale > 0) ? +o.price_sale : +o.price_buy;

      price.min = p < price.min ? p : price.min;

      price.max = p > price.max ? p : price.max;

      return n;
    }, {});

    this.brand = Object.values(brand);

    this.made_in = Object.values(made_in);

    this.group = Object.values(product_group);

    this.price = price;
  }
  filerGroup = (id) => {
    let token = "group_id";

    let filter = this.cwstable._getFilter(token);

    let data = !filter.value ? {} : filter.value.reduce((n, o, i) => {

      n[o] = o;

      return n;
    }, {});


    if (data[id]) {

      this.valueproduct = filter.value.filter(item => {

        return +item == id ? false : true;
      });
    } else {

      this.valueproduct.push(id);
    }
    if (this.valueproduct.length == 0) {

      this.cwstable._delFilter(token);

    } else {

      this.cwstable._setFilter(token, this.valueproduct, 'in');
    }
  }
  filterBrand = (id) => {

    let token = "brand_id";

    let filter = this.cwstable._getFilter(token);

    let data = !filter.value ? {} : filter.value.reduce((n, o, i) => {

      n[o] = o;

      return n;
    }, {});


    if (data[id]) {

      this.valuebrand = filter.value.filter(item => {

        return +item == id ? false : true;
      });
    } else {

      this.valuebrand.push(id);
    }
    if (this.valuebrand.length == 0) {

      this.cwstable._delFilter(token);

    } else {

      this.cwstable._setFilter(token, this.valuebrand, 'in');
    }
  }
  filterMadeIn = (id) => {

    let token = "made_in_id";

    let filter = this.cwstable._getFilter(token);

    let data = !filter.value ? {} : filter.value.reduce((n, o, i) => {

      n[o] = o;

      return n;

    }, {});

    if (data[id]) {

      this.valueorgin = filter.value.filter(item => {

        return +item == id ? false : true;
      });
    } else {
      this.valueorgin.push(id);
    }

    if (this.valueorgin.length == 0) {

      this.cwstable._delFilter(token);

    } else {

      this.cwstable._setFilter(token, this.valueorgin, 'in');
    }
  }

}
