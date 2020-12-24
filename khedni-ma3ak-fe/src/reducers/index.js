import {combineReducers} from 'redux';
import allPlacesReducer from './allPlacesReducer';
import searchReducer from './searchReducer';
import showReducer from './showReducer';
import loadingReducer from './loadingReducer';
import bookTourReducer from './bookTourReducer';


const rootReducer = combineReducers({
    searchReducer,
    showReducer,
    allPlacesReducer,
    loadingReducer,
    bookTourReducer
});

export default rootReducer;