import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-crear-reactive',
  templateUrl: './crear-reactive.component.html',
  styleUrls: ['./crear-reactive.component.css']
})
export class CrearReactiveComponent implements OnInit {
  formulario:FormGroup;
  mensajeErrorTitulo:string="";
  constructor(private videojuegosService:VideojuegosService, private router:Router) { 
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      plataforma: new FormControl('',[
        Validators.required,
        Validators.maxLength(10)
      ])
    });
  }

  ngOnInit(): void {
  }

  crear():void{
    /*
    for (let k in this.formulario.controls) {
      console.log(k)
      console.log(this.formulario.controls[k].errors);
    }
    */
    if (this.formulario.valid){
      this.videojuegosService.addVideojuego(this.formulario.value);
      this.router.navigateByUrl("/consultar");
    } else {
      if (this.formulario.controls['titulo'].errors?.['required']){
        this.mensajeErrorTitulo="El título es obligatorio";
      } else if (this.formulario.controls['titulo'].errors?.['minlength']){
        this.mensajeErrorTitulo="El título debe ser mayor de 5 caracteres";
      }
    }
  }

  visualizarDatos():void {
    //Acceso a los valores de los input del formulario.
    console.log(this.formulario.controls["titulo"].value);
    console.log(this.formulario.controls["titulo"].setValue("Fornite"));
  }

  limpiarMensajeError():void {
    this.mensajeErrorTitulo="";
  }

}
