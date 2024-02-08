import { FormControl, ValidationErrors } from "@angular/forms";

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cantBeStrider = ( control: FormControl ): ValidationErrors | null => {

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
