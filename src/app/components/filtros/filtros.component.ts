import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() propagar = new EventEmitter<any>();

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
  extras: any = [
    {
      id: 1,
      name: 'parking',
    },
    {
      id: 2,
      name: 'balcon',
    },
    {
      id: 3,
      name: 'piscina',
    },
    {
      id: 4,
      name: 'chimenea',
    },
    {
      id: 5,
      name: 'trastero',
    },
    {
      id: 6,
      name: 'jardin',
    },
    {
      id: 7,
      name: 'calentador',
    },
  ];

  habSel: any = null;
  bathSel: any = null;
  listExtras: any[] = [];

  filtrar: any = {
    tipo: this.type,
    hab: this.habSel,
    bath: this.bathSel,
    pricemin: this.priceMin,
    pricemax: this.priceMax,
    surfacemin: this.surfaceMin,
    surfacemax: this.surfaceMax,
    extras: this.listExtras,
  };

  constructor() {}

  ngOnInit(): void {
    this.generateRange(50000, 400000, 25000, this.rangePrice);
    this.generateRange(60, 300, 20, this.rangeSurface);
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

    if (e.target.name == 'hab') {
      this.habSel = value;
    } else if (e.target.name == 'bath') {
      this.bathSel = value;
    }
    e.target.setAttribute('data', '1');
  }

  showPrice(e: any) {
    if (e.target.id == 'min') {
      this.contentPricesMin = !this.contentPricesMin;
    } else if (e.target.id == 'max') {
      this.contentPricesMax = !this.contentPricesMax;
    }
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
  }
  selectPricemax(e: any) {
    this.priceMax = e;
  }

  selectSurfaceMin(e: any) {
    this.surfaceMin = e;
  }
  selectSurfaceMax(e: any) {
    this.surfaceMax = e;
  }

  // e es el evento ,
  selectExtras(valor: any) {
    console.log(valor);
    if (this.listExtras.includes(valor)) {
      let pos = this.listExtras.indexOf(valor);
      this.listExtras.splice(pos, 1);
    } else {
      this.listExtras.push(valor);
    }
    console.log(this.listExtras);
  }

  applyFilter() {
    console.log(this.extras);
    this.filterB();
    let filtrar = {
      tipo: this.type,
      hab: this.habSel,
      bath: this.bathSel,
      pricemin: this.priceMin,
      pricemax: this.priceMax,
      surfacemin: this.surfaceMin,
      surfacemax: this.surfaceMax,
      extras: this.listExtras,
    };

    this.propagar.emit(filtrar);
  }
  filterB() {
    this.btnFiltros = !this.btnFiltros;
    this.showBoxFilter();
  }
}
