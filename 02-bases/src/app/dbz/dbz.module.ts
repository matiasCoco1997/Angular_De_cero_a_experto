import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent //declaro el componente a utilizar
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent //exporto el componente para utilizarlo en el app.module.ts
  ]
})

export class DbzModule { }
