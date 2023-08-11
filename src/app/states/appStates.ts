import { counterInterface } from "./Reducers/counter";
import { LandlordInterface } from "./Reducers/landLorReducers";
import { paragraphinterface } from "./Reducers/paragraphReducer";
import { propertyInterface } from "./Reducers/propertyReducer";
import { userInteface } from "./Reducers/userLReducer";

export interface AppState{
    counter:counterInterface
    paragraph:paragraphinterface
    property:propertyInterface
    user:userInteface
    Landlord:LandlordInterface
}