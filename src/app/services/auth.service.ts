import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  admin  = false;
  registerUser(){}
  loginEmailUser(){}
  loginFacebookUser(){}
  loginGoogleUser(){}
  logOutUser(){}
  isAuth(){
    return this.afsAuth.authState.pipe(map(auth=>auth))
  }
  getCurrentUser() {
    this.isAuth().subscribe(auth => {
      if (auth) {
        if(auth.email == "pedroluisrp1998@gmail.com"){
          console.log(auth);
          
          this.admin = true;
        }        
        else{
          this.admin = false;
        }               
      }
      else {      
        console.log("NO LOGEADO");

      }
    })
    
    
  }

  
}
