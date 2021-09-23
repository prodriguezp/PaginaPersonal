import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,public route: Router,public authService: AuthService) { }

  ngOnInit(): void {
  }

  onLoginGoogle(){
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    this.authService.admin = true;
    this.route.navigate(['/']);
  }
  onLogOut(){
    this.afAuth.signOut();
  }

}
