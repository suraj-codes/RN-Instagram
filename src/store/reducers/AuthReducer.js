import {LOGIN} from '../constants';
const initialState = {
  isLoggedIn: false,
  token: '',
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
