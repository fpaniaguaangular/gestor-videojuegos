import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ConsultaPlataformaComponent } from './components/consulta-plataforma/consulta-plataforma.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { CrearComponent } from './components/crear/crear.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path:'inicio',component:InicioComponent},
  { path:'crear',component:CrearComponent},
  { path:'consultar', component:ConsultarComponent},
  { path:'consultarPorPlataforma/:plataforma', component:ConsultarComponent},
  { path:'consultaPlataforma', component:ConsultaPlataformaComponent},
  { path:'ayuda', component:AyudaComponent},
  { path:'', component:AyudaComponent, pathMatch:'full'},
  { path:'**', component:InicioComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
