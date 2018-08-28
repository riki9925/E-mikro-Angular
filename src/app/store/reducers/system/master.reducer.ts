import {Agama, Golongan, HubunganKeluarga, Identitas, Jabatan, Pekerjaan, Pendidikan} from './../../../models';
import {MasterActions, MasterActionType} from '../../actions';

export interface PekerjaanState {
  entities: {
    [id: string]: Pekerjaan
  };
  isLoaded: boolean;
  isLoading: boolean;
  selected: Pekerjaan;
}

export interface GolonganState {
  entities: {
    [id: string]: Golongan
  };
  isLoaded: boolean;
  isLoading: boolean;
  selected: Golongan;
}

export interface AgamaState {
  entities: {
    [id: string]: Agama
  };
  isLoaded: boolean;
  isLoading: boolean;
  selected: Agama;
}

export interface PendidikanState {
  entities: {
    [id: string]: Pendidikan
  };
  isLoaded: boolean;
  isLoading: boolean;
  selected: Pendidikan;
}

export interface IdentitasState {
  entities: {
    [id: string]: Identitas
  };
  isLoaded: boolean;
  isLoading: boolean;
  selected: Identitas;

}

export interface JabatanState {
  entities: {
    [id: string]: Jabatan
  };
  isLoaded: boolean;
  isLoading: boolean;
  selected: Jabatan;
}

export interface HubunganKeluargaState {
  entities: {
    [id: string]: HubunganKeluarga
  };
  isLoaded: boolean;
  isLoading: boolean;
  selected: HubunganKeluarga;

}

export interface MasterState {
  pekerjaan?: PekerjaanState;
  golongan?: GolonganState;
  agama?: AgamaState;
  pendidikan?: PendidikanState;
  identitas?: IdentitasState;
  jabatan?: JabatanState;
  hub_keluarga?: HubunganKeluargaState;
}


const initialState: MasterState = {
  pekerjaan: {
    entities: {},
    isLoaded: false,
    isLoading: false,
    selected: null
  },
  golongan: {
    entities: {},
    isLoaded: false,
    isLoading: false,
    selected: null
  },
  agama: {
    entities: {},
    isLoaded: false,
    isLoading: false,
    selected: null
  },
  pendidikan: {
    entities: {},
    isLoaded: false,
    isLoading: false,
    selected: null
  },
  identitas: {
    entities: {},
    isLoaded: false,
    isLoading: false,
    selected: null

  },
  jabatan: {
    entities: {},
    isLoaded: false,
    isLoading: false,
    selected: null
  },
  hub_keluarga: {
    entities: {},
    isLoaded: false,
    isLoading: false,
    selected: null
  },
};

