import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
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
    ConsultaPlataformaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
