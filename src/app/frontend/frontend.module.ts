import { KeywordsService } from './../shared/core/service/keywords.service';
import { TableService } from './../shared/core/service/table.service';
import { ImagesService } from './../shared/core/service/images.service';
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
import { ProductComponent } from './product/product.component';
import { ContendComponent } from './contend/contend.component';
import { ContendDetailComponent } from './contend-detail/contend-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContendGroupComponent } from './contend-group/contend-group.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { ProductGridComponent } from './shared/product-grid/product-grid.component';



@NgModule({
  declarations: [FrontendComponent, HomeComponent, HeaderComponent, FooterComponent, ContactComponent, ProductComponent, ContendComponent, ContendDetailComponent, ProductDetailComponent, ContendGroupComponent, ProductGroupComponent, ProductGridComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    ApiService,
    ImagesService,
    TableService,
    KeywordsService
  ],

})
export class FrontendModule { }
