import {combineReducers} from 'redux';
import allPlacesReducer from './allPlacesReducer';
import searchReducer from './searchReducer';
import showReducer from './showReducer';
import loadingReducer from './loadingReducer';


const rootReducer = combineReducers({
    searchReducer,
    showReducer,
    allPlacesReducer,
    loadingReducer
});

export default rootReducer;