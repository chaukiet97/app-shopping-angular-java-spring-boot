import { InforRoutingModule } from './infor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InforComponent } from './infor.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';



@NgModule({
  declarations: [
    InforComponent,
    CartComponent,
    UserComponent,
    CartDetailComponent,
  ],
  imports: [
    CommonModule,
    InforRoutingModule
  ]
})
export class InforModule { }
