import { ContentService } from './../shared/core/service/content.service';
import { ContactService } from './../shared/core/service/contact.service';
import { UserService } from './../shared/core/service/user.service';
import { ProductsService } from './../shared/core/service/products.service';
import { PagesService } from './../shared/core/service/pages.service';
import { ImagesService } from './../shared/core/service/images.service';
import { LinkService } from './../shared/core/service/link.service';
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
import { InsProductComponent } from './shared/component/products/ins-product/ins-product.component';
import { CartComponent } from './cart/cart.component';
import { DialogDeleteProductsComponent } from './shared/component/config/dialog-delete-products/dialog-delete-products.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { CustomerComponent } from './customer/customer.component';
import { InsPersonnelComponent } from './shared/component/personnel/ins-personnel/ins-personnel.component';
import { DeletePersonnelComponent } from './shared/component/personnel/delete-personnel/delete-personnel.component';
import { UpdatePasswordComponent } from './shared/component/personnel/update-password/update-password.component';
import { ReplyContactComponent } from './shared/component/contact/reply-contact/reply-contact.component';
import { DeleteContactComponent } from './shared/component/contact/delete-contact/delete-contact.component';
import { InsGroupComponent } from './shared/component/content/ins-group/ins-group.component';
import { InsContendComponent } from './shared/component/content/ins-contend/ins-contend.component';
import { DeleteGroupContendComponent } from './shared/component/content/delete-group-contend/delete-group-contend.component';
import { DeleteContendComponent } from './shared/component/content/delete-contend/delete-contend.component';



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
    InsProductComponent,
    CartComponent,
    DialogDeleteProductsComponent,
    PersonnelComponent,
    CustomerComponent,
    InsPersonnelComponent,
    DeletePersonnelComponent,
    UpdatePasswordComponent,
    ReplyContactComponent,
    DeleteContactComponent,
    InsGroupComponent,
    InsContendComponent,
    DeleteGroupContendComponent,
    DeleteContendComponent,
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
    InsPersonnelComponent,
    DeletePersonnelComponent,
    UpdatePasswordComponent,
    InsGroupComponent,
    InsContendComponent,
    DeleteGroupContendComponent,
    DeleteContendComponent,
  ],
  providers:[
    LinkService,
    ImagesService,
    PagesService,
    ProductsService,
    UserService,
    ContactService,
    ContentService,

  ]

})
export class BackendModule { }
