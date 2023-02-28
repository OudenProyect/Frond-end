import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  @ViewChild('contenidoReco') contenidoReco!: ElementRef;
  @ViewChild('caruCont')caruCont!: ElementRef;

  gallery_item_size!: number;
  derecha!: HTMLElement;
  izq!: HTMLElement;

  constructor() { }

  ngAfterViewInit(): void {
    this.gallery_item_size = this.contenidoReco.nativeElement.querySelector("div").clientWidth;
    this.derecha = this.contenidoReco.nativeElement.querySelector(".btn.next");
    this.izq = this.contenidoReco.nativeElement.querySelector(".btn.prev");

    const gallery_scroller = this.caruCont.nativeElement;
    gallery_scroller.addEventListener('scroll', this.handleScroll.bind(this));
  }
  
  handleScroll(event: Event) {
    const gallery_scroller = event.target as HTMLElement;
  
    // Ocultar botón "next" al llegar al final del scroll
    if (gallery_scroller.scrollLeft + gallery_scroller.offsetWidth >= gallery_scroller.scrollWidth) {
      this.derecha.style.visibility = 'hidden';
    } else {
      this.derecha.style.visibility = 'visible';
    }
  
    // Ocultar botón "prev" al llegar al principio del scroll
    if (gallery_scroller.scrollLeft <= 0) {
      this.izq.style.visibility = 'hidden';
    } else {
      this.izq.style.visibility = 'visible';
    }
  }

  scrollGallery(offset: number): void {
    const gallery_scroller = this.caruCont.nativeElement;
    gallery_scroller.scrollBy(offset, 0);
  }

  ngOnInit(): void {
  }

}
