import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public heroNames: string[] = ['Spiderman','Hulk','Ironman','She Hulk','Thor'];
  public deletedHero?: string;

removeLastHero(): void {
  this.deletedHero = this.heroNames.pop();
}




}
