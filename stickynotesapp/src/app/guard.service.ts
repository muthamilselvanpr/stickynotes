import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class GuardService  implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
    if(this.authService.isLoggedIn){
      console.log(this.authService.isLoggedIn);
    return true;
    }
    // else{
    //   console.log("Access Denied");
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
  
  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}