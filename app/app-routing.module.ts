import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'
import { BtnComponent } from './btn/btn.component';
import { ParaComponent } from './para/para.component';

const routes:Routes=[
  {path:'mybtn',component:BtnComponent},
  {path:'mypara',component:ParaComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
