import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PropertyService } from "src/app/services/property.service";
import * as propertyActions from '../Actions/propetyActions'
import { catchError,  map, mergeMap, of, switchMap } from "rxjs";





@Injectable()

export class propertyEffects {
    constructor(private action$: Actions, private propertyService: PropertyService) { }

    getProperty$ = createEffect(() => {
        return this.action$.pipe(
            //logic
            //filter the action .....use the oftype ngrx operator
            ofType(propertyActions.GetProperty),
            mergeMap(action => {
                return this.propertyService.getProperties().pipe(
                    //success
                    map(property => {
                        return propertyActions.GetPropertySuccess({ property })
                    }),
                    catchError(error => of(propertyActions.GetPropertyFailure({ ErrorMessage: error })))
                )
            })
        )
    })
    addProperty$ = createEffect(() => {
        return this.action$.pipe(
            ofType(propertyActions.addProperty),
            mergeMap(action => {
                return this.propertyService.AddProperty(action.newProperty).pipe(
                    map(m => propertyActions.AddPropertySuccess({ message: m.message })
                    ),
                    catchError(error => of(propertyActions.AddPropertyFailure({ message: error })))
                )
            }),
            //refreshing behaviour
            switchMap(() => [propertyActions.GetProperty()])
        )
    })
    updateProperty$=createEffect(()=>{
        return this.action$.pipe(
            ofType(propertyActions.updateProperty),
            mergeMap(action=>{
                return this.propertyService.UpdateProperty(action.propertyid,action.updatedProperty).pipe(
                    map(msg=> propertyActions.updatePropertySuccess({message:msg.message})),
                    catchError(error=> of(propertyActions.updatePropertyFailure({message:error})))
                )
                
            })
        )
    })
}


