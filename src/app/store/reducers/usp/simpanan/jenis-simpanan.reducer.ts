import {JenisSimpanan} from './../../../../models';
import {JenisSimpananActions, JenisSimpananActionType} from './../../../actions';

export interface JenisSimpananState {
  entities: { [id: number]: JenisSimpanan };
  isLoaded: boolean;
  isLoading: boolean;
  selectedJenisSimpanan: JenisSimpanan;
  errorMessage: string;
}


const initialState: JenisSimpananState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
  selectedJenisSimpanan: null,
  errorMessage: null
};

export function jenisSimpananReducer(state: JenisSimpananState = initialState,
                                     action: JenisSimpananActions): JenisSimpananState {
  let accounts;
  let entities;
  switch (action.type) {
    case JenisSimpananActionType.JENIS_SIMPANAN_LOAD:
      return {
        ...state,
        isLoading: true
      };
    case JenisSimpananActionType.JENIS_SIMPANAN_LOAD_SUCCESS:
      accounts = action.payload;

      entities = accounts.reduce(
        (entities: { [id: string]: JenisSimpanan }, account: JenisSimpanan) => {
          return {
            ...entities,
            [account.ACC]: account,
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
    case JenisSimpananActionType.JENIS_SIMPANAN_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        errorMessage: action.payload
      };
    case JenisSimpananActionType.JENIS_SIMPANAN_ADD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case JenisSimpananActionType.JENIS_SIMPANAN_UPDATE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case JenisSimpananActionType.JENIS_SIMPANAN_UPDATE_SUCCESS:
    case JenisSimpananActionType.JENIS_SIMPANAN_ADD_SUCCESS: {
      accounts = action.payload;
      entities = {
        ...state.entities,
        [accounts.ACC]: accounts,
      };
      return {
        ...state,
        selectedJenisSimpanan: null,
        isLoading: false,
        entities
      };
    }
    case JenisSimpananActionType.JENIS_SIMPANAN_ADD_FAIL:
    case JenisSimpananActionType.JENIS_SIMPANAN_UPDATE_FAIL:
    case JenisSimpananActionType.JENIS_SIMPANAN_DELETE_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case JenisSimpananActionType.JENIS_SIMPANAN_SELECT:
      return {
        ...state,
        selectedJenisSimpanan: action.payload
      };
    case JenisSimpananActionType.JENIS_SIMPANAN_DELETE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case JenisSimpananActionType.JENIS_SIMPANAN_DELETE_SUCCESS: {
      const account = action.payload;
      const {[account.ACC]: removed, ...entities} = state.entities;
      return {
        ...state,
        selectedJenisSimpanan: null,
        isLoading: false,
        entities,
      };
    }
    default:
      return state;
  }
}
