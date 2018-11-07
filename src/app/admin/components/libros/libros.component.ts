import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/component.abstract';
import { Libro } from 'src/app/interface/interfaces.interface';
import { LibrosService } from 'src/app/providers/libros.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: []
})
export class LibrosComponent extends Componente implements OnInit {

  caso;
  libro: Libro;

  constructor(public _ls: LibrosService, private  notif: NotyfService) {
    super(_ls, notif);
    this.caso = 'Nuevo';
  }

  ngOnInit() {
    this.loadScript();
  }

  editar(libro: Libro) {
    this.caso = 'Editar';
    console.log(libro);
    this._idEditar = libro._id;
    this.libro = libro;
  }

  resetearItem() {
    this.libro = {
      _idCruso: '',
      nombre: '',
      autor: '',
      descripcion: '' 
    };
  }

  loadScript() {
    $('.swal-overlay').on('click', function() {
      $('.swal-overlay').removeClass('swal-overlay--show-modal');
    });

  }

}
