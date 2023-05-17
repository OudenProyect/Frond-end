import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReutilizablesService } from 'src/app/services/reutilizables.service';
import { SearchsService } from 'src/app/services/searchs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  //el input que emitimos al componente padrez
  @Output() busqueda: EventEmitter<string> = new EventEmitter<string>();

  // @ts-ignore
  formSearch: FormGroup;

  inputCasas: any = true;

  constructor(
    private formGroup: FormBuilder,
    public router: Router,
    public search: SearchsService
  ) {}

  ngOnInit(): void {
    this.formSearch = this.formGroup.group({
      ubicacion: new FormControl('', Validators.required),
    });
  }

  searchHouseholds() {
    if (this.formSearch.valid) {
      const busqueda = this.formSearch.value?.ubicacion;
      this.router.navigate(['busquedas', busqueda]);
      this.busqueda.emit(busqueda);
    } // else {
    //   this.formSearch.markAllAsTouched();
    // }
    // // console.log(this.formSearch.controls)
  }

  buscador(event: any) {
    if (event.target.value === 'planos') {
      this.inputCasas = false;
    } else {
      this.inputCasas = true;
    }
  }
}
