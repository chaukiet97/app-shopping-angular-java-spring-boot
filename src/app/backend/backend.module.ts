import { MaterialModule } from './../shared/modules/material/material.module';
import { BackendRoutingModule } from './backend.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { PagesComponent } from './pages/pages.component';
import { UsersComponent } from './users/users.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { InsGroupPagesComponent } from './shared/component/pages/ins-group-pages/ins-group-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsGroupProductComponent } from './shared/component/products/ins-group-product/ins-group-product.component';
import { InsPagesComponent } from './shared/component/pages/ins-pages/ins-pages.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { DialogDeleteComponent } from './shared/component/config/dialog-delete/dialog-delete.component';
import { DialogDeletePageComponent } from './shared/component/config/dialog-delete-page/dialog-delete-page.component';
import { InsMadeInComponent } from './shared/component/products/ins-made-in/ins-made-in.component';
import { ProductsGroupComponent } from './shared/component/products/products-group/products-group.component';
import { ProductsMadeInComponent } from './shared/component/products/products-made-in/products-made-in.component';
import { ProductsBrandComponent } from './shared/component/products/products-brand/products-brand.component';
import { InsBrandProductComponent } from './shared/component/products/ins-brand-product/ins-brand-product.component';



@NgModule({
  declarations: [
    BackendComponent,
    DashboardComponent,
    ProductsComponent,
    PagesComponent,
    UsersComponent,
    ContentComponent,
    ContactComponent,
    InsGroupPagesComponent,
    InsGroupProductComponent,
    InsPagesComponent,
    DialogDeleteComponent,
    DialogDeletePageComponent,
    InsMadeInComponent,
    ProductsGroupComponent,
    ProductsMadeInComponent,
    ProductsBrandComponent,
    InsBrandProductComponent,
  ],
  imports: [
    CommonModule,
    BackendRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  entryComponents: [
    InsGroupPagesComponent,
    InsGroupProductComponent,
    InsPagesComponent,
    DialogDeleteComponent,
    DialogDeletePageComponent,
    InsMadeInComponent,
    InsBrandProductComponent,
  ],
})
export class BackendModule { }
