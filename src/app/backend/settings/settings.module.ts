import { InsBannerComponent } from './shared/component/banner/ins-banner/ins-banner.component';
import { SettingsService } from './../../shared/core/service/settings.service';
import { ImagesService } from './../../shared/core/service/images.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/modules/material/material.module';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './page/banner/banner.component';
import { WebsiteComponent } from './page/website/website.component';
import { WebhookComponent } from './page/webhook/webhook.component';
import { OtherComponent } from './page/other/other.component';
import { DeleteBannerComponent } from './shared/component/banner/delete-banner/delete-banner.component';



@NgModule({
  declarations: [SettingsComponent, BannerComponent, WebsiteComponent, WebhookComponent, OtherComponent, InsBannerComponent, DeleteBannerComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    ImagesService,
    SettingsService
  ],
  entryComponents:[InsBannerComponent,DeleteBannerComponent]

})
export class SettingsModule { }
