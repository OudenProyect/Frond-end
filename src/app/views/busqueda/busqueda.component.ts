import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchsService } from 'src/app/services/searchs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  lugar: any = null;
  datoRecibido: String = '';
  resultBusqueda: any[] = [];
  constructor(
    private route: ActivatedRoute,
    public search: SearchsService,
    private router: Router
  ) {
    this.route.params.subscribe((param) => {
      this.lugar = param['search'];
    });
  }

  ngOnInit(): void {
    this.searchHouse();
  }

  searchHouse() {
    console.log(this.resultBusqueda);
    this.search.searchViviendas(this.lugar).subscribe(
      (res: any) => {
        this.resultBusqueda = res;
        console.log(this.resultBusqueda);
      },
      (err) => {
        console.log(
          'Hemos mirado por todas partes... pero no hemos encontrado lo que buscas '
        );
      }
    );
  }

  recibir(dato: String) {
    this.datoRecibido = dato;
    this.lugar = dato;
    this.searchHouse();
  }
}
