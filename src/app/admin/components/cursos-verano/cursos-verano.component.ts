import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/component.abstract';
import { CursoVerano } from 'src/app/interface/interfaces.interface';
import { CursoVeranoService } from 'src/app/providers/curso-verano.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-cursos-verano',
  templateUrl: './cursos-verano.component.html',
  styles: []
})
export class CursosVeranoComponent extends Componente implements OnInit {

  caso;
  cursoVerano: CursoVerano;

  constructor(public _cvs: CursoVeranoService, private  notif: NotyfService) {
    super(_cvs, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(cursoVerano: CursoVerano) {
    this.caso = 'Editar';
    console.log(cursoVerano);
    this._idEditar = cursoVerano._id;
    this.cursoVerano = cursoVerano;
  }

  resetearItem() {
    this.cursoVerano = {
      _idDocente: '',
      nombre: '',
      descripcion: '',
      fechaInicio: '',
      fechaFian: ''
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }

}
