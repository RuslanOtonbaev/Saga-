import {mapper} from '../helpers/mapper';
import {StoreTypes} from '../types/types';
import {AllActionTypes} from '../types/actions';
import {FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_RECEIVED,
    FETCH_NEIGHBORHOOD_ITEMS,
    FETCH_LOCATION_ITEMS,
    FETCH_ERROR_MESSAGE,
    TOGGLE_BANNER_PANEL,
    TOGGLE_CONTENT_PANEL,
    CLEAR_DATA_SERVER,
    USER_SEARCH_VALUE
} from '../constants/Actions';

const initialStore:StoreTypes = {
    result: null,
    loading: false,
    bannerToggler: 'buy',
    contentToggler: 'agents',
    neighborhood: [],
    location: [],
    error: [],
    userSelected: '',
};

const fetchToServer = (
    state:StoreTypes = initialStore,
    action: AllActionTypes
    ) => {
    switch(action.type){
        case FETCH_SEARCH_REQUEST:
            return{
                ...state,
                loading: true,
            };
        case FETCH_SEARCH_RECEIVED:
            return{
                ...state,
                result: action.payload,
                error: [],
                loading: false
            };
        case FETCH_NEIGHBORHOOD_ITEMS:
            return{
                ...state,
                neighborhood: mapper(state.result,'neighborhood')
            }
        case FETCH_LOCATION_ITEMS:
            return{
                ...state,
                location: mapper(state.result,'location')
            }
        case FETCH_ERROR_MESSAGE:
            return{
                ...state,
                error: action.payload
            }
        case TOGGLE_BANNER_PANEL:
            return{
                ...state,
                bannerToggler: action.payload
            }
        case TOGGLE_CONTENT_PANEL:
            return{
                ...state,
                contentToggler: action.payload
            }
        case CLEAR_DATA_SERVER:
            return{
                ...state,
                result: null,
                neighborhood: [],
                location: []
            }
        case USER_SEARCH_VALUE:
            return{
                ...state,
                userSelected: action.payload
            }            
        default:
            return state;
    }
};

export default fetchToServer;