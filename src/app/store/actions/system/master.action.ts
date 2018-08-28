import {Agama, Golongan, HubunganKeluarga, Identitas, Jabatan, Pekerjaan, Pendidikan} from './../../../models';
import {Action} from '@ngrx/store';

export enum MasterActionType {
  MASTER_LOAD_PENDIDIKAN = '[MASTER] Load Pendidikan',
  MASTER_LOAD_PENDIDIKAN_SUCCESS = '[MASTER] Load Pendidikan Success',
  MASTER_LOAD_PENDIDIKAN_FAIL = '[MASTER] Load Pendidikan Fail',
  SELECT_PENDIDIKAN = '[MASTER] Select Pendidikan',
  MASTER_LOAD_GOLONGAN = '[MASTER] Load Golongan',
  MASTER_LOAD_GOLONGAN_SUCCESS = '[MASTER] Load Golongan Success',
  MASTER_LOAD_GOLONGAN_FAIL = '[MASTER] Load Golongan Fail',
  SELECT_GOLONGAN = '[MASTER] Select Golongan',
  MASTER_LOAD_IDENTITAS = '[MASTER] Load Identitas',
  MASTER_LOAD_IDENTITAS_SUCCESS = '[MASTER] Load Identitas Success',
  MASTER_LOAD_IDENTITAS_FAIL = '[MASTER] Load Identitas Fail',
  SELECT_IDENTITAS = '[MASTER] Select Identitas',
  MASTER_LOAD_AGAMA = '[MASTER] Load Agama',
  MASTER_LOAD_AGAMA_SUCCESS = '[MASTER] Load Agama Success',
  MASTER_LOAD_AGAMA_FAIL = '[MASTER] Load Agama Fail',
  SELECT_AGAMA = '[MASTER] Select Agama',
  MASTER_LOAD_PEKERJAAN = '[MASTER] Load Pekerjaan',
  MASTER_LOAD_PEKERJAAN_SUCCESS = '[MASTER] Load Pekerjaan Success',
  MASTER_LOAD_PEKERJAAN_FAIL = '[MASTER] Load Pekerjaan Fail',
  SELECT_PEKERJAAN = '[MASTER] Select Pekerjaan',
  MASTER_LOAD_JABATAN = '[MASTER] Load Jabatan',
  MASTER_LOAD_JABATAN_SUCCESS = '[MASTER] Load Jabatan Success',
  MASTER_LOAD_JABATAN_FAIL = '[MASTER] Load Jabatan Fail',
  SELECT_JABATAN = '[MASTER] Select Jabatan',
  MASTER_LOAD_HUB_KELUARGA = '[MASTER] Load Hubungan Keluarga',
  MASTER_LOAD_HUB_KELUARGA_SUCCESS = '[MASTER] Load Hubungan Keluarga Success',
  MASTER_LOAD_HUB_KELUARGA_FAIL = '[MASTER] Load Hubungan Keluarga Fail',
  SELECT_HUB_KELUARGA = '[MASTER] Select Hubungan Keluarga',
}

/**
 * Pendidikan Action
 */
export class LoadPendidikan implements Action {
  readonly type = MasterActionType.MASTER_LOAD_PENDIDIKAN;

  constructor() {
  }
}

export class LoadPendidikanSuccess implements Action {
  readonly type = MasterActionType.MASTER_LOAD_PENDIDIKAN_SUCCESS;

  constructor(public payload: Pendidikan[]) {
  }
}

export class LoadPendidikanFail implements Action {
  readonly type = MasterActionType.MASTER_LOAD_PENDIDIKAN_FAIL;

  constructor(public payload: any) {
  }
}

/**
 * Golongan Action
 */
export class LoadGolongan implements Action {
  readonly type = MasterActionType.MASTER_LOAD_GOLONGAN;

  constructor() {
  }
}

export class LoadGolonganSuccess implements Action {
  readonly type = MasterActionType.MASTER_LOAD_GOLONGAN_SUCCESS;

