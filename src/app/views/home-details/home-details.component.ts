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
      this.publicacion.images.forEach((element: any) => {
        this.sliderImages.push('http://127.0.0.1:8000/images/' + element.name);
      });
      console.log(this.publicacion.images);
    });
  }
}
