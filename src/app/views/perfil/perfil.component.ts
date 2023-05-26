import {
  Component,
  inject,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { ReutilizablesService } from 'src/app/services/reutilizables.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  @ViewChild('dialog') dialog!: ElementRef;
  @ViewChild('dialog2') dialog2!: ElementRef;

  guardado: boolean = false;
  noGuardado: boolean = false;
  guardadoContra: boolean = false;
  noGuardadoContra: boolean = false;
  textoGuar!: string;
  sessionService = inject(SesionService);

  router = inject(Router);
  form = inject(FormBuilder);
  selectedImage: string = 'assets/imag/cara_5.png';
  // @ts-ignore
  CambiarPWDform: FormGroup;
  archivos: any = [];

  constructor(
    private build: FormBuilder,
    private post: PostService,
    private route: Router,
    private reutilizable: ReutilizablesService
  ) {}

  ngOnInit(): void {
    this.CambiarPWDform = this.form.group(
      {
        //Contraseña antigua
        oldPassword: ['', [Validators.required]],
        // Contraseña nueva
        newPassword: ['', [Validators.required, Validators.minLength(4)]],
        // Confirmar contraseña
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
      },
      { validator: this.checkPasswords }
    );

    console.log(this.sessionService);
  }

  onSubmit() {
    if (!this.CambiarPWDform.valid) {
      this.noGuardadoContra = true;
      setTimeout(() => {
        this.noGuardadoContra = false;
      }, 1500);
    } else {
      this.sessionService
        .editContraseña({
          oldPassword: this.CambiarPWDform.get('oldPassword')?.value,
          newPassword: this.CambiarPWDform.get('newPassword')?.value,
          confirmPassword: this.CambiarPWDform.get('confirmPassword')?.value,
        })
        .subscribe((res) => {
          console.log(res);
        });
      this.guardadoContra = true;
      setTimeout(() => {
        this.guardadoContra = false;
        this.dialog.nativeElement.close();
      }, 1500);
    }
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatched: true };
  }

  mostrarModalFlag: boolean = false;

  mostrarModal() {
    this.mostrarModalFlag = true;
  }

  ocultarModal() {
    this.mostrarModalFlag = false;
  }

  eliminarCuenta() {
    this.sessionService.deleteCuenta().subscribe(() => {
      this.sessionService.removeToken();
      window.location.reload();
      this.ocultarModal();
    });
  }

  ajustar = {
    'width.%': '80',
  };
  ajustar2 = {
    'width.%': '80',
  };
  ajustar3 = {
    'width.%': '84',
  };
  ajustar4 = {
    'width.%': '80',
  };
  ajustar5 = {
    'width.%': '80',
  };
  ajustar6 = {
    'width.%': '80',
  };
  ajustar7 = {
    'width.%': '80',
  };
  ajustar8 = {
    'width.%': '100',
    'height.px': '200',
  };
  // @Input('pp') public text:string ="";
  showDiv = false;
  showDiv2 = false;
  showDiv3 = false;
  showDiv5 = false;
  showDiv6 = false;
  showDiv7 = false;
  showDiv8 = false;
  noPincel = true;
  noPincel2 = true;
  noPincel3 = true;
  noPincel5 = true;
  noPincel6 = true;
  noPincel7 = true;
  noPincel8 = true;
  isDisabled = true;
  isDisabled2 = true;
  isDisabled3 = true;
  isDisabled4 = true;
  isDisabled6 = true;
  isDisabled7 = true;
  isDisabled8 = true;

  opbnt() {
    this.showDiv = !this.showDiv;
    this.noPincel = !this.noPincel;
    this.ajustar['width.%'] = '72.7';
    this.isDisabled = false;
  }
  cancel() {
    this.noPincel = !this.noPincel;
    this.showDiv = !this.showDiv;
    this.ajustar['width.%'] = '80';
    this.isDisabled = true;
  }
  opbnt2() {
    this.showDiv2 = !this.showDiv2;
    this.noPincel2 = !this.noPincel3;
    this.ajustar2['width.%'] = '70';
    this.isDisabled2 = false;
  }
  cancel2() {
    this.noPincel2 = !this.noPincel2;
    this.showDiv2 = !this.showDiv2;
    this.ajustar2['width.%'] = '80';
    this.isDisabled2 = true;
  }
  opbnt3() {
    this.showDiv3 = !this.showDiv3;
    this.noPincel3 = !this.noPincel3;
    this.ajustar3['width.%'] = '70';
  }
  cancel3() {
    this.noPincel3 = !this.noPincel3;
    this.showDiv3 = !this.showDiv3;
    this.ajustar3['width.%'] = '80';
  }
  opbnt4() {}
  opbnt5() {
    this.showDiv5 = !this.showDiv5;
    this.noPincel5 = !this.noPincel5;
    this.ajustar5['width.%'] = '70';
    this.isDisabled4 = false;
  }

  cancel5() {
    this.noPincel5 = !this.noPincel5;
    this.showDiv5 = !this.showDiv5;
    this.ajustar5['width.%'] = '80';
    this.isDisabled4 = true;
  }
  opbnt6() {
    this.showDiv6 = !this.showDiv6;
    this.noPincel6 = !this.noPincel6;
    this.ajustar6['width.%'] = '70';
    this.isDisabled6 = false;
  }
  cancel6() {
    this.noPincel5 = !this.noPincel6;
    this.showDiv6 = !this.showDiv6;
    this.ajustar6['width.%'] = '80';
    this.isDisabled6 = true;
  }
  opbnt7() {
    this.showDiv7 = !this.showDiv7;
    this.noPincel7 = !this.noPincel7;
    this.ajustar7['width.%'] = '70';
    this.isDisabled7 = false;
  }
  cancel7() {
    this.noPincel7 = !this.noPincel7;
    this.showDiv7 = !this.showDiv7;
    this.ajustar7['width.%'] = '80';
    this.isDisabled7 = true;
  }
  opbnt8() {
    this.showDiv8 = !this.showDiv8;
    this.noPincel8 = !this.noPincel8;
    this.ajustar8['width.%'] = '100';
    this.isDisabled8 = false;
  }
  cancel8() {
    this.noPincel8 = !this.noPincel8;
    this.showDiv8 = !this.showDiv8;
    this.ajustar8['width.%'] = '100';
    this.isDisabled8 = true;
  }
  opDialog() {
    this.dialog.nativeElement.showModal();
  }
  opDialog2() {
    this.dialog2.nativeElement.showModal();
  }

  onSubmitIcon(form: NgForm) {
    // submit form logic here
    form.resetForm();
    this.selectedImage = 'assets/imag/cara_5.png';
    this.dialog2.nativeElement.close(); // close the dialog
  }
  previewImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
      this.archivos.push(event.target.files[0]);
    };

    reader.readAsDataURL(file);
  }

  // edicion del usuario
  guardar(edit: any, value: any) {
    console.log({ edit: edit, value: value });
    this.sessionService
      .editField({
        id: this.sessionService.user.user.id,
        edit,
        value,
      })
      .subscribe(
        (res) => {
          this.sessionService.user.user = res;
          if (this.showDiv2) {
            this.cancel2();
            this.guardado = true;
          } else if (this.showDiv) {
            this.cancel();
            this.guardado = true;
          }else if(this.showDiv6) {
            this.cancel6();
            this.guardado = true;
          }else {
            this.cancel5();
            this.guardado = true;
          }
          setTimeout(() => {
            this.guardado = false;
          }, 1500);
          console.log({ res });
        },
        (err) => {
          if (this.showDiv2) {
            this.noGuardado = true;
          } else if (this.showDiv) {
            this.noGuardado = true;
          } else {
            this.noGuardado = true;
          }
          setTimeout(() => {
            this.noGuardado = false;
          }, 1500);
        }
      );
  }


  createPost() {
    if (this.selectedImage) {
      const formData = new FormData();
      if (this.archivos.length > 0) {
        this.archivos.forEach((archivo: any, index: number) => {
          console.log(`files${index}`, archivo);
          formData.append(`files${index}`, archivo);
        });

      }      
      console.log(this.selectedImage);
      formData.append('userId', this.sessionService.user.user.id); // Agregar el ID del usuario al FormData
  
      this.post.avatarPost(formData).subscribe(
        (response: any) => {
          console.log('Imagen subida exitosamente');
        },
        (error: any) => {
          console.error('Error al subir la imagen:', error);
        }
      );
    } else {
      console.log('No se ha seleccionado ninguna imagen');
    }
  }
}
