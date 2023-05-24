import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';

import { PostService } from 'src/app/services/post.service';
import { ReutilizablesService } from 'src/app/services/reutilizables.service';
import { SesionService } from 'src/app/services/sesion.service';

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
  types: string[] = [];
  imgError: string = '';

  // @ts-ignore
  formPost: FormGroup;
  archivos: any = [];
  caracteristicas: any = [];

  optionsUbicacion = [
    { value: 'Barcelona', label: 'Barcelona' },
    { value: 'Girona', label: 'Girona' },
  ];
  constructor(
    private build: FormBuilder,
    private post: PostService,
    private route: Router,
    private reutilizable: ReutilizablesService,
    private sesion: SesionService
  ) {}

  ngOnInit(): void {
    this.formPost = this.build.group({
      empresa: ['1'],
      imagen: ['', Validators.required],
      titulo: ['', Validators.required],
      precio: ['', Validators.required],
      descripcionPortada: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: [null, Validators.required],
      bedrooms: ['', Validators.required],
      bathroom: ['', Validators.required],
      flats: ['', Validators.required],
      m2: ['', Validators.required],
      m2util: ['', Validators.required],
      parking: new FormControl(false),
      balcon: new FormControl(false),
      piscina: new FormControl(false),
      jardin: new FormControl(false),
      trastero: new FormControl(false),
      chimenea: new FormControl(false),
      calentador: new FormControl(false),
      Barcelona: new FormControl(true),
      Girona: new FormControl(false),
    });

    this.post.getTipos().subscribe((e: any) => {
      this.types = e;
    });

    this.post.getCaracteristicas().subscribe((e: any) => {
      this.caracteristicas = e;
    });
    console.log(this.sesion.user);
  }

  onfile(event: any, num: number) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const file: File = event.target.files[0];

        const allowedTypes = ['image/jpeg', 'image/png']; // Tipos de archivo permitidos

        if (allowedTypes.includes(file.type)) {
          if (num == 0) {
            this.imgSrc1 = e.target.result;
            this.formPost.patchValue({
              imagen: event.target.files[0],
            });
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
          console.log(event.target.files[0]);
        } else {
          // Tipo de archivo no válido
          this.imgError = 'Tipo de archivo no válido';
          // Aquí puedes mostrar un mensaje de error o realizar otras acciones
        }

        console.log(typeof e.target.files);
      };
      let dat = reader.readAsDataURL(event.target.files[0]);
    }
  }

  // validateImageType(control: AbstractControl): ValidationErrors | null {
  //   const file = control.value as File;
  //   const allowedTypes = ['image/jpeg', 'image/png'];

  //   if (file && !allowedTypes.includes(file.type)) {
  //     return { invalidImageType: true };
  //   }

  //   return null;
  // }

  createPost() {
    try {
      const formValue = this.formPost.value;
      console.log(formValue);
      console.log(this.formPost.valid);
      console.log(this.formPost);

      if (this.formPost.valid) {
        console.log(this.formPost.valid);
        console.log(this.formPost.valid);
        if (
          this.formPost.get('Barcelona')?.value ||
          this.formPost.get('Girona')?.value
        ) {
          const datos = new FormData();
          if (this.archivos.length > 0) {
            this.archivos.forEach((archivo: any, index: number) => {
              console.log({
                añadiendo: 'd',
              });
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

            formValue.balcon ? datos.append('balcony', '2') : '';
            formValue.calentador ? datos.append('heating', '7') : '';
            formValue.piscina ? datos.append('swimmingPool', '3') : '';
            formValue.jardin ? datos.append('garden', '6') : '';
            formValue.parking ? datos.append('parking', '1') : '';
            formValue.chimenea ? datos.append('chimney', '4') : '';
            formValue.trastero ? datos.append('storage_room', '5') : '';

            formValue.Barcelona ? datos.append('Barcelona', 'Barcelona') : '';
            formValue.Girona ? datos.append('Girona', 'Girona') : '';
            this.post.createPost(datos).subscribe(
              (e: any) => {
                const datos = {
                  mensaje: 'Post subido correctamente',
                };

                this.reutilizable.setDatos(datos);
                this.route.navigate(['busquedas', 'all']);
              },
              (error: any) => {
                console.log({ error: error });
              }
            );
          } else {
            console.log('Selecciona al menos una imagen');
          }
        }
      } else {
        // this.formPost.get('tipo')?.value.setErrors({ required: true });
        this.formPost.markAllAsTouched();
      }
    } catch (error: any) {
      console.log(error);
    }
  }
}
