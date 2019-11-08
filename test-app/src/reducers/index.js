const initialStore = {
    result: [],
    loading: false
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
                loading: false
            };
        default:
            return state;
    }
};

export default reducers;