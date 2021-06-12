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

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
