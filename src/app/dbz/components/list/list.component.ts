import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name:'Trunks',
    power:11000
  }]
//--------------------------------------------------------------------------
//nuevo evento
//onDelete imprimiria en consola el index value : number
@Output()
public onDelete : EventEmitter <string> = new EventEmitter();// el eventemitter en este caso es de tipo number
//-------------------------------------------------------------------

  onDeleteCharacter(id?: string): void{ //lo que esta dentro del parectesis es el tipo de dato que se deberia de borrar von el evento

    if (!id) return;//si no hay un id no se hace nada

    //console.log({id})

    //TODO: emitir ID del personaje

    this.onDelete.emit ( id ); //emite ID del pesonaje
  }
}
