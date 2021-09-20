import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.scss']
})
export class ItemProyectoComponent implements OnInit {
  @Input() titulo ;
  @Input() descripcion ;
  @Input() invert;
  @Input() img;
  constructor() { }

  ngOnInit(): void {
    
  }

  getOrder(){
    if(window.innerWidth <= 760){
      return [1,2]
    }
    return (this.invert ? [1,2] : [2,1]);
  }
}
