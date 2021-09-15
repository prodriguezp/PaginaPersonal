import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mostrar = false;
  vistaMovil = true;
  constructor() { }

  ngOnInit(): void {
    this.cambiar(this.mostrar)

    window.onresize = (e) => {
      if (screen.width < 761) { this.cambiar(false) }
      else { this.cambiar(this.mostrar) }


    };

    /*let displayer = document.querySelector(".displayer");
    displayer.addEventListener("focus",e=>{      
      document.querySelectorAll(".item-header").forEach(item=>{
        this.mostrar = true;
        console.log("entra");
                        
      });
    })

    displayer.addEventListener("focusout",e=>{
      document.querySelectorAll(".item-header").forEach(item=>{
        this.mostrar = false;  
        console.log("sale");              
      });      
    })*/

  }
  cambiar(bool) {
    if (screen.width <= 759) {
      this.vistaMovil = true
      console.log(bool);

      this.mostrar = bool
    }
    else {
      this.vistaMovil= false;
      this.mostrar = true;
    }





  }
}
