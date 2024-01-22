import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];

  constructor(private gifsService: GifsService){

  }

  searchTag():void{
    console.log(this.gifsService.showLastSearchGifs());
    this.gifsService.searchTag(this.gifsService.showLastSearchGifs());
  }
}
