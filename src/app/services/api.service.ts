import { UserModel } from './../models/usuario.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private usersUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }
  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.usersUrl);
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.usersUrl}/${id}`);
  }
  
  
}
