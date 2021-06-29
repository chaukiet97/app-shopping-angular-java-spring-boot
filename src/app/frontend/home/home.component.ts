import { ApiService } from 'src/app/shared/core/service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productSales: any = [];
  productNew: any = [];
  productHilight: any = [];
  contentHome: any = [];
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getProductByType(1).subscribe(res => {
      if (res.error == 200) {
        this.productSales = res.data
      }
    })
    this.apiService.getProductByType(2).subscribe(res => {
      if (res.error == 200) {
        this.productNew = res.data
      }
    })
    this.apiService.getProductByType(3).subscribe(res => {
      if (res.error == 200) {
        this.productHilight = res.data
      }
    })
    this.apiService.getContentHome().subscribe(res=>{
      if (res.error == 200) {
        this.contentHome = res.data
      }
    })
  }

}
