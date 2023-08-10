import { createAction, props } from "@ngrx/store";






export const Increment= createAction('[Counter]-increment',props<{IncrementBy:number}>())
export const Decrement=createAction('[Counter]-decrement',props<{decrementBy:number}>())