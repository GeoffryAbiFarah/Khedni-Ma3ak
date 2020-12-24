import {combineReducers} from 'redux';
import allPlacesReducer from './allPlacesReducer';
import searchReducer from './searchReducer';
import showReducer from './showReducer';


const rootReducer = combineReducers({
    searchReducer,
    showReducer,
    allPlacesReducer
});

export default rootReducer;