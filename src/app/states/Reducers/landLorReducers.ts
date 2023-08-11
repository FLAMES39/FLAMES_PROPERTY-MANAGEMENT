import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as LandlordActions from '../Actions/landlordActions'


export interface LandlordInterface{
    LoggedLandlordSuccess:string,
    LoggedLandlordFailure:string,
    RegisteredLandlordFailure:string,
    RegisteredLandlordSuccess:string
}

const initialState:LandlordInterface={
    LoggedLandlordSuccess:'',
    LoggedLandlordFailure:'',
    RegisteredLandlordFailure:'',
    RegisteredLandlordSuccess:''
}



const getLoggedLandlordState = createFeatureSelector<LandlordInterface>('landlord')
export const getLoggedLandlordStateSuccess = createSelector(getLoggedLandlordState, (state)=>state.LoggedLandlordSuccess)
export const getLoggedLandlordStateFailure = createSelector(getLoggedLandlordState, (state)=>state.LoggedLandlordFailure)



const getRegisterLandlordState = createFeatureSelector<LandlordInterface>('landlord')
export const getRegisterLandlordStateSuccess = createSelector(getLoggedLandlordState, (state)=>state.RegisteredLandlordSuccess)
export const getRegisterLandlordStateFailure = createSelector(getLoggedLandlordState, (state)=>state.LoggedLandlordFailure)



export const landlordReducer= createReducer(
    initialState,
    on(LandlordActions.LoggedLandlordSuccess, (state,action):LandlordInterface=>{
        return{
            ...state,
            LoggedLandlordFailure:'',
            LoggedLandlordSuccess:action.message
        }
    }),
    on(LandlordActions.LoggedLandlordFailure, (state,action):LandlordInterface=>{
        return{
            ...state,
            LoggedLandlordSuccess:'',
            LoggedLandlordFailure:action.message
        }
    }),
    on(LandlordActions.RegisteredLandlordSuccess, (state,action):LandlordInterface=>{
        return{
            ...state,
            RegisteredLandlordFailure:'',
            LoggedLandlordSuccess:action.message
        }
    }),
    on(LandlordActions.RegisteredLandlordFailure, (state,action):LandlordInterface=>{
        return{
            ...state,
            LoggedLandlordSuccess:'',
            LoggedLandlordFailure:action.message
        }
    })

)




