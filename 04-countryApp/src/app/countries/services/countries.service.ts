import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  public cacheStore : CacheStore = {
    byCapital:  { term: ""  , countries: [] } ,
    byCountries:  { term: ""  , countries: [] } ,
    byRegion:   { region: "", countries: [] }
  }

  constructor(private http: HttpClient) { }


  searchCuntryByAlphaCode( code: string) : Observable <Country | null>{
    //https://restcountries.com/v3.1/alpha/{code}

    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0] : null) ,
      catchError( () => of( null )),
      delay(2000), //genera un delay de 2 segundos para que carguen los elementos
    );
  }

  searchByCapital( term: string) : Observable <Country[]>{
    //https://restcountries.com/v3.1/capital/{capital}
    const typeOfSearch: string = `/capital/`;

    return this.getCountriesRequest(typeOfSearch, term);
  }

  searchByCountry( term: string) : Observable <Country[]>{
    //https://restcountries.com/v3.1/name/{name}
    const typeOfSearch: string = `/name/`;

    return this.getCountriesRequest(typeOfSearch, term);
  }

  searchByRegion( term: string) : Observable <Country[]>{
    //https://restcountries.com/v3.1/region/{region}

    const typeOfSearch: string = `/region/`;

    return this.getCountriesRequest(typeOfSearch, term);
  }


  private getCountriesRequest(type:string, term:string):Observable <Country[]>{

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
