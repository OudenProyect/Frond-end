import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private sesions: SesionService, private router: Router) {}
  sessionService = inject(SesionService);
  isCollapse = false; // guardamos el valor
  toggleState() {
    // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }
}
