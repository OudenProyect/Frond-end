import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  user: any = null;

  loading = true;

  http = inject(HttpClient)
  router = inject(Router)

  getToken() {
    return localStorage.getItem('token');
  }

  saveToken (token: string) {
    localStorage.setItem('token', token)
  }

  removeToken () {
    localStorage.removeItem('token')
  }

  register(datos: any) {
    return this.http.post('/signin', datos);
  }

  login(datos: any) {
    return this.http.post('/api/login_check', datos);
  }

  logout () {
    this.removeToken()
    this.user = null;
    this.router.navigate(['login'])
  }

  // peticion para informacion usuario pasando el token
  getUser() {
    return this.http.get('/api/user', {
      headers: {
        Authorization: 'Bearer ' + this.getToken(),
      },
    }).pipe(tap((res: any) => (this.user = res.user)));
  }

  editField(data: any) {
    return this.http.put('/api/profile/edit', data, {
      headers: {
        Authorization: 'Bearer ' + this.getToken(),
      },
    });
  }

  editContraseña(data: any) {
    return this.http.put('/api/changeUserPwd', data, {
      headers: {
        Authorization: 'Bearer ' + this.getToken(),
      },
    });
  }
}
