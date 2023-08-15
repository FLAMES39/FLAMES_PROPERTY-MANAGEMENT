import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from '../states/appStates';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { property } from 'src/interfaces';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import * as propertyActions from '../states/Actions/propetyActions'
import {  getSingleProperty } from '../states/Reducers/propertyReducer';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-single-property',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './single-property.component.html',
  styleUrls: ['./single-property.component.css']
})
export class SinglePropertyComponent implements OnInit{
  // property!:Observable<property[]>
  // constructor(private store:Store<AppState>, private route:ActivatedRoute, private router:Router){

  // }
  // ngOnInit(): void {
  //   this.route.params.subscribe((p:Params)=>{
  //     this.store.dispatch(propertyActions.GetProperty())
  //     this.store.dispatch(propertyActions.GetPropertyById({Propertyid:p['Propertyid']}))
  //     this.property=this.store.select(getProperties)
  //   })
  // }

  // onview(Propertyid:number){
  //   this.router.navigate(['/single', Propertyid])
  // }
  Property!:Observable<property>
  constructor(private store:Store<AppState>, private router:Router, private route:ActivatedRoute ,private propertyservice:PropertyService ){

  }
  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.store.dispatch(propertyActions.GetProperty())
      this.store.dispatch(propertyActions.GetPropertyByIdSuccess({property:p['propertyid']}))
this.Property=this.propertyservice.getPropertiesById(p['Proprtyid'])
    })
    //  console.log(this.Property);
    
  }

}
