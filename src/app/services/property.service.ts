import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newproperty, property, propertySucces, updateproperty, updatedpropertySuccess } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
// private property:property[]=[
//   {
//     id: 1,
//     name:'FLAMES',
//     location:'Westlands',
//     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohU0GuEqiOYmKV29ND5tbe-Wb10NnXbKW8o-nPacV&s',
//     price:24000,
//     type:'Bedsitter',
//     address:'31244',
//     city:'Nairobi',
//     country:'kenya'
//   },
//   {
//     id: 1,
//     name:'PLAZA',
//     location:'Kitengela',
//     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohU0GuEqiOYmKV29ND5tbe-Wb10NnXbKW8o-nPacV&s',
//     price:24000,
//     type:'selfcontained',
//     address:'44',
//     city:'Nairobi',
//     country:'kenya'
//   },
//   {
//     id: 1,
//     name:'FLAMES',
//     location:'Curren',
//     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohU0GuEqiOYmKV29ND5tbe-Wb10NnXbKW8o-nPacV&s',
//     price:24000,
//     type:'single',
//     address:'344',
//     city:'Nairobi',
//     country:'kenya'
//   },
//   {
//     id: 1,
//     name:'FLAMES',
//     location:'Pangani',
//     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohU0GuEqiOYmKV29ND5tbe-Wb10NnXbKW8o-nPacV&s',
//     price:24000,
//     type:'flat',
//     address:'312',
//     city:'Nairobi',
//     country:'kenya'
//   }
// ]
  constructor( private http:HttpClient) { }
  getProperties():Observable<property[]>{
    return this.http.get<property[]>('http://localhost:4000/property')
  }
  
  getPropertiesById(Propertyid:number):Observable<property>{
    return this.http.get<property>( `http://localhost:4000/property/prop/${Propertyid}` )
    
  }

  AddProperty(newProperty:Newproperty):Observable<propertySucces>{
    return this.http.post<propertySucces>('http://localhost:4000/property',newProperty)
  }

  UpdateProperty(Propertyid:number,updatedProperty:updateproperty):Observable<updatedpropertySuccess>{
    return this.http.put<updatedpropertySuccess>('',updatedProperty )
  }

  DeleteProperty(Propertyid:number):Observable<updatedpropertySuccess>{
    return this.http.delete<updatedpropertySuccess>('')
  }
  getProperty():Observable<property[]>{
    return this.http.get<property[]>('http://localhost:4000/property')
  }
}
