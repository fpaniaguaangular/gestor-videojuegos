import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  //Aplicado a ngClass
  estiloCabecera:string="cabecera";
  //Aplicado a ngStyle
  estiloH6:any = {
    color:'#555'
  }
  //Imagen del logotipo
  logotipo:string="./assets/images/logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
