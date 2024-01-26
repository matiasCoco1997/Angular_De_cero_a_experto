import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  public cacheStore : CacheStore = {
    byCapital:  { term: ""  , countries: [] } ,
    byCountries:  { term: ""  , countries: [] } ,
    byRegion:   { region: "", countries: [] }
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
   }


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

    return this.getCountriesRequest(typeOfSearch, term)
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term: term, countries: countries } ),
      tap( () => this.saveToLocalStorage() )
    );
  }

  searchByCountry( term: string) : Observable <Country[]>{
    //https://restcountries.com/v3.1/name/{name}
    const typeOfSearch: string = `/name/`;

    return this.getCountriesRequest(typeOfSearch, term)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term: term, countries: countries } ),
      tap( () => this.saveToLocalStorage() )
    );
  }

  searchByRegion( region: Region) : Observable <Country[]>{
    //https://restcountries.com/v3.1/region/{region}

    const typeOfSearch: string = `/region/`;

    return this.getCountriesRequest(typeOfSearch, region)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region: region , countries: countries } ),
      tap( () => this.saveToLocalStorage() )
    );
  }



  private saveToLocalStorage(){
    localStorage.setItem( "cacheStore" , JSON.stringify(this.cacheStore) )
  }

  private loadFromLocalStorage(){
    if( !localStorage.getItem("cacheStore") ) return;

    this.cacheStore = JSON.parse( localStorage.getItem("cacheStore")!);
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
