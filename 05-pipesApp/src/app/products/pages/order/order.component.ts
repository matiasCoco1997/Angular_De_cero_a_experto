import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  public orderBy?: keyof Hero | ""  = "";

  public text: string = "nosotros";

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.azul
    },

    {
      name: "Batman",
      canFly: false,
      color: Color.negro
    },

    {
      name: "Daredevil",
      canFly: false,
      color: Color.rojo
    },

    {
      name: "Robin",
      canFly: false,
      color: Color.rojo
    },

    {
      name: "Linterna verde",
      canFly: true,
      color: Color.verde
    }
  ]



  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  chageOrder(value: keyof Hero ):void{
    this.orderBy = value;
  }
}
