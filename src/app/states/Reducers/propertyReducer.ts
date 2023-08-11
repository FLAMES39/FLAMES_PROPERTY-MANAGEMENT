import { State, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { property, updatedpropertySuccess } from "src/interfaces";
import * as propertyActions from '../Actions/propetyActions'


export interface propertyInterface {
    properties: property[],
    propertyError: string,
    AddPropertySuccess: string,
    AddPropertyFailure: string,
    updatedpropertySuccess: string,
    updatePropertyFailure: string,
    GetPropertyByIdSuccess:string,
    GetPropertyByIdFailure:string

}
const initialState: propertyInterface = {
    properties: [],
    propertyError: '',
    AddPropertySuccess: '',
    AddPropertyFailure: '',
    updatedpropertySuccess: '',
    updatePropertyFailure: '',
    GetPropertyByIdSuccess:'',
    GetPropertyByIdFailure:''


}


const getPropertyState = createFeatureSelector<propertyInterface>('property')
export const getProperties = createSelector(getPropertyState, (state) => state.properties)
export const getPropError = createSelector(getPropertyState, (state) => state.propertyError)

const getAddPropertyState = createFeatureSelector<propertyInterface>('property')
export const getAddPropertiesSuccess = createSelector(getAddPropertyState, (state) => state.AddPropertySuccess)
export const getAddPropErrorFailure = createSelector(getAddPropertyState, (state) => state.AddPropertyFailure)

const getPropertyStateById = createFeatureSelector<propertyInterface>('property')
export const getPropertiesSuccessById = createSelector(getPropertyStateById, (state) => state.GetPropertyByIdSuccess)
export const getPropertiesFailureById = createSelector(getPropertyStateById, (state) => state.GetPropertyByIdFailure)





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
    }),
    on(propertyActions.GetPropertyByIdSuccess,(state,action)=>{
        return{
            ...state,
            GetPropertyByIdFailure:'',
            GetPropertyByIdSuccess:action.message
        }
    }),
    on(propertyActions.GetPropertyByIdFailure,(state,action)=>{
        return{
            ...state,
            GetPropertyByIdSuccess:'',
            GetPropertyByIdFailure:action.message
        }
    })
)