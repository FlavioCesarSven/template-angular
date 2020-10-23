
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pages.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {

  info: InfoPagina= {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) {
      this.cargarInfo();
      this.cargarEquipo();
  }

  private cargarInfo(){
      
    //Leer mi archivo Json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info= resp;
      
    } );

  }

  private cargarEquipo(){
    this.http.get('https://angular-html-71f01.firebaseio.com/equipo.json')
      .subscribe( (resp:any[]) =>{{
          this.cargada = true;
          this.equipo = resp;
      
          console.log( this.equipo );
      }} ); 
    
  }
}
