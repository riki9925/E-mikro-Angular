import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../../store';
import * as fromJenis from './../../../reducers/setting/coa/jenis.reducer';

export const getJenisEntity = createSelector(
  fromFeature.getJenisState,
  fromJenis.getJenisEntity
);
export const getJenisIsLoaded = createSelector(
  fromFeature.getJenisState,
  fromJenis.getJenisIsLoaded
);
export const getJenisIsLoading = createSelector(
  fromFeature.getJenisState,
  fromJenis.getJenisIsLoading
);
export const getSelectedJenis = createSelector(
  fromFeature.getJenisState,
  fromJenis.getSelectedJenis
);

export const getAllJenis = createSelector(
  getJenisEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
