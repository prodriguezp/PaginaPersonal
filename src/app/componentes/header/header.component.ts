import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let displayer = document.querySelector(".displayer");
    displayer.addEventListener("focus",e=>{      
      document.querySelectorAll(".item-header").forEach(item=>{
        item.styles.width = 3
      });
    })

    displayer.addEventListener("focusout",e=>{
      console.log(1);
      
    })
    


  }

}
