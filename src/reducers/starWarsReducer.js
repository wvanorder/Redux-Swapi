import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
const initialState = {
  characters: [],
  isLoading: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_BEGIN:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case FETCH_SUCCESS:
      return{
        ...state,
        isLoading: false,
        characters: action.payload
      };
    case FETCH_FAILURE:
      return{
        ...state,
        isLoading: false,
        error: 'You done messed up A-A-RON'
      };
    default:
      return state;
  }
};
