import { ApiService } from './../shared/core/service/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FrontendRoutingModule } from './frontend.routing.module';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [FrontendComponent, HomeComponent, HeaderComponent, FooterComponent, ContactComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    ApiService
  ]
})
export class FrontendModule { }
