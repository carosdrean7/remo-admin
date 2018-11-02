import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursosVeranoComponent } from './components/cursos-verano/cursos-verano.component';
import { DatosColegioComponent } from './components/datos-colegio/datos-colegio.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { GradosComponent } from './components/grados/grados.component';
import { LibrosComponent } from './components/libros/libros.component';
import { NivelesComponent } from './components/niveles/niveles.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'main', component: DashboardComponent },
          { path: 'actividades', component: ActividadesComponent },
          { path: 'cursos', component: CursosComponent },
          { path: 'cursos-verano', component: CursosVeranoComponent },
          { path: 'datos-colegio', component: DatosColegioComponent },
          { path: 'directiva', component: DirectivaComponent },
          { path: 'docentes', component: DocentesComponent },
          { path: 'grados', component: GradosComponent },
          { path: 'libros', component: LibrosComponent },
          { path: 'niveles', component: NivelesComponent },
          { path: 'posts', component: PostsComponent },
          { path: 'usuarios', component: UsuariosComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'main' },
        ]
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
