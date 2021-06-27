import { TableService } from './../../shared/core/service/table.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/core/service/api.service';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {

  product: any = [];
  title: string;
  link: string;
  private cols = [

    { field: 'name', filter: true },

  ];
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public apiService: ApiService,
    public cwstable: TableService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      let link = params.parent_link;
      this.link = link;

      if (link && link.length > 0) {
        this.apiService.getProdutByLink(link).subscribe(res => {
          if (res.error === 200) {
            this.cwstable._ini({ cols: this.cols, data: res.data, count: 10 });
            this.product = res.data;
            this.title = this.product[0].name_group;
          }
          if (res.error === 404) {
            this.product = res.data
          }
        })
      }

    });
  }
  onBack(){
    this.router.navigate(['/'])
  }

}
