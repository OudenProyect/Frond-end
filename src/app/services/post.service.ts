import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token');
  }

  getTipos() {
    return this.http.get('/type');
  }

  getCaracteristicas() {
    return this.http.get('/extras');
  }

  createPost(datos: any) {
    return this.http.post('/post', datos);
  }

  getPost(id: string) {
    return this.http.get('/publicacion', { params: { id: id } });
  }

  addFavorite(id: string) {
    return this.http.post(
      '/api/favorite',
      { id: id },
      {
        headers: {
          Authorization: 'Bearer ' + this.getToken(),
        },
      }
    );
  }
  removeFavorite(id: string) {
    return this.http.post(
      '/api/remFavorite',
      { id: id },
      {
        headers: {
          Authorization: 'Bearer ' + this.getToken(),
        },
      }
    );
  }

  getFavorites() {
    return this.http.get('/api/favorites', {
      headers: {
        Authorization: 'Bearer ' + this.getToken(),
      },
    });
  }
}
