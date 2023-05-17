import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchsService {
  constructor(private http: HttpClient) {}

  dato: string = '';

  searchViviendas(datos: string) {
    return this.http.get('/search', { params: { ubicacion: datos } });
  }
  filtrar(datos: any) {
    return this.http.get('/filtrar', {
      params: {
        tipo: datos.tipo,
        surfacemin: datos.surfacemin,
        surfacemax: datos.surfacemax,
        pricemin: datos.pricemin,
        pricemax: datos.pricemax,
        hab: datos.hab,
        bath: datos.bath,
        extras: [datos.extras],
      },
    });
  }
}
