import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dinamic-page.component.html'
})
export class DinamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3) ], ],
    favoriteGames: this.fb.array([
      ["Metal Gear", Validators.required],
      ["Street Fighter", Validators.required],
    ]),
  });

  constructor( private fb: FormBuilder ){}


  get favoriteGames(): FormArray{
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField( field: string ):boolean | null {
    return  this.myForm.controls[field].errors
            && this.myForm.controls[field].touched;
  }

  isValidFieldInArray( formArray: FormArray, index: number):boolean | null {
    return  formArray.controls[index]. errors
            && formArray.controls[index].touched;
  }

  getFieldError( field: string ):string | null {

    console.log(field);

    if( !this.myForm.controls[field] ){
      return null;
    }

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors) ) {

      switch(key){

        case "required":
          return "Este campo es requerido."

        case "minlength":
          return `Este campo debe contener como mínimo ${errors['minlength'].requiredLength} caracteres.`

      }

    }

    return null;
  }


  onSubmit():void {

    if( this.myForm.invalid ){
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset()
  }
}
