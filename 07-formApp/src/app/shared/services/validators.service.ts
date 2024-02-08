import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors , AbstractControl} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public cantBeStrider = ( control: FormControl ): ValidationErrors | null => {
    //  El control que estoy recibiendo es el del usuario,
    //  y compruebo si el valor ingresado en el input es strider
    const value: string = control.value.trim().toLowerCase();

    if( value === "strider" ){
      return {
        noStrider:true,
        msg: "Usuario existente"
      }
    }
    return null;
  }

  public isValidField( field: string, form: FormGroup ):boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }


  public isFieldOneEqualFieldTwo( fieldOne: string , fieldTwo:string ):ValidationErrors | null{

    return ( formGroup: AbstractControl ):ValidationErrors | null => {

      const fieldValueOne: string = formGroup.get(fieldOne)?.value;
      const fieldValueTwo: string = formGroup.get(fieldTwo)?.value;

      if(fieldValueOne !== fieldValueTwo){
        formGroup.get(fieldTwo)?.setErrors({ notEqual:true });
        return{ notEqual:true };
      }

      formGroup.get(fieldTwo)?.setErrors(null);

      return null;
    }

  }
}
