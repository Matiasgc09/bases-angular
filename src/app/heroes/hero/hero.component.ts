import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  get capitalizedName(): string {
    return this.name.toUpperCase();

  }
  getHeroDescription():string {
    return `${ this.name } - ${ this.age}`;
  }
//cambio de nombre y edad en datos, se crea nuevos metodos y se llama en el html con un click

changeHero(): void {
    this.name='Spiderman';
  }

  changeAge(): void {
    this.age= 25;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }

}


