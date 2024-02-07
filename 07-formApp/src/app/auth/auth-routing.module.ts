import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { BasicPageComponent } from '../reactive/pages/basic-page/basic-page.component';
import { DinamicPageComponent } from '../reactive/pages/dinamic-page/dinamic-page.component';
import { SwitchesPageComponent } from '../reactive/pages/switches-page/switches-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      { path: "sign-up", component: RegisterPageComponent },
      { path: "**", redirectTo:"sign-up"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
