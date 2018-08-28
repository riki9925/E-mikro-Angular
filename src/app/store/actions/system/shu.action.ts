import {Action} from '@ngrx/store';
import {Shu} from './../../../models';

export enum ShuActionType {
  LOAD_SHU = '[SHU] LOAD Shu',
  LOAD_SHU_SUCCESS = '[SHU] LOAD Shu SUCCESS',
  LOAD_SHU_FAIL = '[SHU] LOAD Shu FAIL',
  UPDATE_SHU = '[SHU] UPDATE Shu',
  UPDATE_SHU_SUCCESS = '[SHU] UPDATE Shu SUCCESS',
  UPDATE_SHU_FAIL = '[SHU] UPDATE Shu FAIL',
}

export class LoadShu implements Action {
  readonly type = ShuActionType.LOAD_SHU;

  constructor() {
  }
}

export class LoadShuFail implements Action {
  readonly type = ShuActionType.LOAD_SHU_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadShuSuccess implements Action {
  readonly type = ShuActionType.LOAD_SHU_SUCCESS;

  constructor(public payload: Shu) {
  }
}

export class UpdateShu implements Action {
  readonly type = ShuActionType.UPDATE_SHU;

  constructor(public payload: Shu) {
  }
}

export class UpdateShuFail implements Action {
  readonly type = ShuActionType.UPDATE_SHU_FAIL;

  constructor(public payload: any) {
  }
}

export class UpdateShuSuccess implements Action {
  readonly type = ShuActionType.UPDATE_SHU_SUCCESS;

  constructor(public payload: Shu) {
  }
}

export type ShuActions =
  | LoadShu
  | LoadShuFail
  | LoadShuSuccess
  | UpdateShu
  | UpdateShuFail
  | UpdateShuSuccess;
