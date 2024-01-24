import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  searchByCapital( term: string) : Observable <Country[]>{
    const searchCapitalUrl: string = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( searchCapitalUrl )
    .pipe(
      catchError( () => {
        return of([]);
      })
      //"of" es un observable, en el caso que haya un error retornaria un array vacio del tipo observable.
     );
  }
}
