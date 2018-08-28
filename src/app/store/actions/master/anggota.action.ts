import {Action} from '@ngrx/store';
import {Anggota} from './../../../models';

export enum AnggotaActionType {
  ANGGOTA_LOAD = '[ANGGOTA] LOAD',
  ANGGOTA_LOAD_SUCCESS = '[ANGGOTA] LOAD SUCCESS',
  ANGGOTA_LOAD_FAIL = '[ANGGOTA] LOAD FAIL',
  ANGGOTA_ADD = '[ANGGOTA] ADD',
  ANGGOTA_ADD_SUCCESS = '[ANGGOTA] ADD SUCCESS',
  ANGGOTA_ADD_FAIL = '[ANGGOTA] ADD FAIL',
  ANGGOTA_UPDATE = '[ANGGOTA] UPDATE',
  ANGGOTA_UPDATE_SUCCESS = '[ANGGOTA] UPDATE SUCCESS',
  ANGGOTA_UPDATE_FAIL = '[ANGGOTA] UPDATE FAIL',
  ANGGOTA_DELETE = '[ANGGOTA] DELETE',
  ANGGOTA_DELETE_SUCCESS = '[ANGGOTA] DELETE SUCCESS',
  ANGGOTA_DELETE_FAIL = '[ANGGOTA] DELETE FAIL',
  ANGGOTA_SELECT = '[ANGGOTA] SELECT',

}

export class AnggotaLoad implements Action {
  readonly type = AnggotaActionType.ANGGOTA_LOAD;

  constructor() {
  }
}

export class AnggotaLoadSuccess implements Action {
  readonly type = AnggotaActionType.ANGGOTA_LOAD_SUCCESS;

  constructor(public payload: Anggota[]) {
  }
}

export class AnggotaLoadFail implements Action {
  readonly type = AnggotaActionType.ANGGOTA_LOAD_FAIL;

  constructor(public payload: any) {
  }
}

export class AnggotaAdd implements Action {
  readonly type = AnggotaActionType.ANGGOTA_ADD;

  constructor(public payload: Anggota) {
  }
}

export class AnggotaAddSuccess implements Action {
  readonly type = AnggotaActionType.ANGGOTA_ADD_SUCCESS;

  constructor(public payload: Anggota) {
  }
}

export class AnggotaAddFail implements Action {
  readonly type = AnggotaActionType.ANGGOTA_ADD_FAIL;

  constructor(public payload: any) {
  }
}

export class AnggotaUpdate implements Action {
  readonly type = AnggotaActionType.ANGGOTA_ADD;

  constructor(public payload: Anggota) {
  }
}

export class AnggotaUpdateSuccess implements Action {
  readonly type = AnggotaActionType.ANGGOTA_UPDATE_SUCCESS;

  constructor(public payload: Anggota) {
  }
}

export class AnggotaUpdateFail implements Action {
  readonly type = AnggotaActionType.ANGGOTA_UPDATE_FAIL;

  constructor(public payload: any) {
  }
}


export class AnggotaDelete implements Action {
  readonly type = AnggotaActionType.ANGGOTA_DELETE;

  constructor(public payload: Anggota) {
  }
}

export class AnggotaDeleteSuccess implements Action {
  readonly type = AnggotaActionType.ANGGOTA_DELETE_SUCCESS;

  constructor(public payload: Anggota) {
  }
}

export class AnggotaDeleteFail implements Action {
  readonly type = AnggotaActionType.ANGGOTA_DELETE_FAIL;

  constructor(public payload: any) {
  }
}

export class AnggotaSelect implements Action {
  readonly type = AnggotaActionType.ANGGOTA_SELECT;

  constructor(public payload: Anggota) {
  }
}


export type AnggotaActions =
  | AnggotaDelete
  | AnggotaDeleteFail
  | AnggotaDeleteSuccess
  | AnggotaAdd
  | AnggotaAddFail
  | AnggotaAddSuccess
  | AnggotaUpdate
  | AnggotaUpdateFail
  | AnggotaUpdateSuccess
  | AnggotaSelect
  | AnggotaLoad
  | AnggotaLoadSuccess
  | AnggotaLoadFail;
