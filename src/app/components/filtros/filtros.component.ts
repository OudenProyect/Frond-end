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
  surfaceMin: string = 'Indiferent';
  surfaceMax: string = 'Indiferent';
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
  habSel: number = 0;
  bathSel: number = 0;
  listExtras: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateRange(50000, 400000, 25000, this.rangePrice);
    this.generateRange(60, 300, 20, this.rangeSurface);

    console.log({
      filtros: {
        tipo: this.type,
        hab: this.habSel,
        bath: this.bathSel,
        pricemin: this.priceMin,
        pricemax: this.priceMax,
        surfacemin: this.surfaceMin,
        surfacemax: this.surfaceMax,
        extras: this.listExtras,
      },
    });
  }

  filterB() {
    this.btnFiltros = !this.btnFiltros;
    this.showBoxFilter();
  }

  generateRange(start: number, end: number, step: number, array: any): any[] {
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
    this.type = e;
  }

  /* verificamos si tiene el atributo data , si lo tiene , se elimina del array su valor
      HABITACIONES O BAÑOS
    */
  selectHabOrBath(e: any) {
    let value = 0;
    if (e.target.value != 'All') {
      value = parseInt(e.target.value);
    }
    if (e.target.getAttribute('data') == '1') {
      let pos;
      e.target.classList.remove('selectInputFilter');

      if (e.target.name == 'hab') {
        this.habSel = 0;
      } else if (e.target.name == 'bath') {
        this.bathSel = 0;
      }
    } else {
      // añadimos el valor al array que corresponda
      if (e.target.name == 'hab') {
        this.habSel = value;
      } else if (e.target.name == 'bath') {
        this.bathSel = value;
      }
      e.target.setAttribute('data', '1');
      e.target.classList.add('selectInputFilter');
    }
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
    this.priceMin = e;
    console.log(this.priceMin);
  }
  selectPricemax(e: any) {
    this.priceMax = e;
    console.log(this.priceMax);
  }

  selectSurfaceMin(e: any) {
    this.surfaceMin = e;
  }
  selectSurfaceMax(e: any) {
    this.surfaceMax = e;
  }

  // e es el evento ,
  selectExtras(valor: string) {
    if (this.listExtras.includes(valor)) {
      let pos = this.listExtras.indexOf(valor);
      this.listExtras.splice(pos, 1);
    } else {
      this.listExtras.push(valor);
    }
  }

  applyFilter() {
    this.filterB();
    console.log({
      filtros: {
        tipo: this.type,
        hab: this.habSel,
        bath: this.bathSel,
        pricemin: this.priceMin,
        pricemax: this.priceMax,
        surfacemin: this.surfaceMin,
        surfacemax: this.surfaceMax,
        extras: this.listExtras,
      },
    });
  }
}
