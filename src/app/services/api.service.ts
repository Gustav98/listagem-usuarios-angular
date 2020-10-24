import { UsuarioModel } from './../models/usuario.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private usuariosUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }
  listarUsuarios(): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(this.usuariosUrl);
  }

  listarUsuario(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.usuariosUrl}/${id}`);
  }
  
  
}
