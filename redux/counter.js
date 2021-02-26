const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_VALUE = "SET_VALUE";

const initialState = {
    counter: 0,
};

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

export const setValue = (nr) => ({
    type: SET_VALUE,
    payload: nr,
});

const counterReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case INCREMENT:
            return {
                ...state, counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state, counter: state.counter - 1
            };
        case SET_VALUE:
            return {
                ...state, counter: payload
            };
        default:
            return state;
    }
};

export default counterReducer;