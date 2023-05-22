import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminPanelGuard {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let userInfo!: any;

    // sadece admin rolüne sahip olanlar girebilir
    if (localStorage.getItem('userInfo') != undefined) {
      userInfo = JSON.parse(localStorage.getItem('userInfo') as any);

      if (userInfo.roles.includes('admin')) {
        return true;
      }
    }

    this.router.navigate(['login']);

    return false;
  }
}
