import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../store';
import * as fromShu from './../../reducers/system/shu.reducer';

/**
 * Agama selector
 */

export const getShu = createSelector(
  fromFeature.getShuState,
  fromShu.getShu
);
export const getShuIsLoaded = createSelector(
  fromFeature.getShuState,
  fromShu.getShuIsLoaded
);

export const getShuIsLoading = createSelector(
  fromFeature.getShuState,
  fromShu.getShuIsLading
);
