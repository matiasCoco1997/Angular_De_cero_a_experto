import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [
    MainPageComponent,//declaro los componentes a utilizar
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent //exporto el componente para utilizarlo en el app.module.ts
  ]
})

export class DbzModule { }
