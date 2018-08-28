import {Action} from '@ngrx/store';
import {UnitBisnis} from './../../../models';

export enum UnitBisnisActionType {
  LOAD_UNIT_BISNIS = '[UNIT_BISNIS] LOAD Unit Bisnis',
  LOAD_UNIT_BISNIS_SUCCESS = '[UNIT_BISNIS] LOAD Unit Bisnis SUCCESS',
  LOAD_UNIT_BISNIS_FAIL = '[UNIT_BISNIS] LOAD Unit Bisnis FAIL',
  UPDATE_UNIT_BISNIS = '[UNIT_BISNIS] UPDATE Unit Bisnis',
  UPDATE_UNIT_BISNIS_SUCCESS = '[UNIT_BISNIS] UPDATE Unit Bisnis SUCCESS',
  UPDATE_UNIT_BISNIS_FAIL = '[UNIT_BISNIS] UPDATE Unit Bisnis FAIL',
  SELECT_UNIT_BISNIS = '[UNIT_BISNIS] SELECT'
}

export class LoadUnitBisnis implements Action {
  readonly type = UnitBisnisActionType.LOAD_UNIT_BISNIS;

  constructor() {
  }
}

export class LoadUnitBisnisFail implements Action {
  readonly type = UnitBisnisActionType.LOAD_UNIT_BISNIS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadUnitBisnisSuccess implements Action {
  readonly type = UnitBisnisActionType.LOAD_UNIT_BISNIS_SUCCESS;

  constructor(public payload: UnitBisnis[]) {
  }
}

export class UpdateUnitBisnis implements Action {
  readonly type = UnitBisnisActionType.UPDATE_UNIT_BISNIS;

  constructor(public payload: UnitBisnis) {
  }
}

export class SelectUnitBisnis implements Action {
  readonly type = UnitBisnisActionType.SELECT_UNIT_BISNIS;

  constructor(public payload: UnitBisnis) {
  }
}

export class UpdateUnitBisnisFail implements Action {
  readonly type = UnitBisnisActionType.UPDATE_UNIT_BISNIS_FAIL;

  constructor(public payload: UnitBisnis) {
  }
}

export class UpdateUnitBisnisSuccess implements Action {
  readonly type = UnitBisnisActionType.UPDATE_UNIT_BISNIS_SUCCESS;

  constructor(public payload: UnitBisnis) {
  }
}

export type UnitBisnisActions = LoadUnitBisnis
  | LoadUnitBisnisFail
  | LoadUnitBisnisSuccess
  | UpdateUnitBisnis
  | UpdateUnitBisnisFail
  | UpdateUnitBisnisSuccess
  | SelectUnitBisnis;
