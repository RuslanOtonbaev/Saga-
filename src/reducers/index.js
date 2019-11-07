const initialState = {
    age: 1
};

const reducers = (state = initialState,action) => {
    switch (action.type){
        case 'UP_AGE':
            return{
                age: state.age + 1
            };
        default:
            return state;
    }
};

export default reducers;