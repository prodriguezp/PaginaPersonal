import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-imagenes',
  templateUrl: './grid-imagenes.component.html',
  styleUrls: ['./grid-imagenes.component.scss']
})
export class GridImagenesComponent implements OnInit {
  @Input() items;
  @Input() bool;
  itemBuenos = [];
  titulo = "titulo";
  texto;




  constructor() {



  }

  ngOnInit(): void {     
    this.itemBuenos = [];     
    this.titulo = this.items.titulo;
    this.texto = this.items.texto;
    
    this.itemBuenos.push({
      imagen: this.items.imagesArr[0],
      bool: this.bool
    })
    this.itemBuenos.push({
      imagen: this.items.imagesArr[1],
      bool: !this.bool
    })
    console.log(this.itemBuenos);
    
  }







}
