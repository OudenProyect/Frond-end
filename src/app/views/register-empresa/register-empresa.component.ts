import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-empresa.component.html',
  styleUrls: ['./register-empresa.component.css'],
})
export class RegisterEmpresaComponent implements OnInit {
  errormg = '';
  user = faUser;
  lock = faLock;
  mail = faEnvelope;
  // @ts-ignore
  formLogin: FormGroup;

  constructor(
    private formGroup: FormBuilder,
    public sesion: SesionService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formGroup.group({
      nombreEmpresa: ['', [Validators.required]],
      cifEmpresa: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      linkPagina: [''],
      localizacionEmpresa: [''],
      descripcion: ['', [Validators.required]],
    });
  }

  submitLogin() {
    if (this.formLogin.valid) {
      const empresa = {
        nombreEmpresa: this.formLogin.get('nombreEmpresa')?.value,
        cifEmpresa: this.formLogin.get('cifEmpresa')?.value,
        usuario: this.formLogin.get('usuario')?.value,
        email: this.formLogin.get('email')?.value,
        password: this.formLogin.get('password')?.value,
        linkPagina: this.formLogin.get('linkPagina')?.value,
        localizacionEmpresa: this.formLogin.get('localizacionEmpresa')?.value,
        descripcion: this.formLogin.get('descripcion')?.value,
      };
      // falta back

      // this.sesion.register(empresa).subscribe(
      //   (res) => {
      //     console.log({ res });
      //     this.sesion
      //       .login({
      //         email: this.formLogin.get('email')?.value,
      //         password: this.formLogin.get('password')?.value,
      //       })
      //       .subscribe(
      //         (res: any) => {
      //           this.sesion.saveToken(res.token);
      //           this.sesion.getUser().subscribe(() => {
      //             this.router.navigate(['perfil']);
      //           });
      //         },
      //         (err) => {
      //           console.log({ err });
      //         }
      //       );
      //   },
      //   (err) => {
      //     this.errormg = err.error;
      //   }
      // );
      console.log('valido');
    } else {
      console.log(this.formLogin);
      this.formLogin.markAllAsTouched();
    }
  }
}
