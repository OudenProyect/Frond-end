import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { PostService } from 'src/app/services/post.service';
import { ReutilizablesService } from 'src/app/services/reutilizables.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-edit-form-subir',
  templateUrl: './edit-form-subir.component.html',
  styleUrls: ['./edit-form-subir.component.css']
})
export class EditFormSubirComponent implements OnInit {
  sliderImages: any = [];
  imgSrc1 = '';
  imgSrc2 = '';
  imgSrc3 = '';
  imgSrc4 = '';
  imgSrc5 = '';
  imgSrc6 = '';
  types: string[] = [];
  imgError: string = '';
  publicacion: any;
  id: string = '';

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
    private sesion: SesionService, 
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  ngOnInit(): void {

    this.post.getPost(this.id).subscribe((e: any) => {
      this.publicacion = e;
      this.publicacion.images.forEach((element: any) => {
        this.sliderImages.push('http://127.0.0.1:8000/images/' + element.name);
      });
      this.imgSrc1 = "http://127.0.0.1:8000/images/" + this.publicacion.images[0].name;
      this.imgSrc2 = "http://127.0.0.1:8000/images/" + this.publicacion.images[1].name;
      this.imgSrc3 = "http://127.0.0.1:8000/images/" + this.publicacion.images[2].name;
      this.imgSrc4 = "http://127.0.0.1:8000/images/" + this.publicacion.images[3].name;
      this.imgSrc5 = "http://127.0.0.1:8000/images/" + this.publicacion.images[4].name;
      this.imgSrc6 = "http://127.0.0.1:8000/images/" + this.publicacion.images[5].name;
    });


    
    this.formPost = this.build.group({
      empresa: [''],
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
            this.post.postedit(datos).subscribe(
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
  getImageUrl(imageName: string): string {
    console.log("si");
    console.log(imageName);
    console.log("si");
    return "http://127.0.0.1:8000/images/" + imageName;
    
  }
}
