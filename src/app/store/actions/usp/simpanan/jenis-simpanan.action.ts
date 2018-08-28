import {Action} from '@ngrx/store';
import {JenisSimpanan} from './../../../../models';

export enum JenisSimpananActionType {
  JENIS_SIMPANAN_LOAD           = '[JENIS_SIMPANAN] LOAD',
  JENIS_SIMPANAN_LOAD_SUCCESS   = '[JENIS_SIMPANAN] LOAD SUCCESS',
  JENIS_SIMPANAN_LOAD_FAIL      = '[JENIS_SIMPANAN] LOAD FAIL',
  JENIS_SIMPANAN_ADD            = '[JENIS_SIMPANAN] ADD',
  JENIS_SIMPANAN_ADD_SUCCESS    = '[JENIS_SIMPANAN] ADD SUCCESS',
  JENIS_SIMPANAN_ADD_FAIL       = '[JENIS_SIMPANAN] ADD FAIL',
  JENIS_SIMPANAN_UPDATE         = '[JENIS_SIMPANAN] UPDATE',
  JENIS_SIMPANAN_UPDATE_SUCCESS = '[JENIS_SIMPANAN] UPDATE SUCCESS',
  JENIS_SIMPANAN_UPDATE_FAIL    = '[JENIS_SIMPANAN] UPDATE FAIL',
  JENIS_SIMPANAN_DELETE         = '[JENIS_SIMPANAN] DELETE',
  JENIS_SIMPANAN_DELETE_SUCCESS = '[JENIS_SIMPANAN] DELETE SUCCESS',
  JENIS_SIMPANAN_DELETE_FAIL    = '[JENIS_SIMPANAN] DELETE FAIL',
  JENIS_SIMPANAN_SELECT         = '[JENIS_SIMPANAN] SELECT',
}

export class JenisSimpananLoad implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_LOAD;

  constructor() {
  }
}

export class JenisSimpananLoadSuccess implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_LOAD_SUCCESS;

  constructor(public payload: JenisSimpanan[]) {
  }
}

export class JenisSimpananLoadFail implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_LOAD_FAIL;

  constructor(public payload: any) {
  }
}

export class JenisSimpananAdd implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_ADD;

  constructor(public payload: JenisSimpanan) {
  }
}

export class JenisSimpananAddSuccess implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_ADD_SUCCESS;

  constructor(public payload: JenisSimpanan) {
  }
}

export class JenisSimpananAddFail implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_ADD_FAIL;

  constructor(public payload: any) {
  }
}

export class JenisSimpananUpdate implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_UPDATE;

  constructor(public payload: JenisSimpanan) {
  }
}

export class JenisSimpananUpdateSuccess implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_UPDATE_SUCCESS;

  constructor(public payload: JenisSimpanan) {
  }
}

export class JenisSimpananUpdateFail implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_UPDATE_FAIL;

  constructor(public payload: any) {
  }
}


export class JenisSimpananDelete implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_DELETE;

  constructor(public payload: JenisSimpanan) {
  }
}

export class JenisSimpananDeleteSuccess implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_DELETE_SUCCESS;

  constructor(public payload: JenisSimpanan) {
  }
}

export class JenisSimpananDeleteFail implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_DELETE_FAIL;

  constructor(public payload: any) {
  }
}

export class JenisSimpananSelect implements Action {
  readonly type = JenisSimpananActionType.JENIS_SIMPANAN_SELECT;

  constructor(public payload: JenisSimpanan) {
  }
}


export type JenisSimpananActions =
  | JenisSimpananDelete
  | JenisSimpananDeleteFail
  | JenisSimpananDeleteSuccess
  | JenisSimpananAdd
  | JenisSimpananAddFail
  | JenisSimpananAddSuccess
  | JenisSimpananUpdate
  | JenisSimpananUpdateFail
  | JenisSimpananUpdateSuccess
  | JenisSimpananSelect
  | JenisSimpananLoad
  | JenisSimpananLoadSuccess
  | JenisSimpananLoadFail;
