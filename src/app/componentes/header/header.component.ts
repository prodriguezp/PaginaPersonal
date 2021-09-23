import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mostrar = false;
  vistaMovil = true;
  logeado = false;  
  admin = false;
  emailsAdmin = [
    "pedroluisrp1998@gmail.com",
    "robgherdev@gmail.com"    
  ]
  constructor(public afsAuth: AngularFireAuth, public authService: AuthService) { 
    this.admin = false; 
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.cambiar(this.mostrar)

    window.onresize = (e) => {
      if (screen.width < 761) { this.cambiar(false) }
      else { this.cambiar(this.mostrar) }


    };

    
  }
  cambiar(bool) {
    if (screen.width <= 759) {
      this.vistaMovil = true

      this.mostrar = bool
    }
    else {
      this.vistaMovil = false;
      this.mostrar = true;
    }
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        if(this.emailsAdmin.includes(auth.email)){                    
          this.admin = true;
        }        
        else{   
          this.admin = false;
        }
        this.logeado = true;        

      }
      else {
        this.logeado = false;  
        this.admin = false;      
        console.log("NO LOGEADO");

      }
    })
  }

  onLogOut() {        
    this.admin = false;        
    this.afsAuth.signOut();
    this.getCurrentUser();
  }

}
