import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditFormSubirComponent } from './edit-form-subir.component';

const routes: Routes = [
  {
    path:"",
    component: EditFormSubirComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditFormSubirModule { }
