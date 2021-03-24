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
    DialogDeleteComponent
  ],
})
export class BackendModule { }
