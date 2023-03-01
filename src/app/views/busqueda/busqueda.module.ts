import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: BusquedaComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BusquedaModule { }
