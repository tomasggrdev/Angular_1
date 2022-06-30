import { Component } from '@angular/core';


@Component({
    selector: "app-contador",
    template: `

        <h1>{{title}}</h1>
        <h1>{{contador}}</h1>
        <h3>{{"la base es " + base}}</h3>

        <button (click)="add(base)">{{"+" + base}}</button>
        <button (click)="add(-base)">{{"-" + base}}</button>
    `
})
export class ContadorComponent {
    title = "Contador App";
    contador = 0;
    base = 5;

    add(base: number){
        this.contador += base;
    }
}