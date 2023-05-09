import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReutilizablesService } from 'src/app/services/reutilizables.service';
import { SearchsService } from 'src/app/services/searchs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  lugar: any = null;
  message: any = null;
  datoRecibido: String = '';
  resultBusqueda: any[] = [];
  constructor(
    private route: ActivatedRoute,
    public search: SearchsService,
    private router: Router,
    private reutlizable: ReutilizablesService
  ) {
    this.route.params.subscribe((param) => {
      this.lugar = param['search'];
    });
  }

  ngOnInit(): void {
    this.searchHouse();
    this.message = this.reutlizable.getMessage();
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.message = null;
      this.reutlizable.setDatos(null);
    }, 5000);
  }

  searchHouse() {
    this.search.searchViviendas(this.lugar).subscribe(
      (res: any) => {
        this.resultBusqueda = res;
        let p = this.resultBusqueda.sort((a: any, b: any) => {
          return b.id - a.id;
        });
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
