import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  loggedIn: false,
  error: ""
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    // DATA STUFF
    case FETCH_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    // LOGIN STUFF
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        error: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        error: false
      };
    default:
      return state;
  }
}

export default reducer;
