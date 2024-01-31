import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
//import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';


@NgModule({
  exports: [
    MenubarModule,
    //MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})

export class PrimeNgModule { }
