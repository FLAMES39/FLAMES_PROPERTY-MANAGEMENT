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
    Propertyid:number
    GetPropertyByIdFailure:string,
    GetPropertyByIdSuccess: property | null;
    selectedProperty: property |null

}
const initialState: propertyInterface = {
    properties: [],
    propertyError: '',
    AddPropertySuccess: '',
    AddPropertyFailure: '',
    updatedpropertySuccess: '',
    updatePropertyFailure: '',
    Propertyid: 0,
    selectedProperty: null,
    GetPropertyByIdSuccess: null,
    GetPropertyByIdFailure: ''

}


const getPropertyState = createFeatureSelector<propertyInterface>('property')
export const getProperties = createSelector(getPropertyState, (state) => state.properties)
export const getPropertiyid = createSelector(getPropertyState, (state) => state.Propertyid)
export const getPropError = createSelector(getPropertyState, (state) => state.propertyError)
export const getSingleProperty= createSelector(getProperties,getPropertiyid,(properties,Propertyid)=>properties.find(property=>property.Propertyid===Propertyid)as property)

const  getAddPropertiesState = createFeatureSelector<propertyInterface>('property')
export const getAddPropertiesSuccess = createSelector(getAddPropertiesState, (state) => state.AddPropertySuccess)
export const getAddPropErrorFailure = createSelector(getAddPropertiesState, (state) => state.AddPropertyFailure)

const  getPropertiesSuccessByIdState = createFeatureSelector<propertyInterface>('property')
export const getPropertiesSuccessById = createSelector(getPropertiesSuccessByIdState, (state) => state.properties)
export const getPropertiesFailureById = createSelector(getPropertiesSuccessByIdState, (state) => state.selectedProperty)


 


export const propertyReducer = createReducer(
    initialState,

    on(propertyActions.GetPropertySuccess, (state, action): propertyInterface => {
        return {
            ...state,
            propertyError: '',
           properties:action.property
        }
    }),
    on(propertyActions.GetPropertyFailure, (state, action): propertyInterface => {
        return {
            ...state,
            propertyError: action.ErrorMessage,
            properties: []
        }
    }),
    on(propertyActions.GetSinglePropertyById, (state, action): propertyInterface => {
        return {
            ...state,
            Propertyid: action.Propertyid
            
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
    on(propertyActions.updatePropertyFailure,(state,action): propertyInterface=>{
        return{
            ...state,
            updatedpropertySuccess:'',
            updatePropertyFailure:action.message
        }
    }),
    on(propertyActions.GetPropertyByIdSuccess,(state,action): propertyInterface=>{
        return{
            ...state,
            GetPropertyByIdSuccess: action.property,
            selectedProperty:action.property,
            propertyError:''
        }
    }),
    on(propertyActions.GetPropertyByIdFailure,(state,action): propertyInterface=>{
        return{
            ...state,
            GetPropertyByIdFailure:action.message
        }
    })
)