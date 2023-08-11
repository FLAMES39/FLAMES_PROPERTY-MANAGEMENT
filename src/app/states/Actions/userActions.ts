import { createAction, props } from "@ngrx/store";
import { Newusers, loggedUsers } from "src/interfaces";





export const userLogin= createAction('[userLogin]-userLogin',props<{loggedUser:loggedUsers}>())
export const userLoginSuccess= createAction('[userLoginSuccess]-userLoginSuccess',props<{message:string}>())
export const userLoginFailure= createAction('[userLoginFailure]-userLoginFailure',props<{message:string}>())

export const userRegister= createAction('[userRegister]-userRegister',props<{newUser:Newusers}>())
export const userRegisterSuccess= createAction('[userRegisterSuccess]-userRegisterSuccess',props<{message:string}>())
export const userRegisterFailure= createAction('[userRegisterFailure]-userRegisterFailure',props<{message:string}>())
