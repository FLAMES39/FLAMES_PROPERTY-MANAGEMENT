import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as userActions from '../Actions/userActions'

export interface userInteface{
    userLoginSuccess:string,
    userLoginFailure:string,
    userRegisterSuccess:string,
    userRegisterFailure:string

}
const initialState:userInteface={
    userLoginSuccess:'',
    userLoginFailure:'',
    userRegisterSuccess:'',
    userRegisterFailure:''
}


const userLoggedinState=createFeatureSelector<userInteface>('user')
export const userLoggedinSuccess=createSelector(userLoggedinState, (state)=>state.userLoginSuccess)
export const userLoggedinFailure=createSelector(userLoggedinState, (state)=>state.userLoginFailure)


const userRegisterinState=createFeatureSelector<userInteface>('user')
export const userRegisterinSuccess=createSelector(userRegisterinState, (state)=>state.userRegisterSuccess)
export const userRegisterinFailure=createSelector(userRegisterinState, (state)=>state.userRegisterFailure)



export const userReducer= createReducer(
    initialState,
    on(userActions.userLoginSuccess,(state,action):userInteface=>{
        return{
            ...state,
            userLoginFailure:'',
            userLoginSuccess:action.message
        }
    }),
    on(userActions.userLoginFailure,(state,action):userInteface=>{
        return{
            ...state,
            userLoginSuccess:'',
            userLoginFailure:action.message
        }
    }),
    on(userActions.userRegisterFailure,(state,action):userInteface=>{
        return{
            ...state,
            userRegisterSuccess:'',
            userRegisterFailure:action.message
        }
    }),
    on(userActions.userRegisterFailure,(state,action):userInteface=>{
        return{
            ...state,
            userRegisterSuccess:'',
            userRegisterFailure:action.message
        }
    })
)



