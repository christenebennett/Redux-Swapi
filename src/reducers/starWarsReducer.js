import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  error: '',
  loading: false
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING: 
      return { ...state, characters: [], error: '', loading: true };
    case SUCCESS:
      return { ...state, characters: action.payload, error: '', loading: false };
    case FAILURE: 
      return { ...state, characters: [], error: action.payload, loading: false };
    default:
      return state;
  }
};
