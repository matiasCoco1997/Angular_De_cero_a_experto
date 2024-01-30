import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';


@NgModule({
  exports: [
    MenubarModule,
    MenuModule,
  ]
})

export class PrimeNgModule { }
