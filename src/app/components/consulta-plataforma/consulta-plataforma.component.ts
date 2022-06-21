import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from 'src/app/models/videojuego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-consulta-plataforma',
  templateUrl: './consulta-plataforma.component.html',
  styleUrls: ['./consulta-plataforma.component.css']
})
export class ConsultaPlataformaComponent implements OnInit {
  plataformas:string[];
  plataformaSeleccionada:string="";
  constructor(protected videojuegosServices:VideojuegosService, private router:Router) { 
    this.plataformas = videojuegosServices.getPlataformas();
  }

  ngOnInit(): void {
  }

  buscar():void {
    console.log("Buscando..." + this.plataformaSeleccionada);
    this.router.navigateByUrl('/consultarPorPlataforma/'+this.plataformaSeleccionada);
  }

}
