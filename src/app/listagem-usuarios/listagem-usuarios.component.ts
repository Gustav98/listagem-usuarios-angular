// Model
import { UserModel } from './../models/usuario.model';

// Service
import { ApiService } from './../services/api.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  users: UserModel[];

  zoom: number = 15;
  lat: number;
  lng: number;

  listUsers(): void{
    this.apiService.getUsers().subscribe(respostaApi => {
      this.users = respostaApi;
      this.convertLatLngToNumber(respostaApi);
    });  
  }
  convertLatLngToNumber(usuarios){
    usuarios.map(res => {
      this.lat = +res.address.geo.lat;
      this.lng = +res.address.geo.lng;
    })
  }
  
  ngOnInit(){
    this.listUsers();
  }


}
