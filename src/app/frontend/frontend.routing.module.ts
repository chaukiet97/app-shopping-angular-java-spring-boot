import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { ContendDetailComponent } from './contend-detail/contend-detail.component';
import { ContendGroupComponent } from './contend-group/contend-group.component';
import { ProductComponent } from './product/product.component';
import { ContendComponent } from './contend/contend.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: FrontendComponent,
    children: [
      { path: '', redirectTo: 'trang-chu' },
      { path: 'trang-chu', component: HomeComponent },
      { path: 'lien-he', component: ContactComponent },
      { path: 'tin-tuc', component: ContendComponent },
      { path: 'san-pham', component: ProductComponent },
      { path: 'tin-tuc/:parent_link', component: ContendGroupComponent },
      { path: 'tin-tuc/:parent_link/:link', component: ContendDetailComponent },
      { path: 'san-pham/:parent_link', component: ProductGroupComponent },
      { path: 'san-pham/:parent_link/:link', component: ProductDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
