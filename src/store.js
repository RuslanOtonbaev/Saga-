import {createStore, applyMiddleware} from "redux";
import reducer from './reducers/index'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

//sagaMiddleware.run();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

export default store;