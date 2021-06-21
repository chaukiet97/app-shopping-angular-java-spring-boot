import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,

    public router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      let link = params.parent_link;

      if (link && link.length > 0) {
        console.log(link);

      }
      else {


      }

  });
  }

}
