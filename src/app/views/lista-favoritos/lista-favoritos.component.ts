import { Component, OnInit, inject } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.css'],
})
export class ListaFavoritosComponent implements OnInit {
  posst = inject(PostService);
  user = inject(SesionService);
  publicaciones: any = [];
  encanta: any[] = [];
  constructor() {}

  ngOnInit(): void {
    // this.user.getUser().subscribe((e: any) => {
    //   console.log({
    //     fav: e.id,
    //   });
    // });
    this.posst.getFavorites().subscribe((e: any) => {
      this.publicaciones = e;
      e.forEach((el: any) => {
        this.encanta.push(el.id);
      });
      console.log(this.publicaciones);
    });
    console.log(this.encanta);
  }

  meencanta(id: any) {
    if (this.encanta.includes(id)) {
      this.encanta.splice(this.encanta.indexOf(id), 1);
      this.posst.removeFavorite(id).subscribe(
        (e: any) => {
          console.log(e);
        },
        (err: any) => {
          console.log({ error_remobve: err });
        }
      );
    } else {
      this.encanta.push(id);
      this.posst.addFavorite(id).subscribe(
        (e: any) => {
          console.log(e);
        },
        (err: any) => {
          console.log({ error_Add: err });
        }
      );
    }
    console.log(this.encanta);
  }
}
