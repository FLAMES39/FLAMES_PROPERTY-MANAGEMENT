import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as counterAction from '../Actions/counterActions'



//strong typing the state
export interface counterInterface{
    count:number
}
const initialState:counterInterface={
    count:10
}


//selecting a slice || countter
 const getCounterState=createFeatureSelector<counterInterface>('counter')
 //selecting a property of the slice
 export const getCounter=createSelector(getCounterState, (state)=>state.count)

export const counterReducer= createReducer(
    initialState,
    on(counterAction.Increment , (state,action):counterInterface=>{
        return{
            ...state,
            count:state.count + action.IncrementBy
        }
    }),
    on(counterAction.Decrement, (state,action):counterInterface=>{
        return{
            ...state,
            count:state.count - action.decrementBy
        }
    })

)