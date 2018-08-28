import {Action} from '@ngrx/store';
import {Struktur} from './../../../models';

export enum StrukturActionType {
  LOAD_STRUKTUR = '[STRUKTUR] LOAD Struktur',
  LOAD_STRUKTUR_SUCCESS = '[STRUKTUR] LOAD Struktur SUCCESS',
  LOAD_STRUKTUR_FAIL = '[STRUKTUR] LOAD Struktur FAIL',
  UPDATE_STRUKTUR = '[STRUKTUR] UPDATE Struktur',
  UPDATE_STRUKTUR_SUCCESS = '[STRUKTUR] UPDATE Struktur SUCCESS',
  UPDATE_STRUKTUR_FAIL = '[STRUKTUR] UPDATE Struktur FAIL',
}

export class LoadStruktur implements Action {
  readonly type = StrukturActionType.LOAD_STRUKTUR;

  constructor() {
  }
}

export class LoadStrukturFail implements Action {
  readonly type = StrukturActionType.LOAD_STRUKTUR_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadStrukturSuccess implements Action {
  readonly type = StrukturActionType.LOAD_STRUKTUR_SUCCESS;

  constructor(public payload: Struktur) {
  }
}

export class UpdateStruktur implements Action {
  readonly type = StrukturActionType.UPDATE_STRUKTUR;

  constructor(public payload: Struktur) {
  }
}

export class UpdateStrukturFail implements Action {
  readonly type = StrukturActionType.UPDATE_STRUKTUR_FAIL;

  constructor(public payload: Struktur) {
  }
}

export class UpdateStrukturSuccess implements Action {
  readonly type = StrukturActionType.UPDATE_STRUKTUR_SUCCESS;

  constructor(public payload: Struktur) {
  }
}

export type StrukturActions = LoadStruktur
  | LoadStrukturFail
  | LoadStrukturSuccess
  | UpdateStruktur
  | UpdateStrukturFail
  | UpdateStrukturSuccess;
