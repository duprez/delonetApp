import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socio } from '../../models/Socio.model';
import { Observable } from 'rxjs/observable';

@Injectable()
export class DataSocioProvider {

  API_SOCIOS = 'http://localhost:3001/api/socios';
  
  constructor(public http: HttpClient) {
    console.log('Hello DataSocioProvider Provider');
  }

  getSocios(): Observable<Socio[]> {
    return this.http.get<Socio[]>(this.API_SOCIOS);
  }

  modifySocio(id: number, socio) {
    return this.http.put(this.API_SOCIOS + '/' + id, {
      id_socio: socio.id_socio,
      nombre: socio.nombre,
      apellidos: socio.apellidos,
      direccion: socio.direccion,
      fecha_alta: socio.fecha_alta,
      fecha_baja: socio.fecha_baja,
      telefono: socio.telefono,
      id_clase: socio.id_clase  
    });
  }

  createSocio(socio) {
    return this.http.post(this.API_SOCIOS, {
      nombre: socio.nombre,
      apellidos: socio.apellidos,
      direccion: socio.direccion,
      fecha_alta: socio.fecha_alta,
      fecha_baja: socio.fecha_baja,
      telefono: socio.telefono,
      id_clase: socio.id_clase   
    });
  }

  deleteSocio(id) {
    return this.http.delete(this.API_SOCIOS + '/' + id);
  }
}
