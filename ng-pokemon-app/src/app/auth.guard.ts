import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
  
@Injectable()
export class AuthGuard implements CanActivate {
  
    constructor(
     private authService: AuthService, 
     private router: Router
    ) { }
  
    canActivate(): boolean {
        if(this.authService.isLoggedIn){
           return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
  
}