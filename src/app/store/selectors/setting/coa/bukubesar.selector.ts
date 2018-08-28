import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../../store';
import * as fromBukubesar from './../../../reducers/setting/coa/bukubesar.reducer';
import * as fromKelompok from './kelompok.selector';


export const getBukubesarEntity = createSelector(
  fromFeature.getBukubesarState,
  fromBukubesar.getBukuBesarEntity
);
export const getBukubesarIsLoaded = createSelector(
  fromFeature.getBukubesarState,
  fromBukubesar.getBukuBesarIsLoaded
);
export const getBukubesarIsLoading = createSelector(
  fromFeature.getBukubesarState,
  fromBukubesar.getBukuBesarIsLoading
);

export const getAllBukubesar = createSelector(
  getBukubesarEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
export const getSelectedBukubesar = createSelector(
  fromFeature.getBukubesarState,
  fromBukubesar.getSelectedBukubesar
);
export const getBukubesarFilteredKelompok = createSelector(
  getAllBukubesar,
  fromKelompok.getSelectedKelompok,
  (bukubesar, selectedKelompok) => {
    if (selectedKelompok == undefined) {
      return bukubesar;
    }
    return bukubesar.filter(d => {
      return d.ACCKEL === selectedKelompok.ACCKEL;
    });
  }
);
