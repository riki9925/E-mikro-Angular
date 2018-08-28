import {Action} from '@ngrx/store';
import {BukuBesar} from './../../../../models';

export enum BukuBesarActionType {
  ADD_BUKUBESAR = '[BUKUBESAR] ADD BUKUBESAR',
  ADD_BUKUBESAR_SUCCESS = '[BUKUBESAR] ADD BUKUBESAR SUCCESS',
  ADD_BUKUBESAR_FAIL = '[BUKUBESAR] ADD BUKUBESAR FAIL',
  LOAD_BUKUBESAR = '[BUKUBESAR] LOAD BUKUBESAR',
  LOAD_BUKUBESAR_SUCCESS = '[BUKUBESAR] LOAD BUKUBESAR SUCCESS',
  LOAD_BUKUBESAR_FAIL = '[BUKUBESAR] LOAD BUKUBESAR FAIL',
  UPDATE_BUKUBESAR = '[BUKUBESAR] UPDATE BUKUBESAR',
  UPDATE_BUKUBESAR_SUCCESS = '[BUKUBESAR] UPDATE BUKUBESAR SUCCESS',
  UPDATE_BUKUBESAR_FAIL = '[BUKUBESAR] UPDATE BUKUBESAR FAIL',
  DELETE_BUKUBESAR = '[BUKUBESAR] DELETE BUKUBESAR',
  DELETE_BUKUBESAR_SUCCESS = '[BUKUBESAR] DELETE BUKUBESAR SUCCESS',
  DELETE_BUKUBESAR_FAIL = '[BUKUBESAR] DELETE BUKUBESAR FAIL',
  SELECT_BUKUBESAR = '[BUKUBESAR] SELECT BUKUBESAR',
}

export class LoadBukuBesar implements Action {
  readonly type = BukuBesarActionType.LOAD_BUKUBESAR;

  constructor() {
  }
}

export class LoadBukuBesarFail implements Action {
  readonly type = BukuBesarActionType.LOAD_BUKUBESAR_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadBukuBesarSuccess implements Action {
  readonly type = BukuBesarActionType.LOAD_BUKUBESAR_SUCCESS;

  constructor(public payload: BukuBesar[]) {
  }
}

export class SelectBukubesar implements Action {
  readonly type = BukuBesarActionType.SELECT_BUKUBESAR;

  constructor(public payload: BukuBesar) {
  }
}

export class AddBukuBesar implements Action {
  readonly type = BukuBesarActionType.ADD_BUKUBESAR;

  constructor(public payload: BukuBesar) {
  }
}

export class AddBukuBesarFail implements Action {
  readonly type = BukuBesarActionType.ADD_BUKUBESAR_FAIL;

  constructor(public payload: any) {
  }
}

export class AddBukuBesarSuccess implements Action {
  readonly type = BukuBesarActionType.ADD_BUKUBESAR_SUCCESS;

  constructor(public payload: BukuBesar) {
  }
}

export class UpdateBukuBesar implements Action {
  readonly type = BukuBesarActionType.UPDATE_BUKUBESAR;

  constructor(public payload: BukuBesar) {
  }
}

export class UpdateBukuBesarFail implements Action {
  readonly type = BukuBesarActionType.UPDATE_BUKUBESAR_FAIL;

  constructor(public payload: any) {
  }
}

export class UpdateBukuBesarSuccess implements Action {
  readonly type = BukuBesarActionType.UPDATE_BUKUBESAR_SUCCESS;

  constructor(public payload: BukuBesar) {
  }
}

export class DeleteBukuBesar implements Action {
  readonly type = BukuBesarActionType.DELETE_BUKUBESAR;

  constructor(public payload: BukuBesar) {
  }
}

export class DeleteBukuBesarFail implements Action {
  readonly type = BukuBesarActionType.DELETE_BUKUBESAR_FAIL;

  constructor(public payload: any) {
  }
}

export class DeleteBukuBesarSuccess implements Action {
  readonly type = BukuBesarActionType.DELETE_BUKUBESAR_SUCCESS;

  constructor(public payload: BukuBesar) {
  }
}

export type BukuBesarActions =
  | LoadBukuBesar
  | LoadBukuBesarFail
  | LoadBukuBesarSuccess
  | AddBukuBesar
  | UpdateBukuBesar
  | UpdateBukuBesarFail
  | UpdateBukuBesarSuccess
  | DeleteBukuBesar
  | DeleteBukuBesarFail
  | DeleteBukuBesarSuccess
  | AddBukuBesarFail
  | SelectBukubesar
  | AddBukuBesarSuccess;
