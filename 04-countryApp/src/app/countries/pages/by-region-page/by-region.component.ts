import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

type Region = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})

export class ByRegionPageComponent {

  public countries:Country[] = [];

  public regions: Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  public selectedRegion?: Region;

  public isLoading: boolean = false;

  constructor(private countriesService:CountriesService){}

  searchByRegion( region: Region):void{

    this.isLoading = true;

    this.selectedRegion = region;

    this.countriesService.searchByRegion(region)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });

  }
}
