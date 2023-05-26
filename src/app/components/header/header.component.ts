import { Component, EventEmitter, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReutilizablesService } from 'src/app/services/reutilizables.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private sesions: SesionService, private router: Router) {}
  sessionService = inject(SesionService);

  isCollapse = false; // guardamos el valor

  ngOnInit(): void {
    console.log({
      header: this.sessionService,
    });
  }
  toggleState() {
    // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }
}
