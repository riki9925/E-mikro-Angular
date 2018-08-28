import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../store';
import * as fromMaster from './../../reducers/system/master.reducer';

/**
 * Agama selector
 */
export const getAgamaState = createSelector(
  fromFeature.getMasterState,
  fromMaster.getAgamaState
);

export const getAgamaEntity = createSelector(
  getAgamaState,
  state => state.entities
);
export const getAgamaIsLoaded = createSelector(
  getAgamaState,
  state => state.isLoaded
);

export const getAgamaIsLoading = createSelector(
  getAgamaState,
  state => state.isLoading
);

export const getSelectedAgama = createSelector(
  getAgamaState,
  state => state.selected
);
export const getAllAgama = createSelector(
  getAgamaEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
/**
 * golongan selector
 */
export const getGolonganState = createSelector(
  fromFeature.getMasterState,
  fromMaster.getGolonganState
);

export const getGolonganEntity = createSelector(
  getGolonganState,
  state => state.entities
);
export const getGolonganIsLoaded = createSelector(
  getGolonganState,
  state => state.isLoaded
);

export const getGolonganIsLoading = createSelector(
  getGolonganState,
  state => state.isLoading
);

export const getSelectedGolongan = createSelector(
  getGolonganState,
  state => state.selected
);
export const getAllGolongan = createSelector(
  getGolonganEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

/**
 * Pendidikan selector
 */
export const getPendidikanState = createSelector(
  fromFeature.getMasterState,
  fromMaster.getPendidikanState
);

export const getPendidikanEntity = createSelector(
  getPendidikanState,
  state => state.entities
);
export const getPendidikanIsLoaded = createSelector(
  getPendidikanState,
  state => state.isLoaded
);

export const getPendidikanIsLoading = createSelector(
  getPendidikanState,
  state => state.isLoading
);

export const getSelectedPendidikan = createSelector(
  getPendidikanState,
  state => state.selected
);
export const getAllPendidikan = createSelector(
  getPendidikanEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
/**
 * Pekerjaan selector
 */
export const getPekerjaanState = createSelector(
  fromFeature.getMasterState,
  fromMaster.getPekerjaanState
);

export const getPekerjaanEntity = createSelector(
  getPekerjaanState,
  state => state.entities
);
export const getPekerjaanIsLoaded = createSelector(
  getPekerjaanState,
  state => state.isLoaded
);

export const getPekerjaannIsLoading = createSelector(
  getPekerjaanState,
  state => state.isLoading
);

export const getSelectedPekerjaan = createSelector(
  getPekerjaanState,
  state => state.selected
);
export const getAllPekerjaan = createSelector(
  getPekerjaanEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

/**
 * Jabatan selector
 */
export const getJabatanState = createSelector(
  fromFeature.getMasterState,
  fromMaster.getJabatanState
);

export const getJabatanEntity = createSelector(
  getJabatanState,
  state => state.entities
);
export const getJabatanIsLoaded = createSelector(
  getJabatanState,
  state => state.isLoaded
);

export const getJabatanIsLoading = createSelector(
  getJabatanState,
  state => state.isLoading
);

export const getSelectedJabatan = createSelector(
  getJabatanState,
  state => state.selected
);
export const getAllJabatan = createSelector(
  getJabatanEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

/**
 * hubungan keluarga selector
 */
export const getHubunganKeluargaState = createSelector(
  fromFeature.getMasterState,
  fromMaster.getHubKeluargaState
);

export const getHubunganKeluargaEntity = createSelector(
  getHubunganKeluargaState,
  state => state.entities
);
export const getHubunganKeluargaIsLoaded = createSelector(
  getHubunganKeluargaState,
  state => state.isLoaded
);

export const getHubunganKeluargaIsLoading = createSelector(
  getHubunganKeluargaState,
  state => state.isLoading
);

export const getSelectedHubunganKeluarga = createSelector(
  getHubunganKeluargaState,
  state => state.selected
);
export const getAllHubunganKeluarga = createSelector(
  getHubunganKeluargaEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

/**
 * Identitas selector
 */
export const getIdentitasState = createSelector(
  fromFeature.getMasterState,
  fromMaster.getIdentitasState
);

export const getIdentitasEntity = createSelector(
  getIdentitasState,
  state => state.entities
);
export const getIdentitasIsLoaded = createSelector(
  getIdentitasState,
  state => state.isLoaded
);

export const getIdentitasIsLoading = createSelector(
  getIdentitasState,
  state => state.isLoading
);

export const getSelectedIdentitas = createSelector(
  getIdentitasState,
  state => state.selected
);
export const getAllIdentitas = createSelector(
  getIdentitasEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
