import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FrontendRoutingModule } from './frontend.routing.module';



@NgModule({
  declarations: [FrontendComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FrontendModule { }
