
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pages.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {

  info: InfoPagina= {};
  cargada = false;

  constructor( private http: HttpClient) {

    //Leer mi archivo Json
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {

            this.cargada = true;
            this.info= resp;
            console.log( this.info );
        } );

  }
}
