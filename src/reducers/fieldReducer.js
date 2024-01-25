import { ADD_FIELD } from '../constants/actionTypes';

const initialState = {
    fields: []
};

const fieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIELD:
            return {
                ...state,
                fields: [...state.fields, action.payload]
            };
        default:
            return state;
    }
};

export default fieldReducer;
