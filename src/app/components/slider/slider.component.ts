import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-slider',
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
    <ng-template swiperSlide>Slide 1</ng-template
    ><ng-template swiperSlide>Slide 2</ng-template
    ><ng-template swiperSlide>Slide 3</ng-template
    ><ng-template swiperSlide>Slide 4</ng-template
    ><ng-template swiperSlide>Slide 5</ng-template
    ><ng-template swiperSlide>Slide 6</ng-template
    ><ng-template swiperSlide>Slide 7</ng-template
    ><ng-template swiperSlide>Slide 8</ng-template
    ><ng-template swiperSlide>Slide 9</ng-template>
  </swiper>`,
  templateUrl: './slider.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./slider.component.css']

})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
