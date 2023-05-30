import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css'],
})
export class HomeDetailsComponent implements OnInit {
  sliderImages: any = [];
  selectedImage!: string;
  currentSlide = 0;
  encanta: boolean = false;
  favorito: any[] = [];
  publicacion: any;
  user: any;
  session = inject(SesionService);
  id: string = '';
  post = inject(PostService);
  active: boolean = false;

  selectSlide(index: number) {
    this.selectedImage = this.sliderImages[index];
    this.currentSlide = index;
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  ngOnInit(): void {

    this.post.getPost(this.id).subscribe((e: any) => {
      this.publicacion = e;

      this.publicacion.house.feature = e.house.feature.map((element: any) => {
        const modifiedElement = { ...element, name: element.name.toLowerCase().replace(/\s/g, ''),show:element.name };
        return modifiedElement;
      });

      console.log(this.publicacion);
      this.publicacion.images.forEach((element: any) => {
        this.sliderImages.push('http://127.0.0.1:8000/images/' + element.name);
      });

    });
    this.active = this.session.loading;
    if (this.session.loading) {
      this.session.getUser().subscribe((e: any) => {
        this.user = e;
        this.encanta = e.user.favoritPublications.find(
          (e: any) => e.id == this.publicacion.id
        )
          ? true
          : false;
      });
    }
  }

  meencanta(id: any) {
    if (this.active) {
      if (this.encanta) {
        this.post.removeFavorite(id).subscribe(
          (e: any) => {
            this.encanta = false;
          },
          (err: any) => {
            console.log({ error_remobve: err });
          }
        );
      } else {
        this.post.addFavorite(id).subscribe(
          (e: any) => {
            this.encanta = true;
          },
          (err: any) => {
            console.log({ error_Add: err });
          }
        );
      }
    } else {
      console.log({ me: this.session.loading });
      this.router.navigate(['login']);
    }
  }
}
