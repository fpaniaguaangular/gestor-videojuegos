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
  mensajeAviso:string="";
  constructor(private servicioVideojuegos:VideojuegosService, private ar:ActivatedRoute) { 
    this.videojuegos = servicioVideojuegos.getVideojuegos();
    this.ar.params.subscribe(parametros=>{
      this.mensajeAviso="";
      let plataforma = parametros['plataforma'];
      if (plataforma!=undefined){
        this.videojuegos = this.servicioVideojuegos.getVideojuegosPorPlataforma(plataforma);
        if (this.videojuegos.length==0){
          this.mensajeAviso="No existen videojuegos para esa plataforma";
        }
      }
    });
  }

  ngOnInit(): void {
    
  }

}
