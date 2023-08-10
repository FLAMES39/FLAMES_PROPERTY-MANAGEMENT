import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUserSuccess, Newusers, loggedUserSuccess, loggedUsers } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }
  
  addUser(newUser:Newusers):Observable<AddUserSuccess>{
    return this.http.post<AddUserSuccess>('http://localhost:4000/user/register/register', newUser)
  }
  
  logUser(loggedUser:loggedUsers):Observable<loggedUserSuccess>{
    return this.http.post<loggedUserSuccess>('http://localhost:4000/user/login', loggedUser)
  }
}
