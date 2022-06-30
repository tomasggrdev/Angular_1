import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Cap'];
  deletedHeroe: string = "";

  delete(): void{
    this.deletedHeroe = this.heroes.pop() || "";
    console.log(this.deletedHeroe);

  }

}
