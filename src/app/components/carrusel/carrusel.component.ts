import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  @ViewChild('contenidoReco') contenidoReco!: ElementRef;
  @ViewChild('caruCont') caruCont!: ElementRef;

  gallery_item_size!: number;
  derecha!: HTMLElement;
  izq!: HTMLElement;

  constructor() { }
// 
  ngAfterViewInit(): void {
    this.gallery_item_size = this.contenidoReco.nativeElement.querySelector("div").clientWidth;
    this.derecha = this.contenidoReco.nativeElement.querySelector(".btn.next");
    this.izq = this.contenidoReco.nativeElement.querySelector(".btn.prev");
  }

  scrollGallery(offset: number): void {
    const gallery_scroller = this.caruCont.nativeElement;
    gallery_scroller.scrollBy(offset, 0);
  }

  ngOnInit(): void {
  }

}
