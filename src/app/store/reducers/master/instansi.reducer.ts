import {Instansi} from './../../../models';
import {InstansiActions, InstansiActionType} from './../../actions';

export interface InstansiState {
  entities: { [id: number]: Instansi };
  isLoaded: boolean;
  isLoading: boolean;
  selectedInstansi: Instansi;
  errorMessage: string;
  view: boolean;
  update: boolean;
  create: boolean;
}


const initialState: InstansiState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
  selectedInstansi: null,
  errorMessage: null,
  view: true,
  update: false,
  create: false
};

export function instansiReducer(state: InstansiState = initialState,
                                action: InstansiActions): InstansiState {
  let accounts;
  let entities;
  switch (action.type) {
    case InstansiActionType.INSTANSI_LOAD:
      return {
        ...state,
        isLoading: true,
        view: true,
        update: false,
        create: false
      };
    case InstansiActionType.INSTANSI_LOAD_SUCCESS:
      accounts = action.payload;

      entities = accounts.reduce(
        (entities: { [id: string]: Instansi }, account: Instansi) => {
          return {
            ...entities,
            [account.KI]: account,
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
        entities,
        view: true,
        update: false,
        create: false
      };
    case InstansiActionType.INSTANSI_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        errorMessage: action.payload,
        view: true,
        update: false,
        create: false
      };
    case InstansiActionType.INSTANSI_ADD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case InstansiActionType.INSTANSI_UPDATE_SUCCESS:
    case InstansiActionType.INSTANSI_ADD_SUCCESS: {
      accounts = action.payload;
      entities = {
        ...state.entities,
        [accounts.KI]: accounts,
      };
      return {
        ...state,
        selectedInstansi: null,
        isLoading: false,
        entities,
        view: true,
        update: false,
        create: false
      };
    }
    case InstansiActionType.INSTANSI_ADD_FAIL:
    case InstansiActionType.INSTANSI_UPDATE_FAIL:
    case InstansiActionType.INSTANSI_DELETE_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case InstansiActionType.INSTANSI_SELECT:
      return {
        ...state,
        selectedInstansi: action.payload
      };
    case InstansiActionType.INSTANSI_ACTION_VIEW:
      return {
        ...state,
        view: true,
        create: false,
        update: false
      };
    case InstansiActionType.INSTANSI_ACTION_CREATE:
      return {
        ...state,
        view: false,
        create: true,
        update: false
      };
    case InstansiActionType.INSTANSI_ACTION_UPDATE:
      return {
        ...state,
        view: false,
        create: false,
        update: true
      };
    case InstansiActionType.INSTANSI_DELETE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case InstansiActionType.INSTANSI_DELETE_SUCCESS: {
      const account = action.payload;
      const {[account.KI]: removed, ...entities} = state.entities;
      return {
        ...state,
        selectedInstansi: null,
        isLoading: false,
        entities,
      };
    }
    default:
      return state;
  }
}
