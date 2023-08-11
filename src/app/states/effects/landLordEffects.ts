import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LandlordService } from "src/app/services/landlord.service";
import * as landlordActions from '../Actions/landlordActions'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";



@Injectable()


export class LandlordEffects {
    constructor(private actuon$: Actions, private landlordservice: LandlordService, private authservice: AuthService, private router: Router) { }
    LoggedLandlord$ = createEffect(() => {
        return this.actuon$.pipe(
            ofType(landlordActions.LoggedLandlord),
            mergeMap(action => {
                return this.landlordservice.logLandlord(action.landlord).pipe(
                    tap(ms => {
                        this.authservice.LandlordloggedIn(ms)
                        this.router.navigate(['/allProperty'])
                    }),
                    map(msg => landlordActions.LoggedLandlordSuccess({ message: msg.message })),
                    catchError(error => of(landlordActions.LoggedLandlordSuccess({ message: error })))
                )
            })
        )
    })
    RegisteredLandlord$= createEffect(()=>{
        return this.actuon$.pipe(
            ofType(landlordActions.RegisteredLandlord),
            mergeMap(action=>{
                return this.landlordservice.addlandLord(action.landlord).pipe(
                    map(ms=> landlordActions.RegisteredLandlordSuccess({message:ms.message})),
                    catchError(error=> of(landlordActions.RegisteredLandlordFailure({message:error})))
                )
            })
        )
    })
}