import {Action} from '@ngrx/store';
import {Account} from './../../../../models';

export enum AccountActionType {
  ADD_ACCOUNT = '[ACCOUNT] ADD ACCOUNT',
  ADD_ACCOUNT_SUCCESS = '[ACCOUNT] ADD ACCOUNT SUCCESS',
  ADD_ACCOUNT_FAIL = '[ACCOUNT] ADD ACCOUNT FAIL',
  LOAD_ACCOUNT = '[ACCOUNT] LOAD ACCOUNT',
  LOAD_ACCOUNT_SUCCESS = '[ACCOUNT] LOAD ACCOUNT SUCCESS',
  LOAD_ACCOUNT_FAIL = '[ACCOUNT] LOAD ACCOUNT FAIL',
  UPDATE_ACCOUNT = '[ACCOUNT] UPDATE ACCOUNT',
  UPDATE_ACCOUNT_SUCCESS = '[ACCOUNT] UPDATE ACCOUNT SUCCESS',
  UPDATE_ACCOUNT_FAIL = '[ACCOUNT] UPDATE ACCOUNT FAIL',
  DELETE_ACCOUNT = '[ACCOUNT] DELETE ACCOUNT',
  DELETE_ACCOUNT_SUCCESS = '[ACCOUNT] DELETE ACCOUNT SUCCESS',
  DELETE_ACCOUNT_FAIL = '[ACCOUNT] DELETE ACCOUNT FAIL',
  SELECT_ACCOUNT = '[ACCOUNT] SELECT ACCOUNT'
}

export class LoadAccount implements Action {
  readonly type = AccountActionType.LOAD_ACCOUNT;

  constructor() {
  }
}

export class LoadAccountFail implements Action {
  readonly type = AccountActionType.LOAD_ACCOUNT_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadAccountSuccess implements Action {
  readonly type = AccountActionType.LOAD_ACCOUNT_SUCCESS;

  constructor(public payload: Account[]) {
  }
}

export class AddAccount implements Action {
  readonly type = AccountActionType.ADD_ACCOUNT;

  constructor(public payload: Account) {
  }
}

export class SelectAccount implements Action {
  readonly type = AccountActionType.SELECT_ACCOUNT;

  constructor(public payload: Account) {
  }
}

export class AddAccountFail implements Action {
  readonly type = AccountActionType.ADD_ACCOUNT_FAIL;

  constructor(public payload: any) {
  }
}

export class AddAccountSuccess implements Action {
  readonly type = AccountActionType.ADD_ACCOUNT_SUCCESS;

  constructor(public payload: Account) {
  }
}

export class UpdateAccount implements Action {
  readonly type = AccountActionType.UPDATE_ACCOUNT;

  constructor(public payload: Account) {
  }
}

export class UpdateAccountFail implements Action {
  readonly type = AccountActionType.UPDATE_ACCOUNT_FAIL;

  constructor(public payload: any) {
  }
}

export class UpdateAccountSuccess implements Action {
  readonly type = AccountActionType.UPDATE_ACCOUNT_SUCCESS;

  constructor(public payload: Account) {
  }
}

export class DeleteAccount implements Action {
  readonly type = AccountActionType.DELETE_ACCOUNT;

  constructor(public payload: Account) {
  }
}

export class DeleteAccountFail implements Action {
  readonly type = AccountActionType.DELETE_ACCOUNT_FAIL;

  constructor(public payload: any) {
  }
}

export class DeleteAccountSuccess implements Action {
  readonly type = AccountActionType.DELETE_ACCOUNT_SUCCESS;

  constructor(public payload: Account) {
  }
}

export type AccountActions =
  | LoadAccount
  | LoadAccountFail
  | LoadAccountSuccess
  | SelectAccount
  | AddAccount
  | AddAccountFail
  | AddAccountSuccess
  | DeleteAccount
  | DeleteAccountSuccess
  | DeleteAccountFail
  | UpdateAccount
  | UpdateAccountSuccess
  | UpdateAccountFail;
