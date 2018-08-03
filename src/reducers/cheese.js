
import { FETCH_CHEESES_SUCCESS, FETCH_CHEESES_REQUEST, FETCH_CHEESES_ERROR } from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
}
//had const cheeseR...
//try with switch statement
export default function cheeseReducer(state = initialState, action){
    if (action.type === FETCH_CHEESES_REQUEST){
        return Object.assign({}, state, {
            //had action.loading
            loading: true
        })
    }
//null necessary?
    if (action.type === FETCH_CHEESES_SUCCESS) {
        return Object.assign({}, state, {
        loading: false,
        error: null,
        cheeses: action.cheeses
        })
    }

    if (action.type === FETCH_CHEESES_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    //don't forget to return the state
    return state;
}