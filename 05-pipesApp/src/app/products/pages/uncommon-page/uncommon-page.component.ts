import { Component } from '@angular/core';

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

  //slicePipe
}
