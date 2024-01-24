import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  searchCapital( term: string) : Observable <Country[]>{
    const searchCapitalUrl: string = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( searchCapitalUrl );
  }
}
