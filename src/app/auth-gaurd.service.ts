import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs';

import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, public authService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.afAuth.authState.take(1).map(authState => !!authState).do(authenticated => {
      if (!authenticated) {
          alert("Access denied.");
          this.router.navigate(['public']);
          return false;
      } else {
        return true;
      }
    });
  }
}