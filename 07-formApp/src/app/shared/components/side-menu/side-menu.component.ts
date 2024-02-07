import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[]= [
    { title : "Básicos", route:"./reactive/basics" },
    { title : "Dinámicos", route:"./reactive/dynamics" },
    { title : "Switches", route:"./reactive/switches" },
  ];

  public authMenu: MenuItem[]= [
    { title : "Registro", route:"./auth" },
  ];

}
