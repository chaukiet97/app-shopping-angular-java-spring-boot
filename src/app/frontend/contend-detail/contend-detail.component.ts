import { ApiService } from 'src/app/shared/core/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contend-detail',
  templateUrl: './contend-detail.component.html',
  styleUrls: ['./contend-detail.component.css']
})
export class ContendDetailComponent implements OnInit {

  contentDetail: any = [];

  public parent_link;

  public link;
  constructor(

    public route: ActivatedRoute,

    public router: Router,

    public apiService: ApiService,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.link = params.link;
      this.parent_link = params.parent_link;
      this.apiService.getContentDetalByLink(this.link).subscribe(res => {
        if (res.error === 200) {
          this.contentDetail = res.data[0];
        }
      })
    })
  }

}
