import {createSelector} from '@ngrx/store';
import * as fromRoot from './../../reducers';


export const getLoginSession = createSelector(
  fromRoot.getLoginState,
  (state) => state.session
);
export const getLoginAuthToken = createSelector(
  getLoginSession,
  (state) => state.token
);
export const getLoginErrorMessage = createSelector(
  fromRoot.getLoginState,
  (state) => state.errorMessage
);
export const getLoginIsLogedIn = createSelector(
  fromRoot.getLoginState,
  (state) => state.isLogedIn
);
export const getLoginIsLoading = createSelector(
  fromRoot.getLoginState,
  (state) => state.isLoading
);
