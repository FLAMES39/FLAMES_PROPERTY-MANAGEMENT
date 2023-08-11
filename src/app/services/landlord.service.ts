import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedlandLords, NewlandLords, landlordLoginSuccess, loggedUserSuccess } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LandlordService {

  constructor(private http:HttpClient) { }

  addlandLord(newLandlord:NewlandLords):Observable<loggedUserSuccess>{
   return this.http.post<loggedUserSuccess>('http://localhost:4000/landlord/Register/Register',newLandlord )
  }
  logLandlord(loggedLandlord:LoggedlandLords):Observable<landlordLoginSuccess>{
    return this.http.post<landlordLoginSuccess>('http://localhost:4000/landlord/login',loggedLandlord)
  }
  
}
