import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
              <h1>Hola Counter</h1>

              <h3>Counter: {{counter}}</h3>

              <button (click)="increaseBy(1)">+1</button>
              <button (click)="dicreaseBy(1)">-1</button>
              <button (click)="reset()">Reset</button>
            `
})

export class CounterComponent  {

  constructor() { }
  public counter: number = 10;

  increaseBy( value : number ):void {
    this.counter += value;
  }

  dicreaseBy( value : number ):void {
    this.counter -= value;
  }

  reset () : void{
    this.counter = 10;
  }

}
