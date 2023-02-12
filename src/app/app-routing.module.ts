import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactModule } from './views/contact/contact.module';
import { AboutModule } from './views/about/about.module';
import { HomeModule } from './views/home/home.module';
import { LoginComponent } from './views/login/login.component';
import { LoginModule } from './views/login/login.module';
import { PerfilModule } from './views/perfil/perfil.module';
import { RegisterModule } from './views/register/register.module';
const routes: Routes = [ 
  {
    path: "",
    loadChildren: () => import('./views/home/home.module').then(m => HomeModule)
  },
  {
    path: "register",
    loadChildren: () => import('./views/register/register.module').then(m => RegisterModule)
  },
  {
    path:"login",
    loadChildren: () => import('./views/login/login.module').then(m => LoginModule)
  },
  {
    path:"perfil",
    loadChildren: () => import('./views/perfil/perfil.module').then(m => PerfilModule)
  },
  {
    path:"contact",
    loadChildren: () => import('./views/contact/contact.module').then(m => ContactModule)
  },
  {
    path:"about",
    loadChildren: () => import('./views/about/about.module').then(m => AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
