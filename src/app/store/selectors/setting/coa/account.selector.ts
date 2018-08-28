import {createSelector} from '@ngrx/store';
import * as fromFeature from './../../../../store';
import * as fromAccount from './../../../reducers/setting/coa/account.reducer';
import * as fromBukubesar from './bukubesar.selector';
import * as fromUnitBisnis from './../../system/unit-bisnis.selector';

export const getAccountEntity = createSelector(
  fromFeature.getAccountState,
  fromAccount.getAccountEntity
);
export const getAccountIsLoaded = createSelector(
  fromFeature.getAccountState,
  fromAccount.getAccountIsLoaded
);
export const getAccountIsLoading = createSelector(
  fromFeature.getAccountState,
  fromAccount.getAccountIsLoading
);

export const getSelectedAccount = createSelector(
  fromFeature.getAccountState,
  fromAccount.getSelectedAccount
);

export const getAllAccount = createSelector(
  getAccountEntity,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getAccountFilteredBukubesar = createSelector(
  getAllAccount,
  fromBukubesar.getSelectedBukubesar,
  fromUnitBisnis.getSelectedUnitBisnis,
  (account, selectedBukubesar, ku) => {
    if (selectedBukubesar == undefined) {
      return account;
    }
    if (ku == undefined) {
      return account;
    }
    return account.filter(d => {
      return d.ACCBB === selectedBukubesar.ACCBB && d.KU === ku.KU;
    });
  }
);
