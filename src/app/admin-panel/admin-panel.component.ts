import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  mostrar: Boolean = false;
  emailsAdmin: String[] = [
    "pedroluisrp1998@gmail.com",
    "robgherdev@gmail.com"
  ]
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }


  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        if (this.emailsAdmin.includes(auth.email)) {
          this.mostrar = true;
        }
        else {
          this.mostrar = false;
        }
      }
      else {
        this.mostrar = false;
      }
    })
  }

  
}
