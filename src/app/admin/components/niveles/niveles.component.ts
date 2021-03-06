import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/component.abstract';
import { NivelesService } from 'src/app/providers/niveles.service';
import { NotyfService } from 'ng-notyf';
import { Nivel } from 'src/app/interface/interfaces.interface';

declare var $: any;

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styles: []
})
export class NivelesComponent extends Componente implements OnInit {

  caso;
  nivel: Nivel;

  constructor(public _ns: NivelesService, private  notif: NotyfService) {
    super(_ns, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(nivel: Nivel) {
    this.caso = 'Editar';
    console.log(nivel);
    this._idEditar = nivel._id;
    this.nivel = nivel;
  }

  resetearItem() {
    this.caso = 'Agregar';
    this.nivel = {
      nombre: '',
      precio: ''
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }

}
