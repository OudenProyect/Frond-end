import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './views/home/home.module';
import { RegisterModule } from './views/register/register.module';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./views/home/home.module').then(m => HomeModule)
  },
  {
    path: "register",
    loadChildren: () => import('./views/register/register.module').then(m => RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
