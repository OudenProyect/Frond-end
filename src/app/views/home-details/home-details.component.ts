import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

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
  id: string = '';
  post = inject(PostService);

  selectSlide(index: number) {
    this.selectedImage = this.sliderImages[index];
    this.currentSlide = index;
  }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  ngOnInit(): void {
    this.post.getPost(this.id).subscribe((e: any) => {
      this.publicacion = e;

      this.favorito = this.publicacion.idCompany.user.favoritPublications;
      this.favorito.find(
        (e: any) => (e.id = 2 ? (this.encanta = true) : (this.encanta = false))
      );
      console.log(this.favorito);
      this.publicacion.images.forEach((element: any) => {
        this.sliderImages.push('http://127.0.0.1:8000/images/' + element.name);
      });
      console.log(this.publicacion);
    });
    // this.post.getFavorites().subscribe((e: any) => {
    //   this.publicaciones = e;
    //   if (e != 'No hay favoritos') {
    //     e.forEach((el: any) => {
    //       this.encanta.push(el.id);
    //     });
    //   }
    // });
  }
}
