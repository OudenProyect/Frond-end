import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcontact',
  templateUrl: './formcontact.component.html',
  styleUrls: ['./formcontact.component.css']
})
export class FormcontactComponent implements OnInit {

  constructor() { }
  nameInput!: string;
  emailInput!: string;
  messageInput!: string;

  sendEmail() {
    const recipient = 'beatrizmunozabellan@gmail.com';
    const subject = `Nuevo mensaje de ${this.nameInput}`;
    const body = `Nombre: ${this.nameInput}\nCorreo electrónico: ${this.emailInput}\nMensaje: ${this.messageInput}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }
  ngOnInit(): void {
  }

}
