import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/component.abstract';
import { Actividad } from 'src/app/interface/interfaces.interface';
import { ActividadesService } from 'src/app/providers/actividades.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styles: []
})
export class ActividadesComponent extends Componente implements OnInit {

  caso;
  actividad: Actividad;

  constructor(public _as: ActividadesService, private  notif: NotyfService) {
    super(_as, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(actividad: Actividad) {
    this.caso = 'Editar';
    console.log(actividad);
    this._idEditar = actividad._id;
    this.actividad = actividad;
  }

  resetearItem() {
    this.actividad = {
      titulo: '',
      fecha: '',
      tipo: '',
      descripcion: ''
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }

}
