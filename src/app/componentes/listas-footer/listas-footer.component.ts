import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-footer',
  templateUrl: './listas-footer.component.html',
  styleUrls: ['./listas-footer.component.scss']
})
export class ListasFooterComponent implements OnInit {
  @Input() titulo;
  @Input() itemLista;
  constructor() { }

  ngOnInit(): void {
  }

}
