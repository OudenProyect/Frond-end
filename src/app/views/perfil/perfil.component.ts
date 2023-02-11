import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
  
})

export class PerfilComponent implements OnInit {

  constructor(private sesions: SesionService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.sesions.user(localStorage.getItem('token'))
      .subscribe(user => {
        console.log({user})
      }, error => {
        this.router.navigate(['login'])
      })
    }
  }
}
