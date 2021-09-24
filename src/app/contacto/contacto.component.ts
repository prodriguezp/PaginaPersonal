import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  nombre: String;
  email: String;
  contenido: String;

  mostrarEnviado: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  enviar($event) {
    $event.preventDefault()

    fetch(`https://www.pedroluisdev.es/php/pruebas.php?nombre=${this.nombre}&email=${this.email}&contenido=${this.contenido}`)
      .then(e => {
        this.nombre = "";
        this.email = "";
        this.contenido = "";
        this.mostrarEnviado = true;
      });

  }
}
