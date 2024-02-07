import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"basics",
        component:BasicPageComponent
      },

      {
        path:"dynamics",
        component:DinamicPageComponent
      },

      {
        path:"switches",
        component:SwitchesPageComponent
      },

      {
        path:"**",
        component:BasicPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }