import { Component, Input, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService){

  }

  searchByCapital( term: string):void {

    this.isLoading = true;

    this.countriesService.searchByCapital(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
