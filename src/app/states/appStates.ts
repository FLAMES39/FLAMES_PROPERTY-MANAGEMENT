import { counterInterface } from "./Reducers/counter";
import { paragraphinterface } from "./Reducers/paragraphReducer";
import { propertyInterface } from "./Reducers/propertyReducer";

export interface AppState{
    counter:counterInterface
    paragraph:paragraphinterface
    property:propertyInterface
}