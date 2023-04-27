import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-subir',
  templateUrl: './form-subir.component.html',
  styleUrls: ['./form-subir.component.css'],
})
export class FormSubirComponent implements OnInit {
  imgSrc1 = '';
  imgSrc2 = false;
  imgSrc3 = false;
  imgSrc4 = false;
  imgSrc5 = false;
  imgSrc6 = false;

  // @ts-ignore
  formPost: FormGroup;
  archivos: any = [];

  optionsUbicacion = [
    { value: 'Barcelona', label: 'Barcelona' },
    { value: 'Girona', label: 'Girona' },
  ];
  constructor(private build: FormBuilder) { }

  ngOnInit(): void {
    this.formPost = this.build.group({
      empresa: ['1'],
      titulo: ['', Validators.required],
      precio: ['', Validators.required],
      descripcionPortada: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      bedrooms: [1, Validators.required],
      bathroom: [1, Validators.required],
      flats: ['', Validators.required],
      m2: ['', Validators.required],
      m2util: ['', Validators.required],
      balcony: new FormControl(false),
      terrace: new FormControl(false),
      swimmingPool: new FormControl(false),
      garden: new FormControl(false),
      Barcelona: new FormControl(false),
      Girona: new FormControl(false),
    });
  }

  onfile(event: any, num: number) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (num == 0) {
          this.imgSrc1 = e.target.result;
          console.log(this.imgSrc1);
        } else if (num == 1) {
          this.imgSrc2 = e.target.result;
          console.log('imgSrc2');
        } else if (num == 2) {
          this.imgSrc3 = e.target.result;
          console.log('imgSrc3');
        } else if (num == 3) {
          this.imgSrc4 = e.target.result;
          console.log('imgSrc4');
        } else if (num == 4) {
          this.imgSrc5 = e.target.result;
          console.log('imgSrc5');
        } else if (num == 5) {
          this.imgSrc5 = e.target.result;
          console.log('imgSrc6');
        }

        this.archivos.push(event.target.files[0]);
        console.log(this.archivos);
      };
      let dat = reader.readAsDataURL(event.target.files[0]);
    }
  }

  createPost() {
    try {
      const formValue = this.formPost.value;
      const datos = new FormData();

      if (this.formPost.valid) {
        console.log('correcto');
        // datos.append('files', this.imgSrc1);
        this.archivos.forEach((archivo: any, index: number) => {
          datos.append(`files${index}`, archivo);
        });

        datos.append('titulo', formValue.titulo);
        datos.append('precio', formValue.precio);
        datos.append('descripcionPortada', formValue.descripcionPortada);
        datos.append('descripcion', formValue.descripcion);
        datos.append('tipo', formValue.tipo);
        datos.append('bedrooms', formValue.bedrooms);
        datos.append('bathroom', formValue.bathroom);
        datos.append('flats', formValue.flats);
        datos.append('m2', formValue.m2);
        datos.append('m2util', formValue.m2util);
        datos.append('flats', formValue.flats);
        datos.append('empresa', formValue.empresa);

        formValue.balcony ?  datos.append('balcony', formValue.balcony) : '';
        formValue.terrace ?  datos.append('terrace', formValue.terrace) : '';
        formValue.swimmingPool ?  datos.append('swimmingPool', formValue.swimmingPool) : '';

        formValue.garden ?  datos.append('garden', formValue.garden) : '';
        formValue.Barcelona ?  datos.append('Barcelona', formValue.Barcelona) : '';
        formValue.Girona ?  datos.append('Girona', formValue.Girona) : '';

        console.log(formValue.empresa);
      } else {
        this.formPost.markAllAsTouched();
      }


      // // // Mostrar los valores de los archivos adjuntos en FormData
      // datos.forEach((valor, clave) => {
      //   console.log({
      //     formdata: { clave, valor },
      //   }); // Mostrar la clave y el valor del par
      // });
    } catch (e) {
      console.log(e);
    }
  }
}
