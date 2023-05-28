import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>



`
})

export class counterComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;

  //metodod de contador para funcionalidad de los botones
  increaseBy(value: number ):void{
this.counter += value;
  }
  reset() {
    this.counter = 10;
  }



}
