import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';



@Component({
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({

    name: ['', [ Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern) ] ],
    email: ['', [ Validators.required, Validators.pattern(customValidators.emailPattern) ] ],
    username: ['', [ Validators.required, customValidators.cantBeStrider ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    passwordConfirm: ['', [ Validators.required ] ],


  });

  constructor( private fb: FormBuilder ){}

  isValidField( field:string ):boolean{
    //TODO: obtener validator desde un servicio
    return false;
  }

  onSubmit():void {

    this.myForm.markAllAsTouched();

  }

}
