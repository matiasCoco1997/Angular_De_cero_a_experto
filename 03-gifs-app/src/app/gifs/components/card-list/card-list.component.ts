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
    this.searchTag();
  }

  private searchTag():void{
    this.gifsService.showLastSearchGifs();
  }
}
