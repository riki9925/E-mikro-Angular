import {Action} from '@ngrx/store';

export enum LoginActionType {
  PERFORM_LOGIN = '[PERFORM LOGIN] LOGIN',
  PERFORM_LOGIN_SUCCESS = '[PERFORM LOGIN] LOGIN SUCCESS',
  PERFORM_LOGIN_FAIL = '[PERFORM LOGIN] LOGIN FAIL',
  PERFORM_LOGOUT = '[PERFORM LOGOUT] LOGOUT',
  PERFORM_LOGOUT_SUCCEES = '[PERFORM LOGOUT] LOGOUT SUCCESS',
  PERFORM_LOGOUT_FAIL = '[PERFORM LOGOUT] LOGOUT FAIL'
}

export class PerformLogin implements Action {
  readonly type = LoginActionType.PERFORM_LOGIN;

  constructor(public payload: any) {
  }
}

export class PerformLoginSuccess implements Action {
  readonly type = LoginActionType.PERFORM_LOGIN_SUCCESS;

  constructor(public payload: any) {
  }
}

export class PerformLoginFail implements Action {
  readonly type = LoginActionType.PERFORM_LOGIN_FAIL;

  constructor(public payload: any) {
  }
}

export class PerformLogout implements Action {
  readonly type = LoginActionType.PERFORM_LOGOUT;

  constructor() {
  }
}

export class PerformLogoutSuccess implements Action {
  readonly type = LoginActionType.PERFORM_LOGOUT_SUCCEES;

  constructor(public payload: any) {
  }
}

export class PerformLogoutFail implements Action {
  readonly type = LoginActionType.PERFORM_LOGOUT_FAIL;

  constructor(public payload: any) {
  }
}

export type LoginActions =
  | PerformLogin
  | PerformLoginFail
  | PerformLoginSuccess
  | PerformLogoutSuccess
  | PerformLogoutFail
  | PerformLogout;
