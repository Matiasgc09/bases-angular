import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero.component';
import { ListaComponent } from '../lista/lista.component';




@NgModule ({
  declarations: [
    HeroComponent,
    ListaComponent,
  ],
  exports:[
    HeroComponent,
    ListaComponent,
  ],
  imports: [
   CommonModule,
  ]
})

export class HeroesModule{

}
