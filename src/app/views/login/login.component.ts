import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private formGroup: FormBuilder) {

   }

  ngOnInit(): void {
    this.formLogin = this.formGroup.group({
      usuario: ['', [
        Validators.required
      ]],
      contrasena: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ]]
    }, { updateOn: 'submit' });
  }

  submitLogin() {
    console.log(this.formLogin);
    if (this.formLogin.valid) {
      // registro
      console.log("correcto");
    } else {
      this.formLogin.markAllAsTouched()
    }
  }

}
