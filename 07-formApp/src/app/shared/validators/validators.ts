import { FormControl } from "@angular/forms";

export const cantBeStrider = ( control: FormControl ) => {

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
