import { Servicio } from './servicio.abstract';
import { NotyfService } from 'ng-notyf';

declare var $: any;

export abstract class Componente {

  _idEditar: string;
  _idEliminar: string;

  constructor(public _servicio: Servicio, public notyfService: NotyfService) {
    this.notyfService.toastDelay = 5000;
    this.getItems();
    this.limpiar();
  }

  // lo ponemos de esta manera ya que en algunos casos sera necesario sobreescribir el metodo
  getItems() {
    this._servicio.getItems().subscribe();
  }

  addItem(item: any) {
    if (this._idEditar !== '') {
      this._servicio.updateItem(item).subscribe((res) => {
        console.log(res);
        const response = JSON.stringify(res);
        this.notyfService.success(JSON.parse(response).message);
        this.getItems();
      });
    } else {
      this._servicio.createItem(item).subscribe((res) => {
        console.log(res);
        const response = JSON.stringify(res);
        this.notyfService.success(JSON.parse(response).message);
        this.getItems();
      });
    }
    this.limpiar();
  }

  deleteItem() {
    this._servicio.deleteItem(this._idEliminar).subscribe((res) => {
      console.log(res);
      const response = JSON.stringify(res);
      this.notyfService.error(JSON.parse(response).message);
      this.getItems();
      this.limpiar();
    });
  }

  abstract editar(item: any);

  limpiar() {
    this._idEditar = '';
    this._idEliminar = '';
    this.resetearItem();
  }

  abstract resetearItem();

  obtenerFecha() {
    const date = new Date();
    return this.formato(date.getDate()) + '/' + this.formato(date.getMonth() + 1) + '/' + date.getFullYear();
  }

  obtenerHora() {
    const date = new Date();
    return this.formato(date.getHours()) + ':' + this.formato(date.getMinutes());
  }

  formato(n: number) {
    if (n.toString().length < 2) {
      return '0' + n;
    } else {
      return n;
    }
  }

  alerta(key) {
    $('.swal-overlay').addClass('swal-overlay--show-modal');
    this._idEliminar = key;
  }

}
