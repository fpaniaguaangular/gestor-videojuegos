import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/models/videojuego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  videojuegos:Videojuego[];
  constructor(private servicioVideojuegos:VideojuegosService, private ar:ActivatedRoute) { 
    this.videojuegos = servicioVideojuegos.getVideojuegos();
  }

  ngOnInit(): void {
    this.ar.params.subscribe(parametros=>{
      let plataforma = parametros['plataforma'];
      if (plataforma!=undefined){
        this.videojuegos = this.servicioVideojuegos.getVideojuegosPorPlataforma(plataforma);
      }
    });
  }

}
