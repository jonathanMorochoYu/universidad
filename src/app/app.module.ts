import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiografiaComponent } from './page/biografia/biografia.component';
import { CabeceraComponent } from './page/cabecera/cabecera.component';
import { UniversidadComponent } from './page/universidad/universidad.component';
import { MenuComponent } from './page/menu/menu.component';
import { VentanalistaComponent } from './page/ventanalista/ventanalista.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { HttpClientModule } from '@angular/common/http';

import { provideAuth,getAuth } from '@angular/fire/auth';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { firebaseAppFactory } from '@angular/fire/app/app.module';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';








@NgModule({
  declarations: [
    AppComponent,
    BiografiaComponent,
    CabeceraComponent,
    UniversidadComponent,
   // Añade FormsModule a los imports
    MenuComponent,
    VentanalistaComponent
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  
  ],
  providers: [{provide: FIREBASE_OPTIONS,useValue:environment}],
  bootstrap: [AppComponent]
})
export class AppModule { }