import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/modules/material/material.module';
import { AcountRoutingModule } from './acount-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AcountComponent } from './acount.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AcountComponent],
  imports: [
    CommonModule,
    AcountRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AcountModule { }
