import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  sliderImages = [
    '/assets/imag/chalet-la-zabaleta-idealista-1658919505.jpg',
    'assets/imag/chalet-es-camp-de-mar-copia-1658919476.jpg',
    'assets/imag/luxuryestate-marbella-1658918744.jpeg',
    'assets/imag/LIVINGKITS_casas-modernas_8_151111.jpg',
    'assets/imag/LIVINGKITS_casas-modernas_8_151111.jpg',
    'assets/imag/LIVINGKITS_casas-modernas_8_151111.jpg',
  ];
  selectedImage!: string;
  currentSlide = 0;

  selectSlide(index: number) {
    this.selectedImage = this.sliderImages[index];
    this.currentSlide = index;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

 

}

