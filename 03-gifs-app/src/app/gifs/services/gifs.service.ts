import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[]{
    return [...this._tagsHistory];
  }

  searchTag( tag: string):void {

    if(tag.length === 0) return;

    this.organizeHistory(tag);

    this._tagsHistory.unshift(tag);
  }

  private organizeHistory(tag:string):void{

    tag = tag.toLowerCase();

    if( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag ); //borro el tag existente
    }

    this._tagsHistory = this.tagsHistory.splice(0, 10); //lo reducimos a las ultimas 10 busquedas
  }
}
