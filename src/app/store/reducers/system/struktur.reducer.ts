import {StrukturActions, StrukturActionType} from './../../actions';
import {Struktur} from './../../../models';

export interface StrukturState {
  struktur: Struktur;
  isLoading: boolean;
  isLoaded: boolean;
}


const initialState: StrukturState = {
  struktur: null,
  isLoading: false,
  isLoaded: false
};

export function strukturReducer(state: StrukturState = initialState,
                                action: StrukturActions): StrukturState {
  switch (action.type) {
    case StrukturActionType.LOAD_STRUKTUR:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case StrukturActionType.LOAD_STRUKTUR_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false
      };
    case StrukturActionType.LOAD_STRUKTUR_SUCCESS:
      return {
        ...state,
        struktur: action.payload,
        isLoaded: true
      };
    case StrukturActionType.UPDATE_STRUKTUR:
      return {
        ...state,
        isLoading: true,
      };
    case StrukturActionType.UPDATE_STRUKTUR_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case StrukturActionType.UPDATE_STRUKTUR_SUCCESS:
      return {
        ...state,
        struktur: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

export const getStrukturIsLoading = (state: StrukturState) => state.isLoading;
export const getStrukturIsLoaded = (state: StrukturState) => state.isLoaded;
export const getStruktur = (state: StrukturState) => state.struktur;
