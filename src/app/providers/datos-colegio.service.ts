import { Injectable } from '@angular/core';
import { Servicio } from '../abstract/servicio.abstract';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosColegioService extends Servicio {

  constructor(private https: HttpClient) {
    super(https, environment.server + '/datos');
  }
}
