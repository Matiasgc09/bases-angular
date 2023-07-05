import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent  {

constructor (private dbzService: DbzService){} // injeccion de dependecias, hace que toda la info de dbz se vea en mainpage

get Character(): Character[]{ // con esto si se modifica aqui, se va a modificar el objeto directaemnte osea si se modifica
  return [...this.dbzService.characters]; // los character se modifica la data que esta en el servicio, con los tres punto dentro del arreglo se hace una copia de cada character agregado
 }

onDeleteCharacter(id: string):void {
  this.dbzService.deleteCharacterById(id); //esto semanticamente es mejor y elimina el character por su id
}

onNewCharacter(Character:Character):void{
  this.dbzService.addCharacter (Character);
}

}
