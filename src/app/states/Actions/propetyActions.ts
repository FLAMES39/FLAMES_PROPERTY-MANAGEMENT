import { createAction, props } from "@ngrx/store";
import { Newproperty, property } from "src/interfaces";





export const GetProperty=createAction('[Property]-property')
export const GetPropertySuccess=createAction('[PropertySuccess]-PropertySuccess',props<{property:property[]}>())
export const GetPropertyFailure=createAction('[PropertyFailure]-PropertyFailure',props<{ErrorMessage:string}>())

export const GetSinglePropertyById=createAction('[GetPropertyById]-GetPropertyById',props<{Propertyid:number}>())
export const GetPropertyByIdSuccess=createAction('[GetPropertyByIdSuccess]-GetPropertyByIdSuccess',props<{property:property}>())
export const GetPropertyByIdFailure=createAction('[GetPropertyByIdFailure]-GetPropertyByIdFailure',props<{message:string}>())

export const addProperty=createAction('[addProperty]-addProperty',props<{newProperty:Newproperty}>())
export const AddPropertySuccess=createAction('[AddPropertySuccess]-AddPropertySuccess',props<{message:string}>())
export const AddPropertyFailure=createAction('[PropertyFailure]-PropertyFailure',props<{message:string}>())

export const updateProperty=createAction('[updateProperty]-updateProperty',props<{propertyid:number,updatedProperty:Newproperty}>())
export const updatePropertySuccess=createAction('[updatePropertySuccess]-updatePropertySuccess',props<{message:string}>())
export const updatePropertyFailure=createAction('[PropertyFailure]-PropertyFailure',props<{message:string}>())


export const GetPropertyById=createAction('[GetPropertyById]-GetPropertyById',props<{Propertyid:number}>())

