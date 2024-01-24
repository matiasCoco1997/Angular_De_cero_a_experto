import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

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

    const searchRegionUrl: string = `${ this.apiUrl, type, term}`;

    const result = this.http.get<Country[]>(searchRegionUrl)
    .pipe(
      catchError( () => {
        return of([]);
      })
    );

    return result;
  }


}
