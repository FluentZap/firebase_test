import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {  
  constructor(private authService: AuthenticationService, private router: Router) {}  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {        
    console.log(this.authService.user);
    
    return !!this.authService.user;
  }
}
