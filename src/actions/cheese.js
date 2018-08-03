import { API_BASE_URL } from '../config';
//Compare to Richard's setup
export const FETCH_CHEESES_REQUEST ='FETCH_CHEESES_REQUEST';
export function fetchCheesesRequest(){
    return { 
        type: FETCH_CHEESES_REQUEST
    }
}

export const FETCH_CHEESES_SUCCESS = "FETCH_CHEESES_SUCCESS";
export function fetchCheeseSuccess(cheeses) {
    return {type: FETCH_CHEESES_SUCCESS,
    cheeses}
}

export const FETCH_CHEESES_ERROR = "FETCH_CHEESES_ERROR";
export function fetchCheesesError(error) {
   return { type: FETCH_CHEESES_ERROR,
    error}
}

export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());
    return fetch(`${API_BASE_URL}/api/cheeses`).then(res => {
        if (!res.ok) {
            return new Error(res.statusText);
            //Promise.reject('Something went wrong');
        }
        return res.json();
    }).then((cheeses) => 
        dispatch(fetchCheeseSuccess(cheeses))
    ).catch(err => 
        dispatch(fetchCheesesError(err))
    );
}
 //data and err//when using fetch need thunk -> "will be available in a few seconds"
 //if dealing with static data, all actions use return plain js object
 //if using synch we need redux thunk in our reducer (store) 