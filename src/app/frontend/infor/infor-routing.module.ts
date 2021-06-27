import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './../../backend/cart/cart.component';
import { InforComponent } from './infor.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '', component: InforComponent,
    children: [
      { path: '', component: CartComponent, pathMatch:'full' },
      { path: 'khach-hang', component: UserComponent },
      { path: 'gio-hang', component: CartDetailComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InforRoutingModule { }
