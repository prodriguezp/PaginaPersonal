import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  numeros = [];
  url = "assets/img/";
  bool = true;
  items ;
  lenght;
  constructor() {
    this.items = [{
      image: this.url + "imagen3.jpg",
      titulo: "Presentación",
      texto: "Me presento, soy Pedro Luis y soy programador graduado en <span>Grado Superior de Desarrollador  de Aplicaciones Multiplataformas</span> y <span>Grado Superior en Desarrollo de Aplicaciones Web</span>. Actualemente soy Programador FullStack en la empresa Qualisys trabajando con tecnologias Web FrontEnd (HTML, CSS, JS, Cordova, JQuery ...)  y como tecnologias BackEnd (Cosmos, Wordpress, PrestaShop... ) "
    }, {
      image: this.url + "imagen4.jpg",
      titulo: "Quien soy",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
      image: this.url + "imagen1.jpg",
      titulo: "Quien soy",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
      image: this.url + "imagen2.jpg",
      titulo: "Quien soy",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  
    ]
    this.lenght = this.items.length / 2;
    this.numeros = [];
    for (let index = 0; index < this.items.length; index++) {
      this.numeros.push(index)
      index = index+1;            
    }    
    console.log(this.numeros);
  }

  ngOnInit(): void {


  }

  getTwoImages(numero) {
    console.log(this.items);
    
    return {
      imagesArr: [this.items[numero].image, this.items[numero+1].image],
      titulo: this.items[numero].titulo,
      texto: this.items[numero].texto
    };
  }

  getArrImagesLenght() {    
    
    
    return this.numeros;
  }
  getBool(){
    var boolAux = this.bool;
    this.bool = !boolAux;
    return boolAux;
  }
}