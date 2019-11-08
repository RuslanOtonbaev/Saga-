const initialStore = {
    result: [],
    loading: false,
    bannerToggler: 'buy',
    neighborhood: [],
    location: [],
    error: []
};

const reducers = (state = initialStore, action) => {
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
                neighborhood: action.payload
            }
        case 'FETCH_LOCATION_ITEMS':
            return{
                ...state,
                location: action.payload
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
        default:
            return state;
    }
};

export default reducers;