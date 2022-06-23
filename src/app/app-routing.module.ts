import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaCreditosComponent } from './components/ayuda-creditos/ayuda-creditos.component';
import { AyudaInstruccionesComponent } from './components/ayuda-instrucciones/ayuda-instrucciones.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ConsultaPlataformaComponent } from './components/consulta-plataforma/consulta-plataforma.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { CrearReactiveComponent } from './components/crear-reactive/crear-reactive.component';
import { CrearTemplateComponent } from './components/crear-template/crear-template.component';
import { CrearComponent } from './components/crear/crear.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AleatorioGuard } from './guards/aleatorio.guard';

const routes: Routes = [
  { path:'inicio',component:InicioComponent},
  { path:'crear',component:CrearComponent, canActivate: [AleatorioGuard], canDeactivate: [AleatorioGuard]},
  { path:'crear-reactive', component:CrearReactiveComponent},
  { path:'crear-template', component:CrearTemplateComponent},
  { path:'consultar', component:ConsultarComponent},
  { path:'consultarPorPlataforma/:plataforma', component:ConsultarComponent},
  { path:'consultaPlataforma', component:ConsultaPlataformaComponent},
  { path:'ayuda', component:AyudaComponent, children: [
    { path:'creditos', component:AyudaCreditosComponent },
    { path:'instrucciones', component:AyudaInstruccionesComponent }
  ]},
  { path:'', component:AyudaComponent, pathMatch:'full'},
  { path:'**', component:InicioComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
