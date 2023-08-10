import { createAction, createReducer, on } from "@ngrx/store";
import * as paragraghActions from '../Actions/paragraphAction'

export interface  paragraphinterface{
    showParagraph:boolean
}

const initialState:paragraphinterface={
    showParagraph:false
}


export const paragraphReducer= createReducer(
    initialState,
    on(paragraghActions.paragraph, state=>{
        console.log('action changed');
        
        return{
            ...state,
            showParagraph:!state.showParagraph
        }
    })
)