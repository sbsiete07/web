import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(){}
  ngOnInit(): void {}

  slides: string [] = ['../../../assets/ac.jpg', '../../../assets/zelda.jpg', '../../../assets/mario.jpg' ]
  lenght = this.slides.length
  i=0;

  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
     if(this.i > 0 ){
       this.i--  
     }else{
      this.i = this.lenght - 1
     }
 
  }
//edit here    
  getNext() {
    if(this.i  < this.slides.length - 1){
      this.i++;
    }else{
      this.i = 0
    }
  }

}
