import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit {

  // @ts-ignore
  formSearch: FormGroup;

  constructor(private formGroup: FormBuilder) { }
  inputCasas: any = true;

  ngOnInit(): void {
    this.formSearch = this.formGroup.group({
      ubicacion: new FormControl('', Validators.required)
    })

    // console.log(this.formSearch)
  }

  buscador(event: any) {
    if (event.target.value === "planos") {
      this.inputCasas = false;
    } else {
      this.inputCasas = true;
    }
  }

  searchHouseholds() {
    if (this.formSearch.valid) {
      console.log('valido')
    } else {
      this.formSearch.markAllAsTouched()
    }
    // console.log(this.formSearch.controls)
  }

  ngAfterViewInit(): void {
    this.formSearch.get('ubicacion')?.valueChanges.subscribe(val => {

    })
  }

}
