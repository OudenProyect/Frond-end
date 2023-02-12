import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lock = faLock;
  mail = faEnvelope;
  // @ts-ignore
  formLogin: FormGroup;
  errormg = '';

  constructor(private formGroup: FormBuilder, public sesion: SesionService,public router: Router) {
    
  }

  ngOnInit(): void {
    this.formLogin = this.formGroup.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  submitLogin() {
    if (this.formLogin.valid) {
      this.sesion.login({
        email: this.formLogin.get('email')?.value,
        password: this.formLogin.get('password')?.value
      })
      .subscribe((res: any) => {
        window.localStorage.setItem('token', res.token);
        this.router.navigate([
          'perfil'
        ])
      }, err => {
        this.errormg = err
        console.log({ err })
      })
    } else {
      this.formLogin.markAllAsTouched()
    }
  }

}
