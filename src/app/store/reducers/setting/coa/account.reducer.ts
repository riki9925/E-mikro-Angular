import {Account} from './../../../../models';
import {AccountActions, AccountActionType} from './../../../actions';

export interface AccountState {
  entities: { [id: number]: Account };
  isLoaded: boolean;
  isLoading: boolean;
  selectedAccount: Account;
  errorMessage: string;
}


const initialState: AccountState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
  selectedAccount: null,
  errorMessage: null,
};

export function accountReducer(state: AccountState = initialState,
                               action: AccountActions): AccountState {
  let accounts;
  let entities;
  switch (action.type) {
    case AccountActionType.LOAD_ACCOUNT:
      return {
        ...state,
        isLoading: true
      };
    case AccountActionType.LOAD_ACCOUNT_SUCCESS:
      accounts = action.payload;

      entities = accounts.reduce(
        (entities: { [id: number]: Account }, account: Account) => {
          return {
            ...entities,
            [account.ACC]: account,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        selectedAccount: null,
        isLoading: false,
        isLoaded: true,
        entities
      };
    case AccountActionType.LOAD_ACCOUNT_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        errorMessage: action.payload
      };
    case AccountActionType.ADD_ACCOUNT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case AccountActionType.UPDATE_ACCOUNT_SUCCESS:
    case AccountActionType.ADD_ACCOUNT_SUCCESS: {
      accounts = action.payload;
      entities = {
        ...state.entities,
        [accounts.ACC]: accounts,
      };
      return {
        ...state,
        selectedAccount: null,
        isLoading: false,
        entities
      };
    }
    case AccountActionType.ADD_ACCOUNT_FAIL:
    case AccountActionType.UPDATE_ACCOUNT_FAIL:
    case AccountActionType.DELETE_ACCOUNT_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case AccountActionType.SELECT_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.payload
      };
    case AccountActionType.DELETE_ACCOUNT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case AccountActionType.DELETE_ACCOUNT_SUCCESS: {
      const account = action.payload;
      const {[account.ACC]: removed, ...entities} = state.entities;
      return {
        ...state,
        selectedAccount: null,
        isLoading: false,
        entities,
      };
    }
    default:
      return state;
  }
}

export const getAccountEntity = (state: AccountState) => state.entities;
export const getAccountIsLoading = (state: AccountState) => state.isLoading;
export const getAccountIsLoaded = (state: AccountState) => state.isLoaded;
export const getSelectedAccount = (state: AccountState) => state.selectedAccount;
