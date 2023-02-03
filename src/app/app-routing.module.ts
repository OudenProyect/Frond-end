import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './views/home/home.module';
import { PerfilModule } from './views/perfil/perfil.module';

const routes: Routes = [ 
  {
  path:"",
  loadChildren: () => import('./views/home/home.module').then(m => HomeModule)
},
{
  path:"perfil",
  loadChildren: () => import('./views/perfil/perfil.module').then(m => PerfilModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
