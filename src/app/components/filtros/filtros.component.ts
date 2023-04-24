import { Component, Input, OnInit } from '@angular/core';
import {
  faFilter,
  faRectangleXmark,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css'],
})
export class FiltrosComponent implements OnInit {
  type: string = 'Indiferent';
  hab: number = 0;
  bath: number = 0;
  priceMin: string = 'Indiferent';
  priceMax: string = 'Indiferent';
  btnFiltros: boolean = false;
  contentInput: boolean = false;
  contentPricesMin: boolean = false;
  contentPricesMax: boolean = false;
  contentSurfaceMin: boolean = false;
  contentSurfaceMax: boolean = false;
  numContentInput: number = 0;
  filtros = faFilter;
  arrow = faChevronDown;
  close = faRectangleXmark;

  rangePrice: any = [];
  rangeSurface: any = [];
  extras: string[] = [
    'balcon',
    'calentador',
    'chimenea',
    'piscina',
    'jardin',
    'trastero',
    'terraza',
  ];

  constructor() {}

  ngOnInit(): void {
    this.generateRange(50000, 400000, 25000, this.rangePrice);
    this.generateRange(60, 300, 20, this.rangeSurface);
  }

  filterB() {
    this.btnFiltros = !this.btnFiltros;
    this.showBoxFilter();
  }

  generateRange(
    start: number,
    end: number,
    step: number,
    array: any
  ): number[] {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
    return array;
  }

  showBoxFilter() {
    let filtro = document.getElementById('filtro');
    if (this.btnFiltros) {
      filtro?.classList.add('showFilter');
      document.body.classList.add('overY');
    } else {
      filtro?.classList.remove('showFilter');
      document.body.classList.remove('overY');
    }
  }

  showInput() {
    this.contentInput = !this.contentInput;
  }

  selectOptionFilter(e: any) {
    this.type = e.target.value;
    this.showInput();
  }

  selectHabOrBath(e: any) {
    let value = 0;
    let tags = null;
    if (e.target.value != 'All') {
      value = parseInt(e.target.value);
    }

    if (e.target.name == 'hab') {
      this.hab = value;
      tags = document.querySelectorAll('[name="hab"]');
    } else if (e.target.name == 'bath') {
      this.bath = value;
      tags = document.querySelectorAll('[name="bath"]');
    }
    e.target.classList.add('selectInputFilter');

    tags?.forEach((i) => {
      // comparamos si es el mismo tag
      if (e.target != i) {
        i.classList.remove('selectInputFilter');
      }
    });
  }

  showPrice(e: any) {
    if (e.target.id == 'min') {
      this.contentPricesMin = !this.contentPricesMin;
    } else if (e.target.id == 'max') {
      this.contentPricesMax = !this.contentPricesMax;
    }
    console.log(e.target);
  }

  showSurface(e: any) {
    if (e.target.id == 'minS') {
      this.contentSurfaceMin = !this.contentSurfaceMin;
    } else if (e.target.id == 'maxS') {
      this.contentSurfaceMax = !this.contentSurfaceMax;
    }
  }

  selectPricemin(e: any) {
    console.log(e.target);
  }

  selectSurface(e: any) {
    console.log(e.target);
  }
}
