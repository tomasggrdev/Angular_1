import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent  
    ],
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}