export function masterReducer(state: MasterState = initialState,
                              action: MasterActions): MasterState {
  let payload;

  let entities;
  switch (action.type) {
    /**
     * Agama
     */

    case MasterActionType.MASTER_LOAD_AGAMA:
      return {
        ...state,
        agama: {
          ...state.agama,
          isLoaded: false,
          isLoading: true
        }
      };
    case MasterActionType.MASTER_LOAD_AGAMA_SUCCESS:
      payload = action.payload;

      entities = payload.reduce(
        (entities: {
          [id: string]: Agama
        }, agama: Agama) => {
          return {
            ...entities,
            [agama.URUT]: agama,
          };
        }, {
          ...state.agama.entities,
        }
      );
      return {
        ...state,
        agama: {
          ...state.agama,
          entities,
          isLoaded: true,
          isLoading: false
        }
      };
    case MasterActionType.MASTER_LOAD_AGAMA_FAIL:
      return {
        ...state,
        agama: {
          ...state.agama,
          isLoaded: false,
          isLoading: false
        }
      };

    /**
     * Identitas
     */
    case MasterActionType.MASTER_LOAD_IDENTITAS:
      return {
        ...state,
        identitas: {
          ...state.identitas,
          isLoaded: false,
          isLoading: true
        }
      };
    case MasterActionType.MASTER_LOAD_IDENTITAS_SUCCESS:
      payload = action.payload;

      entities = payload.reduce(
        (entities: {
          [id: string]: Identitas
        }, identitas: Identitas) => {
          return {
            ...entities,
            [identitas.URUT]: identitas,
          };
        }, {
          ...state.identitas.entities,
        }
      );
      return {
        ...state,
        identitas: {
          ...state.identitas,
          entities,
          isLoaded: true,
          isLoading: false
        }
      };
    case MasterActionType.MASTER_LOAD_IDENTITAS_FAIL:
      return {
        ...state,
        identitas: {
          ...state.identitas,
          isLoaded: false,
          isLoading: false
        }
      };

    /**
     * hubungan keluarga
     */
    case MasterActionType.MASTER_LOAD_HUB_KELUARGA:
      return {
        ...state,
        hub_keluarga: {
          ...state.hub_keluarga,
          isLoaded: false,
          isLoading: true
        }
      };
    case MasterActionType.MASTER_LOAD_HUB_KELUARGA_SUCCESS:
      payload = action.payload;

      entities = payload.reduce(
        (entities: {
          [id: string]: HubunganKeluarga
        }, hub_keluarga: HubunganKeluarga) => {
          return {
            ...entities,
            [hub_keluarga.URUT]: hub_keluarga,
          };
        }, {
          ...state.hub_keluarga.entities,
        }
      );
      return {
        ...state,
        hub_keluarga: {
          ...state.hub_keluarga,
          entities,
          isLoaded: true,
          isLoading: false
        }
      };
    case MasterActionType.MASTER_LOAD_HUB_KELUARGA_FAIL:
      return {
        ...state,
        hub_keluarga: {
          ...state.hub_keluarga,
          isLoaded: false,
          isLoading: false
        }
      };
    /**
     * GOLONGAN
     */
    case MasterActionType.MASTER_LOAD_GOLONGAN:
      return {
        ...state,
        golongan: {
          ...state.golongan,
          isLoaded: false,
          isLoading: true
        }
      };
    case MasterActionType.MASTER_LOAD_GOLONGAN_SUCCESS:
      payload = action.payload;

      entities = payload.reduce(
        (entities: {
          [id: string]: Golongan
        }, golongan: Golongan) => {
          return {
            ...entities,
            [golongan.NO]: golongan,
          };
        }, {
          ...state.golongan.entities,
        }
      );
      return {
        ...state,
        golongan: {
          ...state.golongan,
          entities,
          isLoaded: true,
          isLoading: false
        }
      };
    case MasterActionType.MASTER_LOAD_GOLONGAN_FAIL:
      return {
        ...state,
        golongan: {
          ...state.golongan,
          isLoaded: false,
          isLoading: false
        }
      };
    /**
     * PEKERJAAN
     */
    case MasterActionType.MASTER_LOAD_PEKERJAAN:
      return {
        ...state,
        pekerjaan: {
          ...state.pekerjaan,
          isLoaded: false,
          isLoading: true
        }
      };
    case MasterActionType.MASTER_LOAD_PEKERJAAN_SUCCESS:
      payload = action.payload;

      entities = payload.reduce(
        (entities: {
          [id: number]: Pekerjaan
        }, pekerjaan: Pekerjaan) => {
          return {
            ...entities,
            [pekerjaan.URUT]: pekerjaan,
          };
        }, {
          ...state.pekerjaan.entities,
        }
      );
      return {
        ...state,
        pekerjaan: {
          ...state.pekerjaan,
          entities,
          isLoaded: true,
          isLoading: false
        }
      };
    case MasterActionType.MASTER_LOAD_PEKERJAAN_FAIL:
      return {
        ...state,
        pekerjaan: {
          ...state.pekerjaan,
          isLoaded: false,
          isLoading: false
        }
      };
    /**
     * JABATAN
     */
    case MasterActionType.MASTER_LOAD_JABATAN:
      return {
        ...state,
        pendidikan: {
          ...state.pendidikan,
          isLoaded: false,
          isLoading: true
        }
      };
    case MasterActionType.MASTER_LOAD_JABATAN_SUCCESS:
      payload = action.payload;

      entities = payload.reduce(
        (entities: {
          [id: string]: Jabatan
        }, jabatan: Jabatan) => {
          return {
            ...entities,
            [jabatan.URUT]: jabatan,
          };
        }, {
          ...state.jabatan.entities,
        }
      );
      return {
        ...state,
        jabatan: {
          ...state.jabatan,
          entities,
          isLoaded: true,
          isLoading: false
        }
      };
    case MasterActionType.MASTER_LOAD_JABATAN_FAIL:
      return {
        ...state,
        jabatan: {
          ...state.jabatan,
          isLoaded: false,
          isLoading: false
        }
      };
    /**
     * PENDIDIKAN
     */
    case MasterActionType.MASTER_LOAD_PENDIDIKAN:
      return {
        ...state,
        pendidikan: {
          ...state.pendidikan,
          isLoaded: false,
          isLoading: true
        }
      };
    case MasterActionType.MASTER_LOAD_PENDIDIKAN_SUCCESS:
      payload = action.payload;

      entities = payload.reduce(
        (entities: {
          [id: number]: Pendidikan
        }, pendidikan: Pendidikan) => {
          return {
            ...entities,
            [pendidikan.URUT]: pendidikan,
          };
        }, {
          ...state.pendidikan.entities,
        }
      );
      return {
        ...state,
        pendidikan: {
          ...state.pendidikan,
          entities,
          isLoaded: true,
          isLoading: false
        }
      };
    case MasterActionType.MASTER_LOAD_PENDIDIKAN_FAIL:
      return {
        ...state,
        pendidikan: {
          ...state.pendidikan,
          isLoaded: false,
          isLoading: false
        }
      };
    default:
      return state;
  }
}


export const getPendidikanState = (state: MasterState) => state.pendidikan;
export const getPekerjaanState = (state: MasterState) => state.pekerjaan;
export const getGolonganState = (state: MasterState) => state.golongan;
export const getAgamaState = (state: MasterState) => state.agama;
export const getJabatanState = (state: MasterState) => state.jabatan;
export const getHubKeluargaState = (state: MasterState) => state.hub_keluarga;
export const getIdentitasState = (state: MasterState) => state.identitas;
