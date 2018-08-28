import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../store';
import * as fromStruktur from './../../reducers/system/struktur.reducer';

/**
 * Agama selector
 */

export const getStruktur = createSelector(
  fromFeature.getStrukturState,
  fromStruktur.getStruktur
);
export const getStrukturIsLoaded = createSelector(
  fromFeature.getStrukturState,
  fromStruktur.getStrukturIsLoaded
);

export const getStrukturIsLoading = createSelector(
  fromFeature.getStrukturState,
  fromStruktur.getStrukturIsLoading
);
