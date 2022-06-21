import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearComponent } from './components/crear/crear.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { CopitoComponent } from './components/copito/copito.component';
import { ConsultaPlataformaComponent } from './components/consulta-plataforma/consulta-plataforma.component';
import { AyudaCreditosComponent } from './components/ayuda-creditos/ayuda-creditos.component';
import { AyudaInstruccionesComponent } from './components/ayuda-instrucciones/ayuda-instrucciones.component';
import { CrearTemplateComponent } from './components/crear-template/crear-template.component';
import { CrearReactiveComponent } from './components/crear-reactive/crear-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    InicioComponent,
    CrearComponent,
    ConsultarComponent,
    AyudaComponent,
    CopitoComponent,
    ConsultaPlataformaComponent,
    AyudaCreditosComponent,
    AyudaInstruccionesComponent,
    CrearTemplateComponent,
    CrearReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
