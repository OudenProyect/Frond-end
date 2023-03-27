import { Component, inject, OnInit } from '@angular/core';
import { SesionService } from './services/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ouden';
  sessionService = inject(SesionService);

  ngOnInit(): void {
    if (this.sessionService.getToken()) {
      this.sessionService.getUser().subscribe((user) => {
        this.sessionService.user = user;
        console.log(this.sessionService.user);
      });
    }
  }
}
