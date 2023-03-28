import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubirComponent } from './subir.component';
import { FormSubirComponent } from '../form-subir/form-subir.component';

const routes: Routes = [
  {
    path:"",
    component: SubirComponent
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
export class SubirModule { }
