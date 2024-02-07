import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dinamic-page.component.html'
})
export class DinamicPageComponent {


  // public myFormTwo: FormGroup = this.fb.group({
  //   name:
  // });

  public myForm: FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3) ], ],
    favoriteGames: this.fb.array([
      ["Metal Gear", Validators.required],
      ["Street Fighter", Validators.required],
    ]),
  });

  constructor( private fb: FormBuilder ){}

  onSubmit():void {

    if( this.myForm.invalid ){
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset()
  }

  get favoriteGames(): FormArray{
    return this.myForm.get('favoriteGames') as FormArray;
  }

}
