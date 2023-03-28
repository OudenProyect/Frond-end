import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSubirComponent } from './form-subir.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    component: FormSubirComponent
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormSubirModule { }
