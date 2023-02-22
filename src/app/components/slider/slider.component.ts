import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Swiper
} from "swiper";


// install Swiper modules
SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination]);

@Component({
  selector: "app-slider",
  template: `<swiper 
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
        <h6 class="card-title">Promoción RESIDENCIAL CASABLANCA</h6>
        <h6 class="ext-muted "><b> 599.900 €</b></h6>
        <p class="card-text"><b>Obra Nueva </b>· Casa o chalet</p>
        <div class="d-flex justify-content-center">
          <div class="info-casaMin"><img src="assets/svg/cama (1).png" class="imag-info" alt="..."><span>4 Habi.</span></div>
          <div class="info-casaMin"><img src="assets/svg/ducha.png" class="imag-info" alt="..."><span>3 baños</span></div>
          <div class="info-casaMin"><img src="assets/svg/zona.png" class="imag-info" alt="..."><span>284 m²</span> </div>
        </div>
        <div class="contact">
          <a href="#" class=" info-contact on"><i class="fa fa-envelope-o"></i></a>
          <a href="#" class=" info-contact on"><i class="fa fa-phone"></i></a>
          <a href="#" class=" info-contact"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/la-moraleja-sothevies-copia-1659264338.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
      <h6 class="card-title">Promoción RESIDENCIAL CASABLANCA</h6>
        <h6 class="ext-muted "><b> 599.900 €</b></h6>
        <p class="card-text"><b>Obra Nueva </b>· Casa o chalet</p>
        <div class="d-flex justify-content-center">
          <div class="info-casaMin"><img src="assets/svg/cama (1).png" class="imag-info" alt="..."><span>4 Habi.</span></div>
          <div class="info-casaMin"><img src="assets/svg/ducha.png" class="imag-info" alt="..."><span>3 baños</span></div>
          <div class="info-casaMin"><img src="assets/svg/zona.png" class="imag-info" alt="..."><span>284 m²</span> </div>
        </div>
        <div class="contact">
          <a href="#" class=" info-contact on"><i class="fa fa-envelope-o"></i></a>
          <a href="#" class=" info-contact on"><i class="fa fa-phone"></i></a>
          <a href="#" class=" info-contact"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/los-naranjos-idealista-1658921238.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
      <h6 class="card-title">Promoción RESIDENCIAL CASABLANCA</h6>
        <h6 class="ext-muted "> <b>599.900 €</b></h6>
        <p class="card-text"><b>Obra Nueva </b>· Casa o chalet</p>
        <div class="d-flex justify-content-center">
          <div class="info-casaMin"><img src="assets/svg/cama (1).png" class="imag-info" alt="..."><span>4 Habi.</span></div>
          <div class="info-casaMin"><img src="assets/svg/ducha.png" class="imag-info" alt="..."><span>3 baños</span></div>
          <div class="info-casaMin"><img src="assets/svg/zona.png" class="imag-info" alt="..."><span>284 m²</span> </div>
        </div>
        <div class="contact">
          <a href="#" class=" info-contact on"><i class="fa fa-envelope-o"></i></a>
          <a href="#" class=" info-contact on"><i class="fa fa-phone"></i></a>
          <a href="#" class=" info-contact"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/luxuryestate-marbella-1658918744.jpeg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
      <h6 class="card-title">Promoción RESIDENCIAL CASABLANCA</h6>
        <h6 class="ext-muted ">599.900 €</h6>
        <p class="card-text"><b>Obra Nueva </b>· Casa o chalet</p>
        <div class="d-flex justify-content-center">
          <div class="info-casaMin"><img src="assets/svg/cama (1).png" class="imag-info" alt="..."><span>4 Habi.</span></div>
          <div class="info-casaMin"><img src="assets/svg/ducha.png" class="imag-info" alt="..."><span>3 baños</span></div>
          <div class="info-casaMin"><img src="assets/svg/zona.png" class="imag-info" alt="..."><span>284 m²</span> </div>
        </div>
        <div class="contact">
          <a href="#" class=" info-contact on"><i class="fa fa-envelope-o"></i></a>
          <a href="#" class=" info-contact on"><i class="fa fa-phone"></i></a>
          <a href="#" class=" info-contact"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/pedralves-john-valker-1659263111.png" class="card-img-top gap-2" alt="...">
      <div class="card-body">
      <h6 class="card-title">Promoción RESIDENCIAL CASABLANCA</h6>
        <h6 class="ext-muted ">599.900 €</h6>
        <p class="card-text"><b>Obra Nueva </b>· Casa o chalet</p>
        <div class="d-flex justify-content-center">
          <div class="info-casaMin"><img src="assets/svg/cama (1).png" class="imag-info" alt="..."><span>4 Habi.</span></div>
          <div class="info-casaMin"><img src="assets/svg/ducha.png" class="imag-info" alt="..."><span>3 baños</span></div>
          <div class="info-casaMin"><img src="assets/svg/zona.png" class="imag-info" alt="..."><span>284 m²</span> </div>
        </div>
        <div class="contact">
          <a href="#" class=" info-contact on"><i class="fa fa-envelope-o"></i></a>
          <a href="#" class=" info-contact on"><i class="fa fa-phone"></i></a>
          <a href="#" class=" info-contact"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/sotogrande-1528471009.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
      <h6 class="card-title">Promoción RESIDENCIAL CASABLANCA</h6>
        <h6 class="ext-muted ">599.900 €</h6>
        <p class="card-text"><b>Obra Nueva </b>· Casa o chalet</p>
        <div class="d-flex justify-content-center">
          <div class="info-casaMin"><img src="assets/svg/cama (1).png" class="imag-info" alt="..."><span>4 Habi.</span></div>
          <div class="info-casaMin"><img src="assets/svg/ducha.png" class="imag-info" alt="..."><span>3 baños</span></div>
          <div class="info-casaMin"><img src="assets/svg/zona.png" class="imag-info" alt="..."><span>284 m²</span> </div>
        </div>
        <div class="contact">
          <a href="#" class=" info-contact on"><i class="fa fa-envelope-o"></i></a>
          <a href="#" class=" info-contact on"><i class="fa fa-phone"></i></a>
          <a href="#" class=" info-contact"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/LIVINGKITS_casas-modernas_8_151111.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
      <h6 class="card-title">Promoción RESIDENCIAL CASABLANCA</h6>
        <h6 class="ext-muted ">599.900 €</h6>
        <p class="card-text"><b>Obra Nueva </b>· Casa o chalet</p>
        <div class="d-flex justify-content-center">
          <div class="info-casaMin"><img src="assets/svg/cama (1).png" class="imag-info" alt="..."><span>4 Habi.</span></div>
          <div class="info-casaMin"><img src="assets/svg/ducha.png" class="imag-info" alt="..."><span>3 baños</span></div>
          <div class="info-casaMin"><img src="assets/svg/zona.png" class="imag-info" alt="..."><span>284 m²</span> </div>
        </div>
        <div class="contact">
          <a href="#" class=" info-contact on"><i class="fa fa-envelope-o"></i></a>
          <a href="#" class=" info-contact on"><i class="fa fa-phone"></i></a>
          <a href="#" class=" info-contact"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/LIVINGKITS_casas-modernas_1_151113.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
      <h6 class="card-title">Promoción RESIDENCIAL CASABLANCA</h6>
        <h6 class="ext-muted "><b> 599.900 € </b></h6>
        <p class="card-text"><b>Obra Nueva </b>· Casa o chalet</p>
        <div class="d-flex justify-content-center">
          <div class="info-casaMin"><img src="assets/svg/cama (1).png" class="imag-info" alt="..."><span>4 Habi.</span></div>
          <div class="info-casaMin"><img src="assets/svg/ducha.png" class="imag-info" alt="..."><span>3 baños</span></div>
          <div class="info-casaMin"><img src="assets/svg/zona.png" class="imag-info" alt="..."><span>284 m²</span> </div>
        </div>
        <div class="contact">
          <a href="#" class=" info-contact on"><i class="fa fa-envelope-o"></i></a>
          <a href="#" class=" info-contact on"><i class="fa fa-phone"></i></a>
          <a href="#" class=" info-contact"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
    </div>
  </ng-template>
  <ng-template swiperSlide class="caja"> 
    <div class="card">
      <img src="assets/imag/capellania-exterior-1080x675-1.jpg" class="card-img-top gap-2" alt="...">
      <div class="card-body">
      <h6 class="card-title">Promoción RESIDENCIAL CASABLANCA</h6>
        <h6 class="ext-muted "><b> 599.900 € </b></h6>
        <p class="card-text"><b>Obra Nueva </b>· Casa o chalet</p>
        <div class="d-flex justify-content-center">
          <div class="info-casaMin"><img src="assets/svg/cama (1).png" class="imag-info" alt="..."><span>4 Habi.</span></div>
          <div class="info-casaMin"><img src="assets/svg/ducha.png" class="imag-info" alt="..."><span>3 baños</span></div>
          <div class="info-casaMin"><img src="assets/svg/zona.png" class="imag-info" alt="..."><span>284 m²</span> </div>
        </div>
        <div class="contact">
          <a href="#" class=" info-contact on"><i class="fa fa-envelope-o"></i></a>
          <a href="#" class=" info-contact on"><i class="fa fa-phone"></i></a>
          <a href="#" class=" info-contact"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
    </div>
  </ng-template>
</swiper>`,
  styleUrls: ["./slider.component.css"],
  encapsulation: ViewEncapsulation.None,
})

export class SliderComponent {
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        550: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        490: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
  }
  
   
}

