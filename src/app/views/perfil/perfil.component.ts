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
  
  guardado: boolean = false;
  noGuardado: boolean = false;
  textoGuar!: string;

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
    "width.%": "84"
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
  isDisabled = true;
  isDisabled2 = true;
  isDisabled3 = true;
  isDisabled4 = true;


  opbnt() {
    this.showDiv = !this.showDiv;
    this.noPincel = !this.noPincel;
    this.ajustar["width.%"] = "70";
    this.isDisabled = false;
  }
  cancel() {
    this.noPincel = !this.noPincel;
    this.showDiv = !this.showDiv;
    this.ajustar["width.%"] = "80";
    this.isDisabled = true;
  }
  opbnt2() {
    this.showDiv2 = !this.showDiv2;
    this.noPincel2 = !this.noPincel3;
    this.ajustar2["width.%"] = "70";
    this.isDisabled2 = false;
  }
  cancel2() {
    this.noPincel2 = !this.noPincel2;
    this.showDiv2 = !this.showDiv2;
    this.ajustar2["width.%"] = "80";
    this.isDisabled2 = true;

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
    this.isDisabled3 = false;

  }
  cancel4() {
    this.noPincel4 = !this.noPincel4;
    this.showDiv4 = !this.showDiv4;
    this.ajustar4["width.%"] = "80";
    this.isDisabled3 = true;

  }
  opbnt5() {
    this.showDiv5 = !this.showDiv5;
    this.noPincel5 = !this.noPincel5;
    this.ajustar5["width.%"] = "70";
    this.isDisabled4 = false;

  }
  cancel5() {
    this.noPincel5 = !this.noPincel5;
    this.showDiv5 = !this.showDiv5;
    this.ajustar5["width.%"] = "80";
    this.isDisabled4 = true;

  }

  // edicion del usuario
  guardar(edit: any, value: any) {
    this.sesions.editField({
      id: this.userinfo.user.id,
      edit,
      value
    })
      .subscribe(res => {
        if (this.showDiv2) {
          this.cancel2();
          this.guardado = true;
 
        }else if(this.showDiv4){
          this.cancel4();
          this.guardado = true;

        }else{
          this.cancel5();
          this.guardado = true;
        }
        setTimeout(() => {
          this.guardado = false;
        }, 1500);
        console.log({ res })
      }, err => {
        if (this.showDiv2) {
          this.noGuardado = true;
        }else if(this.showDiv4){
          this.noGuardado = true;
        }else{
          this.noGuardado = true;
        }
        setTimeout(() => {
          this.noGuardado = false;
        }, 1500);
        console.log({ err })
      })
  }

}
