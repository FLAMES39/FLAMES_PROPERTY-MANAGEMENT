import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from '../states/appStates';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { property } from 'src/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import * as propertyActions from '../states/Actions/propetyActions'

@Component({
  selector: 'app-single-property',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-property.component.html',
  styleUrls: ['./single-property.component.css']
})
export class SinglePropertyComponent implements OnInit{
  properties!:Observable<property[]>
  constructor(private store:Store<AppState>, private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.store.dispatch(propertyActions.GetPropertyById(p['propertyid']))
    })
  }


}
