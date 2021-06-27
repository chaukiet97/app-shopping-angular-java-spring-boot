import { ApiService } from './../../../shared/core/service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  company: any = [];
  menu_support: any = [];
  menu_footer: any = [];
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.apiService.getCompany().subscribe(res => {
      if (res.error === 200) {
        this.company = res.data;
      }
    })
    this.apiService.getMenuFooter().subscribe(res => {
      if (res.error === 200) {
        this.menu_footer = res.data;
      }
    })
    this.apiService.getMenuSupport().subscribe(res => {
      if (res.error === 200) {
        this.menu_support = res.data;
      }
    })
  }

}
