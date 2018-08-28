import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../../store';


export const getMasterSimpananEntity = createSelector(
  fromFeature.getMasterSimpananState,
  state => state.entities
);
export const getMasterSimpananIsLoaded = createSelector(
  fromFeature.getMasterSimpananState,
  state => state.isLoaded
);
export const getMasterSimpananIsLoading = createSelector(
  fromFeature.getMasterSimpananState,
  state => state.isLoading
);

export const getAllMasterSimpanan = createSelector(
  getMasterSimpananEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
export const getSelectedMasterSimpanan = createSelector(
  fromFeature.getMasterSimpananState,
  state => state.selectedMasterSimpanan
);
