import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVideojuego } from 'src/app/interfaces/ivideojuego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-crear-template',
  templateUrl: './crear-template.component.html',
  styleUrls: ['./crear-template.component.css']
})
export class CrearTemplateComponent implements OnInit {

  constructor(private videojuegosService:VideojuegosService, private router:Router) { }

  ngOnInit(): void {
  }

  crearVideojuego(videojuego:IVideojuego):void {
    console.log("Creando videojuego...");
    this.videojuegosService.addIVideojuego(videojuego);
    this.router.navigate(['consultar']);
  }
}
