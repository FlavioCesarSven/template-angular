import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) { 
      this.cargarProductos();
  }

  private cargarProductos(){
    
    this.http.get('https://angular-html-71f01.firebaseio.com/productos_idx.json')
        .subscribe( (data: Producto[]) =>{
          
          this.productos = data;

          this.cargando = false;
         
    } );

  }
}
