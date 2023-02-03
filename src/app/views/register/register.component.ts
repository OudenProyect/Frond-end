import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  formLogin: FormGroup;

  constructor(private formGroup: FormBuilder) { }

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
