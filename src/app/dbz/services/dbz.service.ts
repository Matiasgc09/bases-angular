import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid'; //crea la id de un servicio



// service es un decorador que angular lo reconoce como Injectable para que lo ejecute como tal
@Injectable({
  providedIn: 'root' //es un propiedad,si nosotros no tendriamos esta propiedad "providedIn" aqui,tendriamos que trabajarlo en la parte de "app.module.ts" que posee otra seccio de "providers"
                    // dejarlo en "root" esta bien ya que nuestro servicio va a ser singleton en toda la aplicacion.
                    //no imporata en cuantos lugares  se use este servicio siempre que sea mediante inyeccion de dependencias,siempre va a tener el valor que tenga en ese momento
})
export class DbzService {

//es importante siempre definir el dato y no dejarlo como "any",en este caso vamos a generar una interface para saber el tipo de dato que poner
public characters: Character[] = [{
  id: uuid(),
  name: 'krillin',
  power: 500

},{
  id: uuid(),
  name: 'Goku',
  power:10000
},{
  id: uuid(),
  name: 'Vegeta',
  power: 7500
}];

// cuando conectemos esto a una base de datos backend y hagamos persistente la informacion en una base de datos
//en la nube por ejemplo,lo unico que nosotros tendriamos que hacer en este punto es que cuando añadimos u eliminamos
//un personaje,mandariamos a llamar una peticion http para impactar esa base de datos o para llegar a ese servicio en el backend
//y toda nuestra aplicacion literalmente seguiria funcionando exactamente igual.
//Solo que ahora es el servicioquien va a tener la logica de negocio para hacer esa modificacion en particular


  addCharacter(character: Character) : void{ //Evento para agregar pj nuevo
    const newCharacter : Character = {id:uuid(),...character}// la expresion "...character" es mucho mejor que una desestruturacion desmedida ya que si hay si hay mas propiedades no hay que cambiar nada y el "id:uuid()" es para cuando genere un nuevo personaje en consola genere un id propio
    this.characters.push(newCharacter);
  }
 // onDeleteCharacter (index: number): void { // evento para borrar pj
   // this.characters.splice(index,1); // despues del index se le agrega con una coma la cantidad de valores a borrar cuando ejecute la accion de borrado
deleteCharacterById(id:string){
  this.characters =this.characters.filter (character => character.id !==id)
}

  }








