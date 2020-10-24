// Model
import { UsuarioModel } from './../models/usuario.model';

// Service
import { ApiService } from './../services/api.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent implements OnInit {
  usuarios: UsuarioModel[];
  constructor(private apiService: ApiService) { }
  zoom: number = 15;
  
  listaUsuarios(): void{
    this.apiService.listarUsuarios().subscribe(respostaApi => this.usuarios = respostaApi);
  }
  
  ngOnInit(){
    this.listaUsuarios();
  }


}
