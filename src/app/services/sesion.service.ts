import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  user: any = null;

  constructor(public http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token');
  }

  register(datos: any) {
    return this.http.post('http://127.0.0.1:8000/signin', datos);
  }

  login(datos: any) {
    return this.http.post('http://127.0.0.1:8000/api/login_check', datos);
  }

  // peticion para informacion usuario pasando el token
  getUser() {
    return this.http.get('http://127.0.0.1:8000/api/user', {
      headers: {
        Authorization: 'Bearer ' + this.getToken(),
      },
    });
  }

  editField(data: any) {
    return this.http.put('http://127.0.0.1:8000/api/profile/edit', data, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
  }

  editContraseña(data: any) {
    return this.http.put('http://127.0.0.1:8000/api/changeUserPwd', data, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
  }
}
