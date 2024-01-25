import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }


  searchCuntryByAlphaCode( code: string) : Observable <Country | null>{
    //https://restcountries.com/v3.1/alpha/{code}

    const typeOfSearch: string = `/alpha/`;

    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0] : null) ,
      catchError( () => of( null ))
    );
  }

  searchByCapital( term: string) : Observable <Country[]>{
    //https://restcountries.com/v3.1/capital/{capital}
    const typeOfSearch: string = `/capital/`;

    return this.search(typeOfSearch, term);
  }

  searchByCountry( term: string) : Observable <Country[]>{
    //https://restcountries.com/v3.1/name/{name}
    const typeOfSearch: string = `/name/`;

    return this.search(typeOfSearch, term);
  }

  searchByRegion( term: string) : Observable <Country[]>{
    //https://restcountries.com/v3.1/region/{region}

    const typeOfSearch: string = `/region/`;

    return this.search(typeOfSearch, term);
  }


  private search(type:string, term:string):Observable <Country[]>{

    const searchUrl: string = `${ this.apiUrl }${type}${term}`;

    const result = this.http.get<Country[]>(searchUrl)
    .pipe(
      catchError( () => {
        return of([]);
      })
    );

    return result;
  }


}
