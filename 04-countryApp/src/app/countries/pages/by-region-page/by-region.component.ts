import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries:Country[] = [];


  constructor(private countriesService:CountriesService){}

  searchByRegion( term: string):void{

    this.countriesService.searchByRegion(term)
    .subscribe( countries =>
        this.countries = countries
      );

  }
}
