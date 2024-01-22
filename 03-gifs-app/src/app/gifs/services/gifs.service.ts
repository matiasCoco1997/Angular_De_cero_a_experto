import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private serviceUrl: string = "http://api.giphy.com/v1/gifs";
  private apiKey: string = "xaxndMvmrqLEZeXMleYuoP5YMnL4mLG2";

  constructor( private http:HttpClient ) {
      this.loadLocalStorage();
   }



  get tagsHistory(): string[]{
    return [...this._tagsHistory];
  }



  private loadLocalStorage():void{

    if( !localStorage.getItem("history") ) return;

    this._tagsHistory = JSON.parse(localStorage.getItem("history")!);
  }



  searchTag( tag: string):void {

    if(tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey )
    .set('limit', '5' )
    .set('q', tag );

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params: params })
    .subscribe( resp => {
      this.gifList = resp.data;
    });

  }



  private organizeHistory(tag:string):void{

    tag = tag.toLowerCase();

    if( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag ); //borro el tag existente
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this.tagsHistory.splice(0, 10); //lo reducimos a las ultimas 10 busquedas el historial

    this.saveLocalStorage();
  }



  private saveLocalStorage():void{
    localStorage.setItem( 'history', JSON.stringify(this._tagsHistory) );
  }

  showLastSearchGifs():void{
    this.searchTag(this._tagsHistory[0]);
  }

}
