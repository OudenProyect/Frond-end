import { NgModule, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFavoritosComponent } from './lista-favoritos.component';
import { RouterModule, Routes } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';

const routes: Routes = [
  {
    path: '',
    component: ListaFavoritosComponent,
  },
];
@NgModule({
  declarations: [ListaFavoritosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ListaFavoritosModule {}
