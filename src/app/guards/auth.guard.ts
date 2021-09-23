import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire';
import { AuthService } from '../services/auth.service';
import { HeaderComponent } from '../componentes/header/header.component';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user = {};  
  constructor(private authSerive: AuthService, private authService: AuthService) {        
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {   
    this.authSerive.getCurrentUser();
    return true;
  }

}
