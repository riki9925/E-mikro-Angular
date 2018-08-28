import {UnitBisnisActions, UnitBisnisActionType} from './../../actions';
import {UnitBisnis} from './../../../models';

export interface UnitBisnisState {
  entities: { [id: string]: UnitBisnis };
  isLoading: boolean;
  isLoaded: boolean;
  selected: UnitBisnis;
}


const initialState: UnitBisnisState = {
  entities: {},
  isLoading: false,
  isLoaded: false,
  selected: null
};

export function unitBisnisReducer(state: UnitBisnisState = initialState,
                                  action: UnitBisnisActions): UnitBisnisState {
  switch (action.type) {
    case UnitBisnisActionType.LOAD_UNIT_BISNIS:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case UnitBisnisActionType.LOAD_UNIT_BISNIS_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false
      };
    case UnitBisnisActionType.LOAD_UNIT_BISNIS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        entities: action.payload.reduce(
          (entities: { [id: string]: UnitBisnis }, unitBisnis: UnitBisnis) => {
            return {
              ...entities,
              [unitBisnis.KU]: unitBisnis,
            };
          },
          {
            ...state.entities,
          }
        )
      };
    case UnitBisnisActionType.UPDATE_UNIT_BISNIS:
      return {
        ...state,
        isLoading: true,
      };
    case UnitBisnisActionType.SELECT_UNIT_BISNIS:
      return {
        ...state,
        selected: action.payload,
      };
    case UnitBisnisActionType.UPDATE_UNIT_BISNIS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case UnitBisnisActionType.UPDATE_UNIT_BISNIS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selected: null,
        entities: {
          ...state.entities,
          [action.payload.KU]: action.payload,
        }
      };
    default:
      return state;
  }
}

export const getUnitBisnisIsLoading = (state: UnitBisnisState) => state.isLoading;
export const getUnitBisnisIsLoaded = (state: UnitBisnisState) => state.isLoaded;
export const getUnitBisnisEntity = (state: UnitBisnisState) => state.entities;
export const getSelectedUnitBisnis = (state: UnitBisnisState) => state.selected;
