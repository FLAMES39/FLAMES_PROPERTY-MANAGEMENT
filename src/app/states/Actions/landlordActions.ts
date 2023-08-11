import { createAction, props } from "@ngrx/store";
import { LoggedlandLords, NewlandLords } from "src/interfaces";





export const LoggedLandlord= createAction('[LoggedLandlord]-LoggedLandlord',props<{landlord:LoggedlandLords}>())
export const LoggedLandlordSuccess = createAction('[LoggedLandlordSuccess]-LoggedLandlordSuccess',props<{message:string}>())
export const LoggedLandlordFailure = createAction('[LoggedLandlordFailure]-LoggedLandlordFailure',props<{message:string}>())

export const RegisteredLandlord= createAction('[RegisteredLandlord]-RegisteredLandlord',props<{landlord:NewlandLords}>())
export const RegisteredLandlordSuccess = createAction('[RegisteredLandlordSuccess]-RegisteredLandlordSuccess',props<{message:string}>())
export const RegisteredLandlordFailure = createAction('[RegisteredLandlordFailure]-RegisteredLandlordFailure',props<{message:string}>())
