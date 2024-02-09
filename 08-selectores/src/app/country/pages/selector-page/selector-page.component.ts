import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/country.interfaces';

@Component({
  selector: 'page-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent {

  public myForm: FormGroup = this.fb.group({

    region: ['', [ Validators.required ]],
    country: ['', [ Validators.required ]],
    borders: ['', [ Validators.required ]],

  })

  constructor(
    private fb: FormBuilder,
    private _countriesService: CountriesService,
    ){}

  get regions():Region[] {
    return this._countriesService.regions;
  }

}
