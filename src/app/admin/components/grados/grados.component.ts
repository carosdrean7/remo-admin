import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/component.abstract';
import { Grado } from 'src/app/interface/interfaces.interface';
import { GradosService } from 'src/app/providers/grados.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styles: []
})
export class GradosComponent extends Componente implements OnInit {

  caso;
  grado: Grado;

  constructor(public _gs: GradosService, private  notif: NotyfService) {
    super(_gs, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(grado: Grado) {
    this.caso = 'Editar';
    console.log(grado);
    this._idEditar = grado._id;
    this.grado = grado;
  }

  resetearItem() {
    this.grado = {
      nombre: '',
      turno: '',
      _idNivel : ''
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }

}
