import {Action} from '@ngrx/store';
import {Jenis} from './../../../../models';

export enum JenisActionType {
  LOAD_JENIS_ACCOUNT = '[JENIS_ACCOUNT] LOAD JENIS',
  LOAD_JENIS_ACCOUNT_SUCCESS = '[JENIS_ACCOUNT] LOAD JENIS SUCCESS',
  LOAD_JENIS_ACCOUNT_FAIL = '[JENIS_ACCOUNT] LOAD JENIS FAIL',
  SELECT_JENIS_ACCOUNT = '[JENIS_ACCOUNT] SELECT JENIS ACCOUNT'
}

export class LoadJenisAccount implements Action {
  readonly type = JenisActionType.LOAD_JENIS_ACCOUNT;

  constructor() {
  }
}

export class LoadJenisAccountFail implements Action {
  readonly type = JenisActionType.LOAD_JENIS_ACCOUNT_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadJenisAccountSuccess implements Action {
  readonly type = JenisActionType.LOAD_JENIS_ACCOUNT_SUCCESS;

  constructor(public payload: Jenis[]) {
  }
}

export class SelectJenisAccount implements Action {
  readonly type = JenisActionType.SELECT_JENIS_ACCOUNT;

  constructor(public payload: Jenis) {
  }
}

export type JenisActions =
  | LoadJenisAccount
  | LoadJenisAccountFail
  | LoadJenisAccountSuccess
  | SelectJenisAccount;
