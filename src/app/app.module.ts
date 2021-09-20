import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GridImagenesComponent } from './componentes/grid-imagenes/grid-imagenes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ItemProyectoComponent } from './componentes/item-proyecto/item-proyecto.component';
import { ItemMantenimientoComponent } from './componentes/item-mantenimiento/item-mantenimiento.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { ListasFooterComponent } from './componentes/listas-footer/listas-footer.component'; // CLI

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    InicioComponent,
    GridImagenesComponent,
    ProyectosComponent,
    ItemProyectoComponent,
    ItemMantenimientoComponent,
    TecnologiasComponent,
    ListasFooterComponent
  ],
  imports: [
    RouterModule.forRoot([      
      { path: '',component: InicioComponent},
      { path: 'proyectos',component: ProyectosComponent},
      { path: 'contacto',component: ItemMantenimientoComponent},      

    ]),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
