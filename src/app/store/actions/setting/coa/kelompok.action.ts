import {Action} from '@ngrx/store';
import {Kelompok} from './../../../../models';

export enum KelompokActionType {
  LOAD_KELOMPOK_ACCOUNT = '[KELOMPOK_ACCOUNT] LOAD KELOMPOK',
  LOAD_KELOMPOK_ACCOUNT_SUCCESS = '[KELOMPOK_ACCOUNT] LOAD KELOMPOK SUCCESS',
  LOAD_KELOMPOK_ACCOUNT_FAIL = '[KELOMPOK_ACCOUNT] LOAD KELOMPOK FAIL',
  SELECT_KELOMPOK_ACCOUNT = '[KELOMPOK_ACCOUNT] SELECT Kelompok'
}

export class LoadKelompokAccount implements Action {
  readonly type = KelompokActionType.LOAD_KELOMPOK_ACCOUNT;

  constructor() {
  }
}

export class LoadKelompokAccountFail implements Action {
  readonly type = KelompokActionType.LOAD_KELOMPOK_ACCOUNT_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadKelompokAccountSuccess implements Action {
  readonly type = KelompokActionType.LOAD_KELOMPOK_ACCOUNT_SUCCESS;

  constructor(public payload: Kelompok[]) {
  }
}

export class SelectKelompokAccount implements Action {
  readonly type = KelompokActionType.SELECT_KELOMPOK_ACCOUNT;

  constructor(public payload: Kelompok) {
  }
}

export type KelompokActions =
  | LoadKelompokAccount
  | LoadKelompokAccountFail
  | SelectKelompokAccount
  | LoadKelompokAccountSuccess;
