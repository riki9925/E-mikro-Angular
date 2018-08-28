import {LoginActions, LoginActionType} from './../../actions';

export interface LoginState {
  session: any;
  isLoading: boolean;
  isLogedIn: boolean;
  errorMessage: string;
}


export const initialState: LoginState = {
  session: {},
  isLoading: false,
  isLogedIn: false,
  errorMessage: null
};

export function loginReducer(state: LoginState = initialState,
                             action: LoginActions): LoginState {
  switch (action.type) {
    case LoginActionType.PERFORM_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LoginActionType.PERFORM_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.error.msg
      };
    case LoginActionType.PERFORM_LOGIN_SUCCESS:
      return {
        ...state,
        session: action.payload,
        isLoading: false,
        isLogedIn: true,
        errorMessage: null
      };
    case LoginActionType.PERFORM_LOGOUT:
      return {
        ...state,
        session: {},
        isLoading: false,
        isLogedIn: false
      };
    case LoginActionType.PERFORM_LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message
      };
    case LoginActionType.PERFORM_LOGOUT_SUCCEES:
      return {
        ...state,
        isLoading: false,
        isLogedIn: false,
        errorMessage: null
      };
    default:
      return state;
  }
}

export const getIsLogedIn = (state: LoginState) => state.isLoading;
export const getIsLoading = (state: LoginState) => state.isLoading;
export const getSessionLogin = (state: LoginState) => state.session;
export const getErrorMessage = (state: LoginState) => state.errorMessage;
