import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';


@Injectable({providedIn: 'root'})
export class HeroesService {


  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroById( id:string ):Observable<Hero | undefined>{
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
    .pipe(
      catchError( () => of( undefined ) ) //el of crea un observable de undefined
    );
  }

  getSuggestions( query: string ): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }&_limit=6`);
  }

  addHer( hero:Hero ):Observable<Hero>{
    //El primer argumento es la ruta y el segundo el parametro el cual se agregará
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero( hero:Hero ):Observable<Hero>{

    if( !hero.id ){
      throw Error ("Hero id is required.");
    }
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${ hero.id }`, hero);
  }

  deleteHeroById( id:string ):Observable<Boolean>{
    //El primer argumento es la ruta y el segundo el parametro el cual se agregará
    return this.http.delete(`${this.baseUrl}/heroes/${ id }`)
    .pipe(
      catchError( error => of(false)),
      map( response => true )
    );
  }

}
