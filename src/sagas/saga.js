export function* watcher(){
    yield takeEvery('AGE_UP',ageUpsync)
}