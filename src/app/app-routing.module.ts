import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: "",
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "register",
    loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule)
  },
  {
    path:"login",
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path:"perfil",
    loadChildren: () => import('./views/perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path:"contact",
    loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:"about",
    loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule)
  },
  {
    path:"subir",
    loadChildren: () => import('./views/subir/subir.module').then(m => m.SubirModule)
  },
  {
    path:"form_subir",
    loadChildren: () => import('./views/form-subir/form-subir.module').then(m => m.FormSubirModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
