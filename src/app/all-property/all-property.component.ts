import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../services/property.service';
import { property } from 'src/interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../states/appStates';
import * as propertyAction from '../states/Actions/propetyActions'
import { getProperties } from '../states/Reducers/propertyReducer';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-property',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-property.component.html',
  styleUrls: ['./all-property.component.css']
})
export class AllPropertyComponent implements OnInit {
  properties!:Observable<property[]>
   constructor(  private store:Store<AppState> ,private route:ActivatedRoute ,private router:Router){}
   count!:number

  ngOnInit(): void {
    this.properties=this.store.select(getProperties)
    this.store.dispatch(propertyAction.GetProperty())
    this.store.select('counter').subscribe((value)=>{
      this.count=value.count 
    })
  }

  singlelink(Propertyid:number){
    this.router.navigate(['/single',Propertyid])
  }
}
