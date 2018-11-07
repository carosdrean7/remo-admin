import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/component.abstract';
import { Docente } from 'src/app/interface/interfaces.interface';
import { DocentesService } from 'src/app/providers/docentes.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styles: []
})
export class DocentesComponent extends Componente implements OnInit {

  caso;
  docente: Docente;

  constructor(public _ds: DocentesService, private  notif: NotyfService) {
    super(_ds, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(docente: Docente) {
    this.caso = 'Editar';
    console.log(docente);
    this._idEditar = docente._id;
    this.docente = docente;
  }

  resetearItem() {
    this.docente = {
      nombre: '',
      apellido: '',
      telefono: 0,
      sexo:'',
      fechaNacimiento: ''
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }

}
