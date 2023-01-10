import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
  ngOnInit(): void {} 

  i = 0;
  slider: Project[] = [
    {
      nombre: 'ac',
      imagen: '../../../assets/ac.jpg',
      titulo: "Assassin's Creed",
      descripcion: 'Projecto sobre mi saga favorita de juegos',
    },
    {
      nombre: 'zelda',
      imagen: '../../../assets/zelda.jpg',
      titulo: 'The Legend of Zelda',
      descripcion: 'Projecto sobre mi segunda saga favorita de juegos',
    },
    {
      nombre: 'mario',
      imagen: '../../../assets/mario.jpg',
      titulo: 'Super Mario Galaxy',
      descripcion: 'Projecto sobre mi videojuego de Mario favorito',
    },
  ];

  getSlide() {
    return this.slider[this.i].imagen;
  }

  getPrev() {
    if (this.i > 0) {
      this.i--;
    } else {
      this.i = this.slider.length - 1;
    }
  }

  getNext() {
    if (this.i < this.slider.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
  }
}
