import { Component, Input, OnInit } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
  


})

export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Input('pp') public text:string ="";
  showDiv = false;
  showDiv2 = false;
  showDiv3 = false;
  showDiv4 = false;
  showDiv5 = false;
  noPincel= true;
  opbnt(){
    this.showDiv = !this.showDiv;
    this.noPincel = !this.noPincel;
  }
  cancel(){
    this.noPincel = !this.noPincel;
    this.showDiv = !this.showDiv;

  }
  opbnt2(){
    this.showDiv2 = !this.showDiv2;
}
  opbnt3(){
    this.showDiv3 = !this.showDiv3;
  }
  opbnt4(){
    this.showDiv4 = !this.showDiv4;
  }
  opbnt5(){
    this.showDiv5 = !this.showDiv5;
  }
  
}
