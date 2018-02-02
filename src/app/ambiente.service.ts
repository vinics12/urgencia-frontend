import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Ambiente } from './ambiente';



@Injectable()
export class AmbienteService {

  constructor(private http: Http) { }

  getAmbiente() {
    return "{OK}"
    // return this.http.get('http://localhost:3000/api/testes')
    //   .map(res => res.json());
  }

  getClima() {

    return this.http.get('http://apiadvisor.climatempo.com.br/api/v1/locale/city/3477?token=178df6ccef391bc468a05e8c41b3127f&from=2018-02-03')
      .map((res: Response) => res.json());
  }

}
