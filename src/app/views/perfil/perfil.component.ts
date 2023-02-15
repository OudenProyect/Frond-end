import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { faL } from '@fortawesome/free-solid-svg-icons';

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


  ajustar = {
    "width.%": "80"
  }
  ajustar2 = {
    "width.%": "80"
  }
  ajustar3 = {
    "width.%": "83"
  }
  ajustar4 = {
    "width.%": "80"
  }
  ajustar5 = {
    "width.%": "80"
  }
  // @Input('pp') public text:string ="";
  showDiv = false;
  showDiv2 = false;
  showDiv3 = false;
  showDiv4 = false;
  showDiv5 = false;
  noPincel = true;
  noPincel2 = true;
  noPincel3 = true;
  noPincel4 = true;
  noPincel5 = true;


  opbnt() {
    this.showDiv = !this.showDiv;
    this.noPincel = !this.noPincel;
    this.ajustar["width.%"] = "70";

  }
  cancel() {
    this.noPincel = !this.noPincel;
    this.showDiv = !this.showDiv;
    this.ajustar["width.%"] = "80";
  }
  opbnt2() {
    this.showDiv2 = !this.showDiv2;
    this.noPincel2 = !this.noPincel3;
    this.ajustar2["width.%"] = "70";
  }
  cancel2() {
    this.noPincel2 = !this.noPincel2;
    this.showDiv2 = !this.showDiv2;
    this.ajustar2["width.%"] = "80";
  }
  opbnt3() {
    this.showDiv3 = !this.showDiv3;
    this.noPincel3 = !this.noPincel3;
    this.ajustar3["width.%"] = "70";
  }
  cancel3() {
    this.noPincel3 = !this.noPincel3;
    this.showDiv3 = !this.showDiv3;
    this.ajustar3["width.%"] = "80";
  }
  opbnt4() {
    this.showDiv4 = !this.showDiv4;
    this.noPincel4 = !this.noPincel4;
    this.ajustar4["width.%"] = "70";
  }
  cancel4() {
    this.noPincel4 = !this.noPincel4;
    this.showDiv4 = !this.showDiv4;
    this.ajustar4["width.%"] = "80";
  }
  opbnt5() {
    this.showDiv5 = !this.showDiv5;
    this.noPincel5 = !this.noPincel5;
    this.ajustar5["width.%"] = "70";
  }
  cancel5() {
    this.noPincel5 = !this.noPincel5;
    this.showDiv5 = !this.showDiv5;
    this.ajustar5["width.%"] = "80";
  }

  // edicion del usuario
  guardar(edit: any, value: any) {
    this.sesions.editField({
      id: this.userinfo.user.id,
      edit,
      value
    })
      .subscribe(res => {
        
        console.log({ res })
      }, err => {
        console.log({ err })
      })
  }

}
