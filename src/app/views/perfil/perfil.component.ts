import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
  
})

export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('pp') public text:string ="";
}
