import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import * as userActions from '../Actions/userActions'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";




@Injectable()

export class userEffects{
    constructor(private action$:Actions, private userservice:UserService, private authservice:AuthService, private router:Router){}

    LoggedUser$=createEffect(()=>{
        return this.action$.pipe(
            ofType(userActions.userLogin),
            mergeMap(action=>{
                return this.userservice.logUser(action.loggedUser).pipe(
                   tap(res=> {
                        this.authservice.loggedIn(res)
                        this.router.navigate(['/allProperty'])
                    }),
                    map(ms=> userActions.userLoginSuccess({message:ms.message})),
                    catchError(res=> of(userActions.userLoginFailure({message:res.message})))
                )
            }),
           
        )
    })
    RegisterUser$=createEffect(()=>{
        return this.action$.pipe(
            ofType(userActions.userRegister),
            mergeMap(action=>{
                return this.userservice.addUser(action.newUser).pipe(
                    tap(ms=>{
                        
                        this.router.navigate(['/allProperty'])
                    }),
                    map(msg=> userActions.userRegisterSuccess({message:msg.message})),
                    catchError((errorMessage=> of(userActions.userRegisterFailure({message:errorMessage.message}))))
                )
            })
        )
    })
}


