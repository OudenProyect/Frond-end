import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
  constructor(private sesions: SesionService, private router: Router) { }
  userinfo: any = "";
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.sesions.user(localStorage.getItem('token'))
        .subscribe(user => {
          this.userinfo = user;
          console.log({ user })
        }, error => {
          // si hubiera un error se redirigira al login
          this.userinfo = null;
        })
    } else {
      this.userinfo = null;
    }
  }
  isCollapse = false;   // guardamos el valor
    toggleState() { // manejador del evento
        let foo = this.isCollapse;
        this.isCollapse = foo === false ? true : false; 
    }

}
