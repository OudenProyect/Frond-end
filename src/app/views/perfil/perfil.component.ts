import { Component, Input, OnInit } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  
})

export class PerfilComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  } 
  ajustar={
    "width.%":"80"
  }
  ajustar2={
    "width.%":"80"
  }
  ajustar3={
    "width.%":"80"
  }
  ajustar4={
    "width.%":"80"
  }
  ajustar5={
    "width.%":"80"
  }
  // @Input('pp') public text:string ="";
  showDiv = false;
  showDiv2 = false;
  showDiv3 = false;
  showDiv4 = false;
  showDiv5 = false;
  noPincel= true;
  noPincel2= true;
  noPincel3= true;
  noPincel4= true;
  noPincel5= true;


  opbnt(){
    this.showDiv = !this.showDiv;
    this.noPincel = !this.noPincel;
    this.ajustar["width.%"]= "70";  

  }
  cancel(){
    this.noPincel = !this.noPincel;
    this.showDiv = !this.showDiv;
    this.ajustar["width.%"]= "80";
  }
  opbnt2(){
    this.showDiv2 = !this.showDiv2;
    this.noPincel2 = !this.noPincel3;
    this.ajustar2["width.%"]= "70"; 
  }
  cancel2(){
    this.noPincel2 = !this.noPincel2;
    this.showDiv2 = !this.showDiv2;
    this.ajustar2["width.%"]= "80";
  }
  opbnt3(){
    this.showDiv3 = !this.showDiv3;
    this.noPincel3 = !this.noPincel3;
    this.ajustar3["width.%"]= "70"; 
  }
  cancel3(){
    this.noPincel3 = !this.noPincel3;
    this.showDiv3 = !this.showDiv3;
    this.ajustar3["width.%"]= "80";
  }
  opbnt4(){
    this.showDiv4 = !this.showDiv4;
    this.noPincel4 = !this.noPincel4;
    this.ajustar4["width.%"]= "70"; 
  }
  cancel4(){
    this.noPincel4 = !this.noPincel4;
    this.showDiv4 = !this.showDiv4;
    this.ajustar4["width.%"]= "80";
  }
  opbnt5(){
    this.showDiv5 = !this.showDiv5;
    this.noPincel5 = !this.noPincel5;
    this.ajustar5["width.%"]= "70"; 
  }
  cancel5(){
    this.noPincel5 = !this.noPincel5;
    this.showDiv5 = !this.showDiv5;
    this.ajustar5["width.%"]= "80";
  }
  
}