  constructor(public payload: Golongan[]) {
  }
}

export class LoadGolonganFail implements Action {
  readonly type = MasterActionType.MASTER_LOAD_GOLONGAN_FAIL;

  constructor(public payload: any) {
  }
}

/**
 * Identitas Action
 */
export class LoadIdentitas implements Action {
  readonly type = MasterActionType.MASTER_LOAD_IDENTITAS;

  constructor() {
  }
}

export class LoadIdentitasSuccess implements Action {
  readonly type = MasterActionType.MASTER_LOAD_IDENTITAS_SUCCESS;

  constructor(public payload: Identitas[]) {
  }
}

export class LoadIdentitasFail implements Action {
  readonly type = MasterActionType.MASTER_LOAD_IDENTITAS_FAIL;

  constructor(public payload: any) {
  }
}

/**
 * Agama Action
 */
export class LoadAgama implements Action {
  readonly type = MasterActionType.MASTER_LOAD_AGAMA;

  constructor() {
  }
}

export class LoadAgamaSuccess implements Action {
  readonly type = MasterActionType.MASTER_LOAD_AGAMA_SUCCESS;

  constructor(public payload: Agama[]) {
  }
}

export class LoadAgamaFail implements Action {
  readonly type = MasterActionType.MASTER_LOAD_AGAMA_FAIL;

  constructor(public payload: any) {
  }
}

/**
 * Pekerjaan Action
 */

export class LoadPekerjaan implements Action {
  readonly type = MasterActionType.MASTER_LOAD_PEKERJAAN;

  constructor() {
  }
}

export class LoadPekerjaanSuccess implements Action {
  readonly type = MasterActionType.MASTER_LOAD_PEKERJAAN_SUCCESS;

  constructor(public payload: Pekerjaan[]) {
  }
}

export class LoadPekerjaanFail implements Action {
  readonly type = MasterActionType.MASTER_LOAD_PEKERJAAN_FAIL;

  constructor(public payload: any) {
  }
}

/**
 * jabatan action
 */
export class LoadJabatan implements Action {
  readonly type = MasterActionType.MASTER_LOAD_JABATAN;

  constructor() {
  }
}

export class LoadJabatanSuccess implements Action {
  readonly type = MasterActionType.MASTER_LOAD_JABATAN_SUCCESS;

  constructor(public payload: Jabatan[]) {
  }
}

export class LoadJabatanFail implements Action {
  readonly type = MasterActionType.MASTER_LOAD_JABATAN_FAIL;

  constructor(public payload: any) {
  }
}

/**
 * Hubungan Keluarga action
 */
export class LoadHubunganKeluarga implements Action {
  readonly type = MasterActionType.MASTER_LOAD_HUB_KELUARGA;

  constructor() {
  }
}

export class LoadHubunganKeluargaSuccess implements Action {
  readonly type = MasterActionType.MASTER_LOAD_HUB_KELUARGA_SUCCESS;

  constructor(public payload: HubunganKeluarga[]) {
  }
}

export class LoadHubunganKeluargaFail implements Action {
  readonly type = MasterActionType.MASTER_LOAD_HUB_KELUARGA_FAIL;

  constructor(public payload: any) {
  }
}


export type MasterActions =
  | LoadHubunganKeluarga
  | LoadHubunganKeluargaSuccess
  | LoadHubunganKeluargaFail
  | LoadPendidikan
  | LoadPendidikanSuccess
  | LoadPendidikanFail
  | LoadPekerjaan
  | LoadPekerjaanSuccess
  | LoadPekerjaanFail
  | LoadGolongan
  | LoadGolonganSuccess
  | LoadGolonganFail
  | LoadJabatan
  | LoadJabatanSuccess
  | LoadJabatanFail
  | LoadIdentitas
  | LoadIdentitasSuccess
  | LoadIdentitasFail
  | LoadAgama
  | LoadAgamaFail
  | LoadAgamaSuccess;
