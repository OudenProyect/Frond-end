import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser , faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons' ;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user = faUser;
  lock = faLock;
  mail = faEnvelope;
  // @ts-ignore
  formLogin: FormGroup;

  constructor(private formGroup: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formGroup.group({
      usuario: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ]]
    });

    console.log(this);
  }

  submitLogin() {
    console.log(this.formLogin);
    if (this.formLogin.valid) {
      // registro
      console.log("correcto");
    } else {
      // let inputs = document.querySelectorAll('.validacion');
      // inputs.forEach(element => {
      //   element.classList.add('error-input');
      // });

      console.log(this.formLogin)
      this.formLogin.markAllAsTouched()
    }
  }

}
