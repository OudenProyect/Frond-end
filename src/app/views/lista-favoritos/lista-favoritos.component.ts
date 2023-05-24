import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.css']
})
export class ListaFavoritosComponent implements OnInit {

  favoritos: any[] = [];

  constructor(
    ) {
    
  }

  ngOnInit(): void {
    
  }

}
