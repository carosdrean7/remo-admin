import { Component, OnInit } from '@angular/core';
import { Directiva } from 'src/app/interface/interfaces.interface';
import { DirectivaService } from 'src/app/providers/directiva.service';
import { NotyfService } from 'ng-notyf';
import { Componente } from 'src/app/abstract/component.abstract';

declare var $: any;

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styles: []
})
export class DirectivaComponent extends Componente implements OnInit {

  caso;
  directiva: Directiva;

  constructor(public _ds: DirectivaService, private  notif: NotyfService) {
    super(_ds, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(directiva: Directiva) {
    this.caso = 'Editar';
    console.log(directiva);
    this._idEditar = directiva._id;
    this.directiva = directiva;
  }

  resetearItem() {
    this.directiva = {
      gradoAcademico: '',
      photoUrl: '',
      presentacion : '',
      cargo : '',
      telefono : 0
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }
}
