import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { AdminRoutingModule } from './admin.routes';
import { PostsComponent } from './components/posts/posts.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { CursosVeranoComponent } from './components/cursos-verano/cursos-verano.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { NivelesComponent } from './components/niveles/niveles.component';
import { GradosComponent } from './components/grados/grados.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LibrosComponent } from './components/libros/libros.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { DatosColegioComponent } from './components/datos-colegio/datos-colegio.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [DashboardComponent, MainComponent, PostsComponent, ActividadesComponent, CursosVeranoComponent, DocentesComponent, NivelesComponent, GradosComponent, CursosComponent, LibrosComponent, DirectivaComponent, DatosColegioComponent, UsuariosComponent]
})
export class AdminModule { }
