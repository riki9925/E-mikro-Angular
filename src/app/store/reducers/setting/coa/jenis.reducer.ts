import {Jenis} from './../../../../models';
import {JenisActions, JenisActionType} from './../../../actions';

export interface JenisState {
  entities: { [id: number]: Jenis };
  isLoaded: boolean;
  isLoading: boolean;
  selectedJenis: Jenis;
}


const initialState: JenisState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
  selectedJenis: null
};

export function jenisReducer(state: JenisState = initialState,
                             action: JenisActions): JenisState {
  switch (action.type) {
    case JenisActionType.LOAD_JENIS_ACCOUNT:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case JenisActionType.LOAD_JENIS_ACCOUNT_SUCCESS:
      const jeniss = action.payload;
      const entities = jeniss.reduce(
        (entities: { [id: number]: Jenis }, jenis: Jenis) => {
          return {
            ...entities,
            [jenis.ACCJENIS]: jenis,
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
    case JenisActionType.LOAD_JENIS_ACCOUNT_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
      };
    case JenisActionType.SELECT_JENIS_ACCOUNT:
      return {
        ...state,
        selectedJenis: action.payload
      };
    default:
      return state;
  }
}

export const getJenisEntity = (state: JenisState) => state.entities;
export const getJenisIsLoading = (state: JenisState) => state.isLoading;
export const getJenisIsLoaded = (state: JenisState) => state.isLoaded;
export const getSelectedJenis = (state: JenisState) => state.selectedJenis;
