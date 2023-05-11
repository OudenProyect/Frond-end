import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEmpresaComponent } from './register-empresa.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    component: RegisterEmpresaComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterEmpresaModule { }
