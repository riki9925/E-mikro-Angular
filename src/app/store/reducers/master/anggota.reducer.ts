import {Anggota} from './../../../models';
import {AnggotaActions, AnggotaActionType} from './../../actions';

export interface AnggotaState {
  entities: { [id: number]: Anggota };
  isLoaded: boolean;
  isLoading: boolean;
  selectedAnggota: Anggota;
  errorMessage: string;
  view: boolean;
  update: boolean;
  create: boolean;
}


const initialState: AnggotaState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
  selectedAnggota: null,
  errorMessage: null,
  view: true,
  update: false,
  create: false
};

export function anggotaReducer(state: AnggotaState = initialState,
                               action: AnggotaActions): AnggotaState {
  let accounts;
  let entities;
  switch (action.type) {
    case AnggotaActionType.ANGGOTA_LOAD:
      return {
        ...state,
        isLoading: true
      };
    case AnggotaActionType.ANGGOTA_LOAD_SUCCESS:
      accounts = action.payload;
      entities = accounts.reduce(
        (entities: { [id: string]: Anggota }, account: Anggota) => {
          return {
            ...entities,
            [account.CIB]: account,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        entities
      };
    case AnggotaActionType.ANGGOTA_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        errorMessage: action.payload
      };
    case AnggotaActionType.ANGGOTA_ADD: {
      return {
        ...state,
        isLoading: true
      };
    }
    case AnggotaActionType.ANGGOTA_UPDATE_SUCCESS:
    case AnggotaActionType.ANGGOTA_ADD_SUCCESS: {
      accounts = action.payload;
      entities = {
        ...state.entities,
        [accounts.CIB]: accounts,
      };
      return {
        ...state,
        selectedAnggota: null,
        isLoading: false,
        entities
      };
    }
    case AnggotaActionType.ANGGOTA_ADD_FAIL:
    case AnggotaActionType.ANGGOTA_UPDATE_FAIL:
    case AnggotaActionType.ANGGOTA_DELETE_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case AnggotaActionType.ANGGOTA_SELECT:
      return {
        ...state,
        selectedAnggota: action.payload
      };
    case AnggotaActionType.ANGGOTA_DELETE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case AnggotaActionType.ANGGOTA_DELETE_SUCCESS: {
      const account = action.payload;
      const {[account.CIB]: removed, ...entities} = state.entities;
      return {
        ...state,
        selectedAnggota: null,
        isLoading: false,
        entities,
      };
    }
    default:
      return state;
  }
}
