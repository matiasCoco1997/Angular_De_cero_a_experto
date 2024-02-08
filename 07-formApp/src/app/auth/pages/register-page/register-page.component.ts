import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValitadorService } from '../../../shared/validators/email-validator.service';


@Component({
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(this._validatorsService.firstNameAndLastnamePattern) ] ],
    email: ['', [ Validators.required, Validators.pattern(this._validatorsService.emailPattern) ], [ this._emailValidatorService ] ],
    username: ['', [ Validators.required, this._validatorsService.cantBeStrider ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    passwordConfirm: ['', [ Validators.required ] ],
  });

  constructor(
    private fb: FormBuilder,
    private _validatorsService: ValidatorsService ,
    private _emailValidatorService: EmailValitadorService ){}

  isValidField( field:string ):boolean | null{
    return this._validatorsService.isValidField( field, this.myForm );
  }

  onSubmit():void {

    this.myForm.markAllAsTouched();

  }

}
