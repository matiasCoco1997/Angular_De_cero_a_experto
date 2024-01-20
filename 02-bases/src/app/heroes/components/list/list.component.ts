import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroNames: string [] = ['Hulk', 'Ironman', 'Spiderman']
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop(); //remueve el ultimo elemento del array y lo retorna
  }
}
