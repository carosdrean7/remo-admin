import { Component, OnInit } from '@angular/core';
import { DatosColegio } from 'src/app/interface/interfaces.interface';
import { Componente } from 'src/app/abstract/component.abstract';
import { DatosColegioService } from 'src/app/providers/datos-colegio.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-datos-colegio',
  templateUrl: './datos-colegio.component.html',
  styles: []
})
export class DatosColegioComponent extends Componente implements OnInit {

  caso;
  datosColegio: DatosColegio;

  constructor(public _dcs: DatosColegioService, private  notif: NotyfService) {
    super(_dcs, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(datosColegio: DatosColegio) {
    this.caso = 'Editar';
    console.log(datosColegio);
    this._idEditar = datosColegio._id;
    this.datosColegio = datosColegio;
  }

  resetearItem() {
    this.datosColegio = {
      nombreColegio: '',
      direccion: '',
      telefono : 0
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }
}
