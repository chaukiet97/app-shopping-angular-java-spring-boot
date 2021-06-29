import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-content',
  templateUrl: './box-content.component.html',
  styleUrls: ['./box-content.component.css']
})
export class BoxContentComponent implements OnInit {
  @Input('item') item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
