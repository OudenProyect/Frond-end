import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDetailsComponent } from './home-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: HomeDetailsComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeDetailsModule { }
