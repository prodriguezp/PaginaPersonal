import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos = [
    {
      titulo : "Recetario Web",
      descripcion : "Esta aplicacion la realize con el framework mas utilizado de Java, Spring Tools. Esta página tiene como fin el uso de una interfaz para poder crear recetas con sus respectivos pasos e ingredientes , y su posterior visuaización para ver las recetas. Tambien fue implementado una serie de roles, donde podias Rogistrarte/Logearte, para poder ver las recetas que se han subido, y si eres administrador , subir recetas",
      img : "assets/img/cocinar.svg"
    },
    {
      titulo : "PLDv (Pedro Luis Dev)",
      descripcion : "Esta proyecto es en el que te encuentras actualmente, una página web donde me presento como programador, donde puedes ver los proyectos que he realizado hasta el dia de hoy y las tecnologías que he utilizado. Aqui he utilizado Angular para realizar esta página por su gran escalibilidad con los componente sy mayor organización.",
      img : "assets/img/logo2.png"
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
