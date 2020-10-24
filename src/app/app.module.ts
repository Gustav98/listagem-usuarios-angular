import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpfX-PXjxUf5mK1dTaJ_1BeJ5kQ_-2eaU'
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
