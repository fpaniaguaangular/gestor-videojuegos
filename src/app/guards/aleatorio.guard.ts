import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccesoService } from '../services/acceso.service';

@Injectable({
  providedIn: 'root'
})
export class AleatorioGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private servicioAcceso:AccesoService){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.info("ROUTE:" + route);
    console.info("STATE:" + state);
    return this.servicioAcceso.puedoAcceder();
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.info("CURRENTROUTE:" + currentRoute);
      console.info("CURRENTSTATE:" + currentState);
      console.info("NEXTSTATE:" + nextState);
      return this.servicioAcceso.puedoSalir();
  }
}
