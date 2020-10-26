import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
              public productoService: ProductosService ) {

   }

  ngOnInit(): void {
    this.route.params.subscribe( (parametros: any) => {
      
       // console.log( parametros['id'] );
      
      this.productoService.getProducto( parametros['id'] )
          .subscribe( (producto: ProductoDescripcion) => {
            
            this.id = parametros['id'];
            this.producto = producto;

            console.log( producto );
          } );
    } );
  }

}
