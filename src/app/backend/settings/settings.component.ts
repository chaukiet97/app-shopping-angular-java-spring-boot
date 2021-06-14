import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  routeLinks: any = [];
  constructor() {
    this.routeLinks = [
      { icon: "language", label: "Cấu hình Website", link: "website" },
      { icon: "perm_media", label: "Cấu hình Banner", link: "banner" },
      { icon: "settings_suggest", label: "Cấu hình Webhook", link: "webhook" },
      { icon: "note_add", label: "Cấu hình khác", link: "other" },

    ];
  }

  ngOnInit(): void {
  }

}
