import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = "Matías";
  public gender: "male" | "female" = "male";
  public invitationMap = {
    male: "invitarlo",
    female:"invitarla"
  }

  changeClient():void{
    if(this.name === "Matías"){
      this.name= "Rocio";
      this.gender = "female";
    } else{
      this.name = "Matías";
      this.gender = "male";
    }
  }

  //i18nPlural
  public clients: string[] = ["Maria", "Pedro","Fernando", " Matías", "Eduardo", "Melissa", "Rocio"];
  public clientsMap = {
    "=0": "no tenemos ningun cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "other": "tenemos # clientes esperando.",
  }

  deleteClient():void{
    this.clients.shift();
  }

  //keyValuePipe
  public person = {
    name: "Matías",
    age: 26,
    address: "Buenos Aires, Argentina"
  }


  //AsyncPipe
  public myObservableTimer: Observable<number> = interval(2000);

  //en el caso de la promesa no es posible cancelarla, se ejecutará desde cualquier página
  public promiseValue: Promise<string> = new Promise( (resolve, reject ) => {
    setTimeout( () => {
      resolve("Tenemos data en la promesa.");
      console.log("Tenemos data en la promesa.");
    }, 3500)
  })
}
