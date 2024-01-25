import { Component, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService){}

  searchByCountry( term:string ):void{

    this.isLoading = true;

    this.countriesService.searchByCountry(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
