import {Action} from '@ngrx/store';
import {Instansi} from './../../../models';

export enum InstansiActionType {
  INSTANSI_LOAD = '[INSTANSI] LOAD',
  INSTANSI_LOAD_SUCCESS = '[INSTANSI] LOAD SUCCESS',
  INSTANSI_LOAD_FAIL = '[INSTANSI] LOAD FAIL',
  INSTANSI_ADD = '[INSTANSI] ADD',
  INSTANSI_ADD_SUCCESS = '[INSTANSI] ADD SUCCESS',
  INSTANSI_ADD_FAIL = '[INSTANSI] ADD FAIL',
  INSTANSI_UPDATE = '[INSTANSI] UPDATE',
  INSTANSI_UPDATE_SUCCESS = '[INSTANSI] UPDATE SUCCESS',
  INSTANSI_UPDATE_FAIL = '[INSTANSI] UPDATE FAIL',
  INSTANSI_DELETE = '[INSTANSI] DELETE',
  INSTANSI_DELETE_SUCCESS = '[INSTANSI] DELETE SUCCESS',
  INSTANSI_DELETE_FAIL = '[INSTANSI] DELETE FAIL',
  INSTANSI_SELECT = '[INSTANSI] SELECT',
  INSTANSI_ACTION_VIEW = '[INSTANSI] VIEW',
  INSTANSI_ACTION_UPDATE = '[INSTANSI] UPDATE',
  INSTANSI_ACTION_CREATE = '[INSTANSI] CREATE',
}

export class InstansiActionView implements Action {
  readonly type = InstansiActionType.INSTANSI_ACTION_VIEW;

  constructor() {
  }
}

export class InstansiActionCreate implements Action {
  readonly type = InstansiActionType.INSTANSI_ACTION_CREATE;

  constructor() {
  }
}

export class InstansiActionUpdate implements Action {
  readonly type = InstansiActionType.INSTANSI_ACTION_UPDATE;

  constructor(public payload: Instansi) {
  }
}


export class InstansiLoad implements Action {
  readonly type = InstansiActionType.INSTANSI_LOAD;

  constructor() {
  }
}

export class InstansiLoadSuccess implements Action {
  readonly type = InstansiActionType.INSTANSI_LOAD_SUCCESS;

  constructor(public payload: Instansi[]) {
  }
}

export class InstansiLoadFail implements Action {
  readonly type = InstansiActionType.INSTANSI_LOAD_FAIL;

  constructor(public payload: any) {
  }
}

export class InstansiAdd implements Action {
  readonly type = InstansiActionType.INSTANSI_ADD;

  constructor(public payload: Instansi) {
  }
}

export class InstansiAddSuccess implements Action {
  readonly type = InstansiActionType.INSTANSI_ADD_SUCCESS;

  constructor(public payload: Instansi) {
  }
}

export class InstansiAddFail implements Action {
  readonly type = InstansiActionType.INSTANSI_ADD_FAIL;

  constructor(public payload: any) {
  }
}

export class InstansiUpdate implements Action {
  readonly type = InstansiActionType.INSTANSI_UPDATE;

  constructor(public payload: Instansi) {
  }
}

export class InstansiUpdateSuccess implements Action {
  readonly type = InstansiActionType.INSTANSI_UPDATE_SUCCESS;

  constructor(public payload: Instansi) {
  }
}

export class InstansiUpdateFail implements Action {
  readonly type = InstansiActionType.INSTANSI_UPDATE_FAIL;

  constructor(public payload: any) {
  }
}


export class InstansiDelete implements Action {
  readonly type = InstansiActionType.INSTANSI_DELETE;

  constructor(public payload: Instansi) {
  }
}

export class InstansiDeleteSuccess implements Action {
  readonly type = InstansiActionType.INSTANSI_DELETE_SUCCESS;

  constructor(public payload: Instansi) {
  }
}

export class InstansiDeleteFail implements Action {
  readonly type = InstansiActionType.INSTANSI_DELETE_FAIL;

  constructor(public payload: any) {
  }
}

export class InstansiSelect implements Action {
  readonly type = InstansiActionType.INSTANSI_SELECT;

  constructor(public payload: Instansi) {
  }
}


export type InstansiActions =
  | InstansiDelete
  | InstansiDeleteFail
  | InstansiDeleteSuccess
  | InstansiAdd
  | InstansiAddFail
  | InstansiAddSuccess
  | InstansiUpdate
  | InstansiUpdateFail
  | InstansiUpdateSuccess
  | InstansiSelect
  | InstansiLoad
  | InstansiLoadSuccess
  | InstansiLoadFail
  | InstansiActionView
  | InstansiActionCreate
  | InstansiActionUpdate;
