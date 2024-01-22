import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private serviceUrl: string = "http://api.giphy.com/v1/gifs";
  private apiKey: string = "xaxndMvmrqLEZeXMleYuoP5YMnL4mLG2";

  constructor( private http:HttpClient ) { }

  get tagsHistory(): string[]{
    return [...this._tagsHistory];
  }


  searchTag( tag: string):void {

    if(tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey )
    .set('limit', '10' )
    .set('q', tag );

    this.http.get(`${this.serviceUrl}/search`, { params: params })
    .subscribe( resp => {
      console.log(resp);
    });

  }


  private organizeHistory(tag:string):void{

    tag = tag.toLowerCase();

    if( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag ); //borro el tag existente
    }

    this._tagsHistory = this.tagsHistory.splice(0, 10); //lo reducimos a las ultimas 10 busquedas
  }
}
