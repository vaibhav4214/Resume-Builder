import DummyDataReducer from './DummyDataReducer';
import DisableReducer from './Disable/DisableReducer';
import {combineReducers} from "redux"


const rootReducer = combineReducers({
    DummyDataReducer,
    DisableReducer

})

export default rootReducer;