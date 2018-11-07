import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';
import { NotyfModule } from 'ng-notyf';
import { HttpClientModule } from '@angular/common/http';
import { NivelesService } from './providers/niveles.service';
import { CursosService } from './providers/cursos.service';
import { ActividadesService } from './providers/actividades.service';
import { CursoVeranoService } from './providers/curso-verano.service';
import { DatosColegioService } from './providers/datos-colegio.service';
import { DirectivaService } from './providers/directiva.service';
import { DocentesService } from './providers/docentes.service';
import { GradosService } from './providers/grados.service';
import { LibrosService } from './providers/libros.service';
import { PostsService } from './providers/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotyfModule
  ],
  providers: [
    NivelesService,
    CursosService,
    ActividadesService,
    CursoVeranoService,
    DatosColegioService,
    DirectivaService,
    DocentesService,
    GradosService,
    LibrosService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
