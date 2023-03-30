import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchsService {

  constructor(private http: HttpClient) { }

  searchViviendas(datos: string) {
    return this.http.get('/search', {params: {ubicacion: datos}})
  }
}
