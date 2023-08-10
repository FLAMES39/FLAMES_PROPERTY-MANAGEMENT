import { State, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { property, updatedpropertySuccess } from "src/interfaces";
import * as propertyActions from '../Actions/propetyActions'


export interface propertyInterface {
    properties: property[],
    propertyError: string,
    AddPropertySuccess: string,
    AddPropertyFailure: string,
    updatedpropertySuccess: string,
    updatePropertyFailure: string
}
const initialState: propertyInterface = {
    properties: [],
    propertyError: '',
    AddPropertySuccess: '',
    AddPropertyFailure: '',
    updatedpropertySuccess: '',
    updatePropertyFailure: ''


}


const getPropertyState = createFeatureSelector<propertyInterface>('property')
export const getProperties = createSelector(getPropertyState, (state) => state.properties)
export const getPropError = createSelector(getPropertyState, (state) => state.propertyError)

const getAddPropertyState = createFeatureSelector<propertyInterface>('property')
export const getAddPropertiesSuccess = createSelector(getAddPropertyState, (state) => state.AddPropertySuccess)
export const getAddPropErrorFailure = createSelector(getAddPropertyState, (state) => state.AddPropertyFailure)




export const propertyReducer = createReducer(
    initialState,

    on(propertyActions.GetPropertySuccess, (state, action): propertyInterface => {
        return {
            ...state,
            propertyError: '',
            properties: action.property
        }
    }),
    on(propertyActions.GetPropertyFailure, (state, action): propertyInterface => {
        return {
            ...state,
            propertyError: action.ErrorMessage,
            properties: []
        }
    }),

    on(propertyActions.AddPropertySuccess, (state, action): propertyInterface => {
        return {
            ...state,
            AddPropertyFailure: '',
            AddPropertySuccess: action.message

        }
    }),
    on(propertyActions.AddPropertyFailure, (state, action): propertyInterface => {
        return {
            ...state,
            AddPropertyFailure: '',
            AddPropertySuccess: action.message
        }
    }),
    on(propertyActions.updatePropertySuccess, (state, action): propertyInterface => {
        return {
            ...state,
            updatePropertyFailure: '',
            updatedpropertySuccess: action.message,

        }
    }),
    on(propertyActions.updatePropertyFailure,(state,action)=>{
        return{
            ...state,
            updatedpropertySuccess:'',
            updatePropertyFailure:action.message
        }
    })
)