import { PersonnelGuard } from './shared/core/service/personnel.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import(`./frontend/frontend.module`).then(m => m.FrontendModule)
  },
  {
    path: 'acount',
    loadChildren: () => import(`./acount/acount.module`).then(m => m.AcountModule)
  },
  {
    path: 'admin',
    loadChildren: () => import(`./backend/backend.module`).then(m => m.BackendModule),
    canActivate: [PersonnelGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
