import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../store';


export const getAnggotaEntity = createSelector(
  fromFeature.getAnggotaState,
  state => state.entities
);
export const getAnggotaIsLoaded = createSelector(
  fromFeature.getAnggotaState,
  state => state.isLoaded
);
export const getAnggotaIsLoading = createSelector(
  fromFeature.getAnggotaState,
  state => state.isLoading
);

export const getAllAnggota = createSelector(
  getAnggotaEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getAllActiveAnggota = createSelector(
  getAllAnggota,
  anggota => {
    return anggota.filter(r => r.ST === '2');
  }
);
export const getSelectedAnggota = createSelector(
  fromFeature.getAnggotaState,
  state => state.selectedAnggota
);
