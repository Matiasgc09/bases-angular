import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent { // adeción de personaje en formulario

@Output()
public onNewCharacter: EventEmitter <Character>= new EventEmitter(); // evento de emision para datos que se carguen al formulario



  public character : Character = { //el objeto!
    name: '',
    power: 0
  }
  emitCharacter(): void{

    if (this.character.name.length === 0) return; // con este codigo no dejamos que puedan cargar el espacio vacio,si o si debe llevar un nombre!
    this.onNewCharacter.emit(this.character); // si tiene un nombre con este codigo anexado al output de arriba lo hará

    this.character = { name:'' , power: 0}; // esto es lo mismo que esta debajo pero puesto en una sola asignacion para una sola lectura al objeto de arriba
    //this.character.name = ''; //retorna a vacio una vez submiteado el dato
    //this.character.power= 0;  //retorna a 0 una vez submiteado el dato

  }

}
