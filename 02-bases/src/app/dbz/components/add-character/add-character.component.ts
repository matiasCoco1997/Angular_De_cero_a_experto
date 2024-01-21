import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power:0
  };

  emitCharacter():void {

    // debugger; el debugger hace que corte la ejecucion en esa linea para ir debuggeando el codigo.

    console.log(this.character);

    if( this.character.name.length === 0 || this.character.power === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0};
  }
}
