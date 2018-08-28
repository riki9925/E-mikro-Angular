import {BukuBesar} from './../../../../models';
import {BukuBesarActions, BukuBesarActionType} from './../../../actions';

export interface BukuBesarState {
  entities: { [id: string]: BukuBesar };
  isLoaded: boolean;
  isLoading: boolean;
  selectedBukubesar: BukuBesar;
  errorMessage: string;
}


const initialState: BukuBesarState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
  selectedBukubesar: null,
  errorMessage: null
};

export function bukubesarReducer(state: BukuBesarState = initialState,
                                 action: BukuBesarActions): BukuBesarState {
  let data;
  let bukubesar;
  switch (action.type) {
    case BukuBesarActionType.LOAD_BUKUBESAR:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case BukuBesarActionType.LOAD_BUKUBESAR_SUCCESS:
      bukubesar = action.payload;

      const entities = bukubesar.reduce(
        (entities: { [id: string]: BukuBesar }, bukubesar: BukuBesar) => {
          return {
            ...entities,
            [bukubesar.ACCBB]: bukubesar,
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
    case BukuBesarActionType.LOAD_BUKUBESAR_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        errorMessage: action.payload
      };
    case BukuBesarActionType.SELECT_BUKUBESAR:
      return {
        ...state,
        selectedBukubesar: action.payload
      };
    case BukuBesarActionType.ADD_BUKUBESAR: {
      return {
        ...state,
        isLoading: true
      };
    }
    case BukuBesarActionType.UPDATE_BUKUBESAR_SUCCESS:
    case BukuBesarActionType.ADD_BUKUBESAR_SUCCESS: {
      bukubesar = action.payload;
      const entities = {
        ...state.entities,
        [bukubesar.ACCBB]: bukubesar,
      };
      return {
        ...state,
        selectedBukubesar: null,
        isLoading: false,
        entities
      };
    }
    case BukuBesarActionType.ADD_BUKUBESAR_FAIL:
    case BukuBesarActionType.UPDATE_BUKUBESAR_FAIL:
    case BukuBesarActionType.DELETE_BUKUBESAR_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case BukuBesarActionType.DELETE_BUKUBESAR: {
      return {
        ...state,
        isLoading: true
      };
    }
    case BukuBesarActionType.DELETE_BUKUBESAR_SUCCESS: {
      bukubesar = action.payload;
      const {[bukubesar.ACCBB]: removed, ...entities} = state.entities;
      return {
        ...state,
        selectedBukubesar: null,
        isLoading: false,
        entities,
      };
    }
    default:
      return state;
  }
}

export const getBukuBesarEntity = (state: BukuBesarState) => state.entities;
export const getBukuBesarIsLoading = (state: BukuBesarState) => state.isLoading;
export const getBukuBesarIsLoaded = (state: BukuBesarState) => state.isLoaded;
export const getSelectedBukubesar = (state: BukuBesarState) => state.selectedBukubesar;
