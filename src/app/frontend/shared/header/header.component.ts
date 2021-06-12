import { ApiService } from './../../../shared/core/service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMenu().subscribe(res => {
      if (res.error == 200) {
        this.menu = this.compaid(res.data);
        // console.log(this.menu);

      }
    })
  }
  compaid(data) {
    let list = [];
    data = data.filter(function (item) {
      let v = (isNaN(+item.parent_id) && item.parent_id) ? 0 : +item.parent_id;
      v == 0 ? '' : list.push(item);
      return v == 0 ? true : false;
    })
    let compaidmenu = (data, skip) => {
      if (skip == true) {
        return data;
      } else {
        for (let i = 0; i < data.length; i++) {
          let obj = [];
          list = list.filter(item => {

            let skip = (+item.parent_id == +data[i]['id']) ? false : true;
            if (skip == false) { obj.push(item); }
            return skip;
          })
          let skip = (obj.length == 0) ? true : false;
          data[i]['link'] = getType(data[i]['link'], +data[i].type, data[i]['parent_id']);

          data[i]['data'] = compaidmenu(obj, skip);
        }
        return data;
      }

    };
    let getType = (link, type, parent_id) => {
      if (type == 3 && parent_id == 2) {
        return 'san-pham/' + link
      }

      return link;
    }
    return compaidmenu(data, false);

  }

}
