import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  routeLinks: any = [];
  isExpandedSideNav: boolean = false;
  optionSideNav: any = {};
  isResetPassword: boolean;
  widthAppContainer: number;
  name: String;
  isSizeMobile: boolean = false;
  isBusiness: boolean;
  constructor(public breakpointObserver: BreakpointObserver,) {
    this.routeLinks = [
      { icon: "dashboard", label: "Dashboard", link: "dashboard" },
      { icon: "pages", label: "Quản lý Trang", link: "pages" },
      { icon: "category", label: "Quản lý Sản phẩm", link: "products" },
      { icon: "note_alt", label: "Quản lý Bài viết", link: "content" },
      { icon: "contact_page", label: "Quản lý Liên hệ", link: "contact" },
      { icon: "account_circle", label: "Quản lý Nhân viên", link: "users" },
    ];
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 960px)']).subscribe(result => {
      let screenWidth = window.innerWidth;
      if (result.matches && this.isBusiness || screenWidth <= 960) {
        this.isSizeMobile = true;
        this.optionSideNav = {
          mode: 'over',
          isDisableClose: false,
          isOpened: false,
          isFixed: false
        }
        this.isExpandedSideNav = true;
      } else {
        this.isSizeMobile = false;
        this.isExpandedSideNav = false;
        this.optionSideNav = {
          mode: 'side',
          isDisableClose: true,
          isOpened: true,
          isFixed: true
        }

      }

    });
  }
  expandSideNavAndFitWidth() {
    this.isExpandedSideNav = !this.isExpandedSideNav;
    this.widthAppContainer = window.innerWidth - 250;

  }

}
