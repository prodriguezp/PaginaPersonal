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
import { ListasFooterComponent } from './componentes/listas-footer/listas-footer.component';
import { LoginComponent } from './componentes/login/login.component'; // CLI
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule}  from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthGuard } from './guards/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
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
    ListasFooterComponent,
    LoginComponent,
    AdminPanelComponent,
    ContactoComponent
  ],
  imports: [
        
    RouterModule.forRoot([      
      { path: '',component: InicioComponent},
      { path: 'proyectos',component: ProyectosComponent},
      { path: 'contacto',component: ContactoComponent},      
      { path: 'login',component: LoginComponent},            
      { path: 'admin',component: AdminPanelComponent}, 
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    AngularFireAuth,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  
    
}
