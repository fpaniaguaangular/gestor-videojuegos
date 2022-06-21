import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  constructor() { }
  public puedoAcceder():boolean {
    let permisoConcedido = Math.random()>0.5;
    console.log("¿PERMISO DE ENTRADA CONCEDIDO?:" + permisoConcedido)
    return permisoConcedido;
  }
  public puedoSalir():boolean {
    let permisoConcedido = Math.random()>0.5;
    console.log("¿PERMISO DE SALIDA CONCEDIDO?:" + permisoConcedido)
    return permisoConcedido;
  }
}
