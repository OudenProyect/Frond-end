import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PreciosComponent } from './components/precios/precios.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './views/login/login.component';
import { ContactComponent } from './views/contact/contact.component';
import { FormcontactComponent } from './components/formcontact/formcontact.component';

/* importamos el modulo http client conexion backend */
import { HttpClientModule } from '@angular/common/http';


/** alison */
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    PreciosComponent,
    LoginComponent,
    PerfilComponent,
    ContactComponent,
    FormcontactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SwiperModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
