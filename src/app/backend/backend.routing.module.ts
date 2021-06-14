import { SettingsComponent } from './settings/settings.component';
import { CustomerComponent } from './customer/customer.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: BackendComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'personnel', component: PersonnelComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'content', component: ContentComponent },
      { path: 'contact', component: ContactComponent },
      {
        path: 'settings',
        loadChildren: () => import(`./settings/settings.module`).then(m => m.SettingsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
