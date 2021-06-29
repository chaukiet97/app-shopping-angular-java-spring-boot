import { ApiService } from 'src/app/shared/core/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contend',
  templateUrl: './contend.component.html',
  styleUrls: ['./contend.component.css']
})
export class ContendComponent implements OnInit {
  public parent_link;
  public content: any = [];
  title: any;
  constructor(
    public route: ActivatedRoute,

    public apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parent_link = params.parent_link;
      if (this.parent_link) {
        this.apiService.getContentByLinkGroup(this.parent_link).subscribe(res => {
          if (res.error === 200) {
            this.content = res.data;
            this.title = res.data[0].name_group;
          }
        })
      }
      else {
        this.apiService.getContentHome().subscribe(res => {
          if (res.error === 200) {
            this.content = res.data;
          }
        })
      }

    })
  }

}
