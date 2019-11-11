//import {combineReducers} from 'redux';
import {mapper} from '../helpers/mapper';

const initialStore = {
    result: null,
    loading: false,
    bannerToggler: 'buy',
    contentToggler: 'agents',
    neighborhood: [],
    location: [],
    error: [],
    userSelected: '',
};

const fetchToServer = (state = initialStore, action) => {

    switch(action.type){
        case 'FETCH_SEARCH_REQUEST':
            return{
                ...state,
                loading: true,
            };
        case 'FETCH_SEARCH_RECEIVED':
            return{
                ...state,
                result: action.payload,
                error: [],
                loading: false
            };
        case 'FETCH_NEIGHBORHOOD_ITEMS':
            return{
                ...state,
                neighborhood: mapper(state.result,'neighborhood')
            }
        case 'FETCH_LOCATION_ITEMS':
            return{
                ...state,
                location: mapper(state.result,'location')
            }
        case 'FETCH_ERROR_MESSAGE':
            return{
                ...state,
                error: action.payload
            }
        case 'TOGGLE_BANNER_PANEL':
            return{
                ...state,
                bannerToggler: action.payload
            }
        case 'TOGGLE_CONTENT_PANEL':
            return{
                ...state,
                contentToggler: action.payload
            }
        case 'CLEAR_DATA_SERVER':
            return{
                ...state,
                result: null,
                neighborhood: [],
                location: []
            }
        case 'USER_SEARCH_VALUE':
            return{
                ...state,
                userSelected: action.payload
            }            
        default:
            return state;
    }
};


// const rootReducer = combineReducers({
//     fetchToServer
// })

export default fetchToServer;