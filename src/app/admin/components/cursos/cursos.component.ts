import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/component.abstract';
import { Curso } from 'src/app/interface/interfaces.interface';
import { CursosService } from 'src/app/providers/cursos.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: []
})
export class CursosComponent extends Componente implements OnInit {

  caso;
  curso: Curso;

  constructor(public _cs: CursosService, private  notif: NotyfService) {
    super(_cs, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(curso: Curso) {
    this.caso = 'Editar';
    console.log(curso);
    this._idEditar = curso._id;
    this.curso = curso;
  }

  resetearItem() {
    this.curso = {
      _idDocente: '',
      _idGrado: '',
      nombre: ''
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }
}
