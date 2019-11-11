import {put,takeLatest,all,call} from 'redux-saga/effects';

function* getFetchSearch(action){
    try{
        const response = yield call(() => fetch(`https://dev.yurtah.com/api/v1/listings/search?q=${action.payload}`));
        const responseBody = yield response.json();

        yield put({type: 'FETCH_SEARCH_RECEIVED', payload: responseBody});

        yield all([
            put({type: 'FETCH_NEIGHBORHOOD_ITEMS'}),
            put({type: 'FETCH_LOCATION_ITEMS'})
        ])

    }catch(error){
        yield put({type: 'FETCH_ERROR_MESSAGE', payload: error});
        throw Error(error);
    }
}

function* responseFetchSearch(){
    yield takeLatest('FETCH_SEARCH_REQUEST', getFetchSearch)
}

export default function* rootSaga(){
    yield all([
        responseFetchSearch(),
    ])
}