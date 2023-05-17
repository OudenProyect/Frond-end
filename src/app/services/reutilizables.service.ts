import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReutilizablesService {
  constructor() {}
  private datos: any;

  getMessage(): any {
    return this.datos;
    console.log(this.datos);
  }

  setDatos(nuevosDatos: any): void {
    this.datos = nuevosDatos;
  }
}
