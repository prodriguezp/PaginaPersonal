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
import { GridImagenesComponent } from './componentes/grid-imagenes/grid-imagenes.component'; // CLI

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    InicioComponent,
    GridImagenesComponent
  ],
  imports: [
    RouterModule.forRoot([      
      { path: '',component: InicioComponent},
      { path: 'footer',component: FooterComponent},
      { path: 'header',component: HeaderComponent},
      { path: 'banner',component: BannerComponent},

    ]),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
