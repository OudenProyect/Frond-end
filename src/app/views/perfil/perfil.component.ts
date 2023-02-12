import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']

})

export class PerfilComponent implements OnInit {

  userinfo: any = null;

  constructor(private sesions: SesionService, private router: Router) { }

  ngOnInit(): void {
    // cogemos el usuario desde el local storage , para verificar que ha iniciado sesion
    if (localStorage.getItem('token')) {
      this.sesions.user(localStorage.getItem('token'))
        .subscribe(user => {
          this.userinfo = user;
          console.log({ user })
        }, error => {
          // si hubiera un error se redirigira al login
          this.router.navigate(['login'])
        })
    } else {
      this.router.navigate(['login'])
    }
  }
}
