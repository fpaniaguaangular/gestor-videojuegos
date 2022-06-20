import { Injectable } from '@angular/core';
import { Videojuego } from '../models/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {
  private videojuegos:Videojuego[]=[];
  constructor() {
    let videojuego:Videojuego=new Videojuego();
    videojuego.titulo="Juego fake 1";
    videojuego.plataforma="PS5";
    this.videojuegos.push(videojuego);
    videojuego=new Videojuego();
    videojuego.titulo="Juego fake 2";
    videojuego.plataforma="XBOX SERIES S";
    this.videojuegos.push(videojuego);
    videojuego=new Videojuego();
    videojuego.titulo="Juego fake 3";
    videojuego.plataforma="PS5";
    this.videojuegos.push(videojuego);
  }
  addVideojuego(videojuego:Videojuego):void {
    if (videojuego.titulo.trim() == "") {
      //¿Realizar la acción requerida para paliar los efectos del error?
      throw Error("El título no puede estar vacío");
    }
    this.videojuegos.push(videojuego);
  }
  getVideojuegos():Videojuego[]{
    return this.videojuegos;
  }
  getPlataformas():any[] {
    const setPlataformas = new Set();
    this.videojuegos.forEach(vj => {
      setPlataformas.add(vj.plataforma);      
    });
    return Array.from(setPlataformas);
  }
  /*
  //FILTRO CON FUNCIÓN FLECHA ()
  getVideojuegosPorPlataforma(plataforma:string):Videojuego[]{
    let videojuegos = this.videojuegos.filter(videojuego => videojuego.plataforma==plataforma);
    return videojuegos;
  }
  */
  //FILTRO CON FUNCIÓN CON PARÁMETROS
  getVideojuegosPorPlataforma(plataforma:string):Videojuego[]{
    let videojuegos = this.videojuegos.filter(esPlataforma(plataforma));
    return videojuegos;
  }
}

function esPlataforma(plataforma:string) {
  return function(videojuego:Videojuego):boolean{
    return videojuego.plataforma==plataforma;
  }
}


