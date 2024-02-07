import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const product = {
  name:"Notebook",
  price:150000,
  inStorage: 10
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    name: ["", [ Validators.required, Validators.minLength(3)] ],
    price: [0, [ Validators.required,Validators.min(0)] ],
    inStorage: [0, [ Validators.required,Validators.min(0)] ],
  });

  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {
    this.myForm.reset(product);
  }

  onSave():void {

    if( this.myForm.invalid ){
      return;
    }

    console.log(this.myForm.value)
  }

  isValidField( field: string ):boolean | null {
    return  this.myForm.controls[field].errors
            &&
            this.myForm.controls[field].touched;
  }

  getFieldError( field: string ):string | null {

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

}
