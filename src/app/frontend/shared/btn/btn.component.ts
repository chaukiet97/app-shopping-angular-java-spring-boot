import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input('name') name: any;
  @Input('class') class: any;
  constructor() { }

  ngOnInit(): void {
  }

}
