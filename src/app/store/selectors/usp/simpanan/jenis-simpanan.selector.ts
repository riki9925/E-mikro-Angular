import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../../store';


export const getJenisSimpananEntity = createSelector(
  fromFeature.getJenisSimpananState,
  state => state.entities
);
export const getJenisSimpananIsLoaded = createSelector(
  fromFeature.getJenisSimpananState,
  state => state.isLoaded
);
export const getJenisSimpananIsLoading = createSelector(
  fromFeature.getJenisSimpananState,
  state => state.isLoading
);

export const getAllJenisSimpanan = createSelector(
  getJenisSimpananEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const selectJenisSimpanan = (a) => createSelector(
  getJenisSimpananEntity,
  entities => {
    return entities[a];
  }
);

export const getSelectedJenisSimpanan = createSelector(
  fromFeature.getJenisSimpananState,
  state => state.selectedJenisSimpanan
);
