import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchsService {

  constructor(private http: HttpClient) { }

  searchViviendas(datos: any) {
    return this.http.get('http://127.0.0.1:8000/search', datos)
  }
}
