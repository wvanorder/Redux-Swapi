// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCH_BEGIN = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE= 'FETCH_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getThing = () => dispatch => {
    dispatch({ type: FETCH_BEGIN });
    axios
    .get(`https://swapi.co/api/people`)
    .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data.results});
    })
    .catch(err => dispatch({ type: FETCH_FAILURE}));
};