import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const product = {
  name:"RTX 5090",
  price: 2500,
  inStorage: 20
}

@Component({
  templateUrl: './basic-page.component.html',
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

  onSave():void{
    console.log(this.myForm.value)
  }

}
