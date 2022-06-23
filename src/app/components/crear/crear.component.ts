import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LongitudInsuficienteError } from 'src/app/errors/longitud-insuficiente-error';
import { VacioError } from 'src/app/errors/vacio-error';
import { Videojuego } from 'src/app/models/videojuego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  videojuego:Videojuego;
  mensajeError:string|null=null;
  
  constructor(private servicioVideojuegos:VideojuegosService, private router:Router) { 
    this.videojuego = new Videojuego();
  }

  ngOnInit(): void {
  }

  agregar():void {
    console.log("Agregando...");
    try {
      this.servicioVideojuegos.addVideojuego(this.videojuego);
      this.inicializarFormulario();
      this.mensajeError = null;
      //this.router.navigate(['consultar']);//Utilizando navigate
      this.router.navigateByUrl('/consultar');//Utilizando navigateByUrl
    } catch (error) {
      if (error instanceof VacioError) {
        this.mensajeError = "(Error de tipo VacioError)" + error;
      } else if (error instanceof LongitudInsuficienteError) {
        this.mensajeError = "(Error de tipo LongitudInsuficienteError)" + error;
      } else {
        this.mensajeError = "" + error;
      }
    } finally {
      console.warn("El finally de un try-catch se ejecuta siempre");
    }
  }    

  inicializarFormulario():void {
    this.videojuego = new Videojuego();
  }
}
