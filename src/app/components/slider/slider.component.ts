import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: "app-slider",
  template:  `<swiper
  [slidesPerView]="3"
  [spaceBetween]="30"
  [slidesPerGroup]="3"
  [loop]="true"
  [loopFillGroupWithBlank]="true"
  [pagination]="{
    clickable: true
  }"
  [navigation]="true"
  class="mySwiper"
>
  <ng-template swiperSlide class="caja">
    <div class="card">
      <img src="assets/imag/chalet-la-zabaleta-idealista-1658919505.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/la-moraleja-sothevies-copia-1659264338.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/los-naranjos-idealista-1658921238.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/luxuryestate-marbella-1658918744.jpeg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/pedralves-john-valker-1659263111.png" class="card-img-top gap-2" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/sotogrande-1528471009.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</ng-template>
<ng-template swiperSlide class="caja"> <div class="card">
  <img src="assets/imag/ryan-ancill-nGsVMkRatgM-unsplash.jpg" class="card-img-top gap-2" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></ng-template
  ><ng-template swiperSlide class="caja"> <div class="card">
  <img src="assets/imag/ryan-ancill-nGsVMkRatgM-unsplash.jpg" class="card-img-top gap-2" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></ng-template
  ><ng-template swiperSlide class="caja"> <div class="card">
  <img src="assets/imag/ryan-ancill-nGsVMkRatgM-unsplash.jpg" class="card-img-top gap-2" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></ng-template>
</swiper>`,
  styleUrls: ["./slider.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {}

