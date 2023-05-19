import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getTipos() {
    return this.http.get('/type');
  }

  getCaracteristicas() {
    return this.http.get('/extras');
  }

  createPost(datos: any) {
    return this.http.post('/post', datos);
  }
}
