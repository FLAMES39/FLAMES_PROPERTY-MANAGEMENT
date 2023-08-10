import { Injectable } from '@angular/core';
import { loggedUserSuccess } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role!:string|null
  token!:string|null
  name!:string|null
  constructor() { }


  loggedIn(res:loggedUserSuccess){
    localStorage.setItem('role', res.role)
    localStorage.setItem('token', res.token)
    localStorage.setItem('name', res.name)
  }
  logout(){
    localStorage.clear()
  }
  isLoggedIn(){
    let role= localStorage.getItem('role')
    this.role= role? role:null
    let token= localStorage.getItem('token')
    this.token=token?token:null
    return this.token? true: false 

  }
getUsername(){
  let name= localStorage.getItem('name')
  return  this.name=name?name:'Welcome User'
}
getRole(){
    let role= localStorage.getItem('role')
   return role==='landlord'? true:false
}

}
