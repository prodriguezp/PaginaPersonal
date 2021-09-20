import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  listas = [
    {
      titulo: "REDES SOCIALES",
      lista:[
        "Instagram",
        "LinkedIn",
        "InfoJobs",
        "GitHub",
      ]
    },
    {
      titulo: "MEDIOS UTILIZADOS",
      lista:[
        "Bootstrap",
        "GoogleFonts",
        "Angular",
        "Pixbay",
        "Flaticon",        
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
