import {Kelompok} from './../../../../models';
import {KelompokActions, KelompokActionType} from './../../../actions';

export interface KelompokState {
  entities: { [id: number]: Kelompok };
  isLoaded: boolean;
  isLoading: boolean;
  selectedKelompok: Kelompok;
}


const initialState: KelompokState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
  selectedKelompok: null
};

export function kelompokReducer(state: KelompokState = initialState,
                                action: KelompokActions): KelompokState {
  switch (action.type) {
    case KelompokActionType.LOAD_KELOMPOK_ACCOUNT:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case KelompokActionType.LOAD_KELOMPOK_ACCOUNT_SUCCESS:
      const kelompoks = action.payload;
      const entities = kelompoks.reduce(
        (entities: { [id: number]: Kelompok }, kelompok: Kelompok) => {
          return {
            ...entities,
            [kelompok.ACCKEL]: kelompok,
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
    case KelompokActionType.LOAD_KELOMPOK_ACCOUNT_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
      };
    case KelompokActionType.SELECT_KELOMPOK_ACCOUNT:
      return {
        ...state,
        selectedKelompok: action.payload
      };
    default:
      return state;
  }
}

export const getKelompokEntity = (state: KelompokState) => state.entities;
export const getKelompokIsLoading = (state: KelompokState) => state.isLoading;
export const getKelompokIsLoaded = (state: KelompokState) => state.isLoaded;
export const getSelectedKelompok = (state: KelompokState) => state.selectedKelompok;
