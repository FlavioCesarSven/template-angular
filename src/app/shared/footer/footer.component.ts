import { Component, OnInit } from '@angular/core';
import { InfoPaginasService } from '../../services/info-paginas.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(public infoPaginas: InfoPaginasService) { }

  ngOnInit(): void {
  }

}
