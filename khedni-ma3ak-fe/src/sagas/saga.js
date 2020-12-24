import {put, takeLatest, call} from 'redux-saga/effects';
import { errorAction } from '../actions/errorAction';
import { loadingAction } from '../actions/loadingAction';
import { receiveAll } from '../actions/placesAction';
import { receiveSearch } from '../actions/searchAction';
import {fetchDataAll, fetchDataNameTypeArea, fetchDataNameType, fetchDataNameArea, fetchDataTypeArea,
    fetchDataName, fetchDataType, fetchDataArea} from '../api';
import { REQUEST_ALL_PLACES, REQUEST_SEARCHED_PLACES } from '../types';

// All places
function* allAsync(action){
    try {
        yield put(loadingAction(true));
        const allPlaces = yield call (fetchDataAll);
        yield put(receiveAll(allPlaces));
        yield put(loadingAction(false));
    }
    catch (e){
        console.log("Caught the error :" + e)
        yield put(loadingAction(false));
        yield put(errorAction("Error fetching places !"))
    }
}

export function* watchAll(){
    yield takeLatest(REQUEST_ALL_PLACES, allAsync);
}

//Search places
function* searchAsync(action){
    try {
        let searched = 0;
        yield put(loadingAction(true));
        if (action.data.name === "" && action.data.type === ""){
        searched = yield call (fetchDataArea,action.data);
        }
        else if (action.data.name === "" || action.data.area === ""){
            searched = yield call (fetchDataType,action.data);
        }
        else if (action.data.type === "" || action.data.area === ""){
            searched = yield call (fetchDataName,action.data);
        }
        else if (action.data.name === ""){
        searched = yield call (fetchDataTypeArea,action.data);
        }
        else if (action.data.type === ""){
            searched = yield call (fetchDataNameArea,action.data);
        }
        else if (action.data.area === ""){
            searched = yield call (fetchDataNameType,action.data);
        }
        else{
        searched = yield call (fetchDataNameTypeArea ,action.data);
        }

        yield put(receiveSearch(searched));
        yield put(loadingAction(false));

    }catch (e){
        console.log("Caught the error :"+e)
        yield put(loadingAction(false));
        yield put(errorAction("Error fetching restaurants !"))
    }
}

export function* watchSearch(){
    yield takeLatest(REQUEST_SEARCHED_PLACES, searchAsync);
}