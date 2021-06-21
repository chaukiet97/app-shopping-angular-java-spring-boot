import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  @Input('item') item: any;

  @Input('hidden_new') hidden_new: number

  @Input('type') type: number
  constructor() { }

  ngOnInit(): void {
  }
  addCart(item) {
    console.log(item);

  }

}
