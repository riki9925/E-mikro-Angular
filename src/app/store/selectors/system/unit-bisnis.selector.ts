import * as fromFeature from './../../../store';
import {createSelector} from '@ngrx/store';

const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
/**
 * Unit Bisnis selector
 */
export const getUnitBisnisEntity = createSelector(
  fromFeature.getUnitState,
  state => state.entities
);
export const getUnitBisnisIsLoaded = createSelector(
  fromFeature.getUnitState,
  state => state.isLoaded
);

export const getUnitBisnisIsLoading = createSelector(
  fromFeature.getUnitState,
  state => state.isLoading
);

export const getSelectedUnitBisnis = createSelector(
  fromFeature.getUnitState,
  state => state.selected
);

export const getAllUnitBisnis = createSelector(
  getUnitBisnisEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
export const getActiveUnitBisnis = createSelector(
  getAllUnitBisnis,
  unit => {
    return unit.filter(x => {
      return x.ST;
    });
  }
);
export const getUnitJenis = createSelector(
  getAllUnitBisnis,
  unit => {
    const dict = {};
    return unit.filter(x => {
      if (!dict.hasOwnProperty(x.JENIS)) {
        dict[x.JENIS] = x.JENIS;
        console.log(dict);
        return x;
      } else {
        return false;
      }
    }).map(x => x.JENIS);
  }
);
