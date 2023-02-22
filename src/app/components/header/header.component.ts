import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userinfo: any = null;

  constructor(private sesions: SesionService, private router: Router) { }

  ngOnInit(): void {
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
