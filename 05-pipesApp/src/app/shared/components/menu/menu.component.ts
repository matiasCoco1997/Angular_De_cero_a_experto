import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl:'./menu.component.css'
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] = [];


  ngOnInit(): void {
    this.menuItems = [

      {
        label:"Pipes de Angular",
        icon: "pi pi-desktop",
        items: [
          {
            label: "Textos y Fechas",
            icon: "pi pi-align-left",
            routerLink: "",
            routerLinkActiveOptions: "active"
          },
          {
            label: "Números",
            icon: "pi pi-dollar",
            routerLink: "numbers",
            routerLinkActiveOptions: "active"
          },
          {
            label: "No comunes",
            icon: "pi pi-globe",
            routerLink: "uncommon",
            routerLinkActiveOptions: "active"
          }
        ]
      },

      {
        label: "Pipes personalizados",
        icon: "pi pi-cog",
        items: [
          {
            label: "Otro elemento",
            icon: "pi pi-cog",
          }
        ]
      }
    ];
  }



}