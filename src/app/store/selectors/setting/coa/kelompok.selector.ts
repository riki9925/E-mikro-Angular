import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../../store';
import * as fromKelompok from './../../../reducers/setting/coa/kelompok.reducer';
import * as fromJenisSelector from './jenis.selector';

export const getKelompokEntity = createSelector(
  fromFeature.getKelompokState,
  fromKelompok.getKelompokEntity
);
export const getKelompokIsLoaded = createSelector(
  fromFeature.getKelompokState,
  fromKelompok.getKelompokIsLoaded
);
export const getKelompokIsLoading = createSelector(
  fromFeature.getKelompokState,
  fromKelompok.getKelompokIsLoading
);

export const getAllKelompok = createSelector(
  getKelompokEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
export const getSelectedKelompok = createSelector(
  fromFeature.getKelompokState,
  fromKelompok.getSelectedKelompok
);

export const getKelompokFilteredJenis = createSelector(
  getAllKelompok,
  fromJenisSelector.getSelectedJenis,
  (kelompok, selectedJenis) => {
    if (selectedJenis == undefined) {
      return kelompok;
    }
    return kelompok.filter(d => {
      return d.ACCJENIS === selectedJenis.ACCJENIS;
    });
  }
);
