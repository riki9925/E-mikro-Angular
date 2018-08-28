import {MasterSimpanan} from './../../../../models';
import {MasterSimpananActions, MasterSimpananActionType} from './../../../actions';

export interface MasterSimpananState {
  entities: { [id: number]: MasterSimpanan };
  isLoaded: boolean;
  isLoading: boolean;
  selectedMasterSimpanan: MasterSimpanan;
  errorMessage: string;
}


const initialState: MasterSimpananState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
  selectedMasterSimpanan: null,
  errorMessage: null,
};

export function masterSimpananReducer(state: MasterSimpananState = initialState,
                                      action: MasterSimpananActions): MasterSimpananState {
  let accounts;
  let entities;
  switch (action.type) {
    case MasterSimpananActionType.MASTER_SIMPANAN_LOAD:
      return {
        ...state,
        isLoading: true
      };
    case MasterSimpananActionType.MASTER_SIMPANAN_LOAD_SUCCESS:
      accounts = action.payload;

      entities = accounts.reduce(
        (entities: { [id: string]: MasterSimpanan }, account: MasterSimpanan) => {
          return {
            ...entities,
            [account.NOSIMP]: account,
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
    case MasterSimpananActionType.MASTER_SIMPANAN_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        errorMessage: action.payload
      };
    case MasterSimpananActionType.MASTER_SIMPANAN_ADD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case MasterSimpananActionType.MASTER_SIMPANAN_UPDATE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case MasterSimpananActionType.MASTER_SIMPANAN_UPDATE_SUCCESS:
    case MasterSimpananActionType.MASTER_SIMPANAN_ADD_SUCCESS: {
      accounts = action.payload;
      entities = {
        ...state.entities,
        [accounts.NOSIMP]: accounts,
      };
      return {
        ...state,
        selectedMasterSimpanan: null,
        isLoading: false,
        entities
      };
    }
    case MasterSimpananActionType.MASTER_SIMPANAN_ADD_FAIL:
    case MasterSimpananActionType.MASTER_SIMPANAN_UPDATE_FAIL:
    case MasterSimpananActionType.MASTER_SIMPANAN_DELETE_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case MasterSimpananActionType.MASTER_SIMPANAN_SELECT:
      return {
        ...state,
        selectedMasterSimpanan: action.payload
      };
    case MasterSimpananActionType.MASTER_SIMPANAN_DELETE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case MasterSimpananActionType.MASTER_SIMPANAN_DELETE_SUCCESS: {
      const account = action.payload;
      const {[account.NOSIMP]: removed, ...entities} = state.entities;
      return {
        ...state,
        selectedMasterSimpanan: null,
        isLoading: false,
        entities,
      };
    }
    default:
      return state;
  }
}
