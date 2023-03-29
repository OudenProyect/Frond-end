import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  @ViewChild('dialog') dialog: any;
  guardado: boolean = false;
  noGuardado: boolean = false;
  textoGuar!: string;
  sessionService = inject(SesionService);
  router = inject(Router);
  form = inject(FormBuilder);

  // @ts-ignore
  CambiarPWDform: FormGroup;

  ngOnInit(): void {
    this.CambiarPWDform = this.form.group(
      {
        //Contraseña antigua
        oldPassword: ['', [Validators.required]],
        // Contraseña nueva
        newPassword: ['', [Validators.required, Validators.minLength(4)]],
        // Confirmar contraseña
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
      },
      { validator: this.checkPasswords }
    );
  }

  onSubmit() {
    if (!this.CambiarPWDform.valid) {
      alert('LAS CONTRASEÑAS NO COINCIDEN');
    } else {
      this.sessionService
        .editContraseña({
          oldPassword: this.CambiarPWDform.get('oldPassword')?.value,
          newPassword: this.CambiarPWDform.get('newPassword')?.value,
          confirmPassword: this.CambiarPWDform.get('confirmPassword')?.value,
        })
        .subscribe((res) => {
          console.log(res);
        });
      alert('LAS CONTRASEÑAS SI COINCIDEN');
    }
    console.log(this.CambiarPWDform);
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatched: true };
  }

  ajustar = {
    'width.%': '80',
  };
  ajustar2 = {
    'width.%': '80',
  };
  ajustar3 = {
    'width.%': '84',
  };
  ajustar4 = {
    'width.%': '80',
  };
  ajustar5 = {
    'width.%': '80',
  };
  // @Input('pp') public text:string ="";
  showDiv = false;
  showDiv2 = false;
  showDiv3 = false;
  showDiv5 = false;
  noPincel = true;
  noPincel2 = true;
  noPincel3 = true;
  noPincel5 = true;
  isDisabled = true;
  isDisabled2 = true;
  isDisabled3 = true;
  isDisabled4 = true;

  opbnt() {
    this.showDiv = !this.showDiv;
    this.noPincel = !this.noPincel;
    this.ajustar['width.%'] = '72.7';
    this.isDisabled = false;
  }
  cancel() {
    this.noPincel = !this.noPincel;
    this.showDiv = !this.showDiv;
    this.ajustar['width.%'] = '80';
    this.isDisabled = true;
  }
  opbnt2() {
    this.showDiv2 = !this.showDiv2;
    this.noPincel2 = !this.noPincel3;
    this.ajustar2['width.%'] = '70';
    this.isDisabled2 = false;
  }
  cancel2() {
    this.noPincel2 = !this.noPincel2;
    this.showDiv2 = !this.showDiv2;
    this.ajustar2['width.%'] = '80';
    this.isDisabled2 = true;
  }
  opbnt3() {
    this.showDiv3 = !this.showDiv3;
    this.noPincel3 = !this.noPincel3;
    this.ajustar3['width.%'] = '70';
  }
  cancel3() {
    this.noPincel3 = !this.noPincel3;
    this.showDiv3 = !this.showDiv3;
    this.ajustar3['width.%'] = '80';
  }
  opbnt4() {}
  opbnt5() {
    this.showDiv5 = !this.showDiv5;
    this.noPincel5 = !this.noPincel5;
    this.ajustar5['width.%'] = '70';
    this.isDisabled4 = false;
  }
  cancel5() {
    this.noPincel5 = !this.noPincel5;
    this.showDiv5 = !this.showDiv5;
    this.ajustar5['width.%'] = '80';
    this.isDisabled4 = true;
  }
  opDialog() {
    this.dialog.nativeElement.showModal();
  }
  // edicion del usuario
  guardar(edit: any, value: any) {
    this.sessionService
      .editField({
        id: this.sessionService.user.id,
        edit,
        value,
      })
      .subscribe(
        (res) => {
          if (this.showDiv2) {
            this.cancel2();
            this.guardado = true;
          } else {
            this.cancel5();
            this.guardado = true;
          }
          setTimeout(() => {
            this.guardado = false;
          }, 1500);
          console.log({ res });
        },
        (err) => {
          if (this.showDiv2) {
            this.noGuardado = true;
          } else {
            this.noGuardado = true;
          }
          setTimeout(() => {
            this.noGuardado = false;
          }, 1500);
          console.log({ err });
        }
      );
  }
}
