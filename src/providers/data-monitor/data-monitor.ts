import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataMonitorProvider {

  constructor(public http: HttpClient) {

  }

  getMonitores() {
    return this.http.get(`http://localhost:3001/api/monitores`);
  }

}
