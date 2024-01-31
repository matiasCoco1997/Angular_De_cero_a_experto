import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  public text: string = "nosotros";

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue
    },

    {
      name: "Batman",
      canFly: false,
      color: Color.black
    },

    {
      name: "Daredevil",
      canFly: false,
      color: Color.red
    },

    {
      name: "Robin",
      canFly: false,
      color: Color.red
    },


    {
      name: "Linterna verde",
      canFly: true,
      color: Color.green
    }
  ]



  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

}
