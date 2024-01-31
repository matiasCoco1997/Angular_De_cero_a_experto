import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  public text: string = "nosotros";

  public isUpperCase: boolean = false;

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

}
