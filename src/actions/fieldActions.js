import { ADD_FIELD } from '../constants/actionTypes';

export const addField = (field) => ({
    type: ADD_FIELD,
    payload: field
});
