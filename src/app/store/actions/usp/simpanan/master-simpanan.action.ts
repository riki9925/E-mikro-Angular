import {Action} from '@ngrx/store';
import {MasterSimpanan} from './../../../../models';

export enum MasterSimpananActionType {
  MASTER_SIMPANAN_LOAD = '[MASTER_SIMPANAN] LOAD',
  MASTER_SIMPANAN_LOAD_SUCCESS = '[MASTER_SIMPANAN] LOAD SUCCESS',
  MASTER_SIMPANAN_LOAD_FAIL = '[MASTER_SIMPANAN] LOAD FAIL',
  MASTER_SIMPANAN_ADD = '[MASTER_SIMPANAN] ADD',
  MASTER_SIMPANAN_ADD_SUCCESS = '[MASTER_SIMPANAN] ADD SUCCESS',
  MASTER_SIMPANAN_ADD_FAIL = '[MASTER_SIMPANAN] ADD FAIL',
  MASTER_SIMPANAN_UPDATE = '[MASTER_SIMPANAN] UPDATE',
  MASTER_SIMPANAN_UPDATE_SUCCESS = '[MASTER_SIMPANAN] UPDATE SUCCESS',
  MASTER_SIMPANAN_UPDATE_FAIL = '[MASTER_SIMPANAN] UPDATE FAIL',
  MASTER_SIMPANAN_DELETE = '[MASTER_SIMPANAN] DELETE',
  MASTER_SIMPANAN_DELETE_SUCCESS = '[MASTER_SIMPANAN] DELETE SUCCESS',
  MASTER_SIMPANAN_DELETE_FAIL = '[MASTER_SIMPANAN] DELETE FAIL',
  MASTER_SIMPANAN_SELECT = '[MASTER_SIMPANAN] SELECT'
}

export class MasterSimpananLoad implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_LOAD;

  constructor() {
  }
}

export class MasterSimpananLoadSuccess implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_LOAD_SUCCESS;

  constructor(public payload: MasterSimpanan[]) {
  }
}

export class MasterSimpananLoadFail implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_LOAD_FAIL;

  constructor(public payload: any) {
  }
}

export class MasterSimpananAdd implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_ADD;

  constructor(public payload: MasterSimpanan) {
  }
}

export class MasterSimpananAddSuccess implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_ADD_SUCCESS;

  constructor(public payload: MasterSimpanan) {
  }
}

export class MasterSimpananAddFail implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_ADD_FAIL;

  constructor(public payload: any) {
  }
}

export class MasterSimpananUpdate implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_UPDATE;

  constructor(public payload: MasterSimpanan) {
  }
}

export class MasterSimpananUpdateSuccess implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_UPDATE_SUCCESS;

  constructor(public payload: MasterSimpanan) {
  }
}

export class MasterSimpananUpdateFail implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_UPDATE_FAIL;

  constructor(public payload: any) {
  }
}


export class MasterSimpananDelete implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_DELETE;

  constructor(public payload: MasterSimpanan) {
  }
}

export class MasterSimpananDeleteSuccess implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_DELETE_SUCCESS;

  constructor(public payload: MasterSimpanan) {
  }
}

export class MasterSimpananDeleteFail implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_DELETE_FAIL;

  constructor(public payload: any) {
  }
}

export class MasterSimpananSelect implements Action {
  readonly type = MasterSimpananActionType.MASTER_SIMPANAN_SELECT;

  constructor(public payload: MasterSimpanan) {
  }
}


export type MasterSimpananActions =
  | MasterSimpananDelete
  | MasterSimpananDeleteFail
  | MasterSimpananDeleteSuccess
  | MasterSimpananAdd
  | MasterSimpananAddFail
  | MasterSimpananAddSuccess
  | MasterSimpananUpdate
  | MasterSimpananUpdateFail
  | MasterSimpananUpdateSuccess
  | MasterSimpananSelect
  | MasterSimpananLoad
  | MasterSimpananLoadSuccess
  | MasterSimpananLoadFail;
