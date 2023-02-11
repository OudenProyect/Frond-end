import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(private http: HttpClient) { }

  register(datos: any) {
    return this.http.post('http://127.0.0.1:8000/signin', datos)
  }

  login(datos: any) {
    return this.http.post('http://127.0.0.1:8000/api/login_check', datos)
  }

  user(token: any) {
    return this.http.get('http://127.0.0.1:8000/api/user', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }
}
