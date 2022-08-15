import {LOGIN} from '../constants';

export function LoginSuccess(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}
