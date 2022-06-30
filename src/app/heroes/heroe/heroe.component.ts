import {Component} from '@angular/core';

@Component({
    selector: "app-heroe",
    templateUrl: "./heroe.component.html"
})
export class HeroeComponent{
    name: string = "ironman";
    age: number = 35;

    fun(): string {
        return `${this.name} - ${this.age}`;
    }

    switchName(): void{
        if(this.name == "Spiderman"){
            this.name = "Ironman";
        } else {
            this.name = "Spiderman";
        }
    }

    switchAge(): void{
        if(this.age == 31){
            this.age = 35;
        } else {
            this.age = 31; 
        }        
    }

}