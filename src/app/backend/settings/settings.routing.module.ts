import { OtherComponent } from './page/other/other.component';
import { WebhookComponent } from './page/webhook/webhook.component';
import { WebsiteComponent } from './page/website/website.component';
import { BannerComponent } from './page/banner/banner.component';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'website' },
      { path: 'banner', component: BannerComponent },
      { path: 'website', component: WebsiteComponent },
      { path: 'webhook', component: WebhookComponent },
      { path: 'other', component: OtherComponent },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
