import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterAction from '../states/Actions/counterActions'
import * as paragrapgActions from '../states/Actions/paragraphAction'
import { counterInterface, getCounter } from '../states/Reducers/counter';
import { AppState } from '../states/appStates';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class CounterComponent implements OnInit {
  show!:boolean
  count=10
  constructor(private store:Store<AppState>){}
  ngOnInit(): void {
    this.store.select('paragraph').subscribe((value)=>{
      this.show= value.showParagraph
    })
    // this.store.select('counter').subscribe((value)=>{
    //   this.count=value.count
    // })
    this.store.select(getCounter).subscribe((counter)=>this.count=counter)
  }
  toggle(){
    this.store.dispatch(paragrapgActions.paragraph())
  }


  increment(){
    this.store.dispatch(counterAction.Increment({IncrementBy:5}))
  }
  Decrement(){
    this.store.dispatch(counterAction.Decrement({decrementBy:2}))
  }
}
