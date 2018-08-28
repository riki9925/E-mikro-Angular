import {ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer,} from '@ngrx/store';
import {environment} from './../../../environments/environment';
import {RouterStateUrl} from './../utils';
import * as fromRouter from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';
import * as fromCore from './core';
import * as fromSetting from './setting';
import * as fromSystem from './system';
import * as fromMaster from './master';
import * as fromUsp from './usp';


export interface RootState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  login: fromCore.LoginState;
  jenis: fromSetting.JenisState;
  kelompok: fromSetting.KelompokState;
  bukubesar: fromSetting.BukuBesarState;
  account: fromSetting.AccountState;
  master: fromSystem.MasterState;
  shu: fromSystem.ShuState,
  struktur: fromSystem.StrukturState,
  unit: fromSystem.UnitBisnisState,
  anggota: fromMaster.AnggotaState,
  instansi: fromMaster.InstansiState,
  simpanan_jenis: fromUsp.JenisSimpananState,
  simpanan_master: fromUsp.MasterSimpananState
}

export const reducers: ActionReducerMap<RootState> = {
  routerReducer: fromRouter.routerReducer,
  login: fromCore.loginReducer,
  jenis: fromSetting.jenisReducer,
  kelompok: fromSetting.kelompokReducer,
  bukubesar: fromSetting.bukubesarReducer,
  account: fromSetting.accountReducer,
  master: fromSystem.masterReducer,
  shu: fromSystem.shuReducer,
  struktur: fromSystem.strukturReducer,
  unit: fromSystem.unitBisnisReducer,
  anggota: fromMaster.anggotaReducer,
  instansi: fromMaster.instansiReducer,
  simpanan_jenis: fromUsp.jenisSimpananReducer,
  simpanan_master: fromUsp.masterSimpananReducer
};

export function logger(reducer: ActionReducer<RootState>): ActionReducer<RootState> {
  return function (state: RootState, action: any): RootState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const getRootState = createFeatureSelector<RootState>('');
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');
export const getLoginState = createFeatureSelector<fromCore.LoginState>('login');
export const getJenisState = createFeatureSelector<fromSetting.JenisState>('jenis');
export const getKelompokState = createFeatureSelector<fromSetting.KelompokState>('kelompok');
export const getBukubesarState = createFeatureSelector<fromSetting.BukuBesarState>('bukubesar');
export const getAccountState = createFeatureSelector<fromSetting.AccountState>('account');
export const getMasterState = createFeatureSelector<fromSystem.MasterState>('master');
export const getShuState = createFeatureSelector<fromSystem.ShuState>('shu');
export const getUnitState = createFeatureSelector<fromSystem.UnitBisnisState>('unit');
export const getStrukturState = createFeatureSelector<fromSystem.StrukturState>('struktur');
export const getAnggotaState = createFeatureSelector<fromMaster.AnggotaState>('anggota');
export const getInstansiState = createFeatureSelector<fromMaster.InstansiState>('instansi');
export const getJenisSimpananState = createFeatureSelector<fromUsp.JenisSimpananState>('simpanan_jenis');
export const getMasterSimpananState = createFeatureSelector<fromUsp.MasterSimpananState>('simpanan_master');

export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? [storeFreeze]
  : [];
