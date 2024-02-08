import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Passenger } from '../../../../../../01-typescript-intro/src/topics/11-optional-chaining';

@Component({
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({

    name: ['', [ Validators.required ] ],
    email: ['', [ Validators.required, Validators.email ] ],
    username: ['', [ Validators.required ] ],
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
