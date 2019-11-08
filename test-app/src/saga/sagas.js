import {put,takeLatest,all} from 'redux-saga/effects';

function* getFetchSearch(){

    const json = yield fetch('https://dev.yurtah.com/api/v1/listings/search?q=br').then(response => response.json(),);

    yield put({type: 'FETCH_SEARCH_RECEIVED', payload: json})

}

function* responseFetchSearch() {
    yield takeLatest('FETCH_SEARCH_REQUEST', getFetchSearch)
}

export default function* rootSaga(){
    yield all([
        responseFetchSearch()
    ])
}