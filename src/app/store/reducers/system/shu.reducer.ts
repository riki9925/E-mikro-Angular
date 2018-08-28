import {ShuActions, ShuActionType} from './../../actions';
import {Shu} from './../../../models';

export interface ShuState {
  shu: Shu;
  isLoading: boolean;
  isLoaded: boolean;
}


const initialState: ShuState = {
  shu: null,
  isLoading: false,
  isLoaded: false
};

export function shuReducer(state: ShuState = initialState,
                           action: ShuActions): ShuState {
  switch (action.type) {
    case ShuActionType.LOAD_SHU:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case ShuActionType.LOAD_SHU_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false
      };
    case ShuActionType.LOAD_SHU_SUCCESS:
      return {
        ...state,
        shu: action.payload,
        isLoaded: true,
        isLoading: false
      };
    case ShuActionType.UPDATE_SHU:
      return {
        ...state,
        isLoading: true,
      };
    case ShuActionType.UPDATE_SHU_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case ShuActionType.UPDATE_SHU_SUCCESS:
      return {
        ...state,
        shu: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

export const getShuIsLading = (state: ShuState) => state.isLoading;
export const getShu = (state: ShuState) => state.shu;
export const getShuIsLoaded = (state: ShuState) => state.isLoaded;
