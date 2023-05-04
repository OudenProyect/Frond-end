import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFavoritosComponent } from './lista-favoritos.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    component: ListaFavoritosComponent
  }

]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListaFavoritosModule { }
