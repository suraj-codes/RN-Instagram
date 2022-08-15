import {createStore, combineReducers} from 'redux';
import AuthReducer from './reducers/AuthReducer';
const rootReducer = combineReducers({auth: AuthReducer});
const store = () => {
  return createStore(rootReducer);
};
export default store;
