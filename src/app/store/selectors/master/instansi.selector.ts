import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../store';


export const getInstansiEntity = createSelector(
  fromFeature.getInstansiState,
  state => state.entities
);

export const selectInstansi = (a) => createSelector(
  getInstansiEntity,
  entities => {
    return entities[a];
  }
);
export const getInstansiIsLoaded = createSelector(
  fromFeature.getInstansiState,
  state => state.isLoaded
);
export const getInstansiIsLoading = createSelector(
  fromFeature.getInstansiState,
  state => state.isLoading
);

export const getAllInstansi = createSelector(
  getInstansiEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
export const getSelectedInstansi = createSelector(
  fromFeature.getInstansiState,
  state => state.selectedInstansi
);
