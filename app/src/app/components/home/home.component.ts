import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
  ngOnInit(): void {
    this.getPokemon();
  }
  moves!:string;
  pokemon!:any;

  getPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
    .then(response => response.json())
    .then(data=> this.pokemon = data)
    .catch(err=>{console.log(err)})
  }




}
