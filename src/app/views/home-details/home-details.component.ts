import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css'],
})
export class HomeDetailsComponent implements OnInit {
  sliderImages = [
    '/assets/imag/chalet-la-zabaleta-idealista-1658919505.jpg',
    'assets/imag/chalet-es-camp-de-mar-copia-1658919476.jpg',
    'assets/imag/luxuryestate-marbella-1658918744.jpeg',
    'assets/imag/LIVINGKITS_casas-modernas_8_151111.jpg',
    'assets/imag/LIVINGKITS_casas-modernas_8_151111.jpg',
  ];
  selectedImage!: string;
  currentSlide = 0;
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
      console.log((this.publicacion = e));
    });
    console.log(this.id);
  }
}
