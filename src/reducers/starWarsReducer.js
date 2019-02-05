import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  error: '',
  fetching: false
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING: 
      return { ...state, characters: [], error: '', fetching: true };
    case SUCCESS:
      return { ...state, characters: action.payload, error: '', fetching: false };
    case FAILURE: 
      return { ...state, characters: [], error: action.payload, fetching: false };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
