import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {AccountActionType} from '@app/store/actions';
import * as accountAction from '@app/store/actions/setting/coa/account.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class AccountEffect {
  @Effect()
  loadAccount$ = this.actions$.ofType(AccountActionType.LOAD_ACCOUNT).pipe(
    switchMap(() => {
      return this.accountService
        .getAccount()
        .pipe(
          map(account => new accountAction.LoadAccountSuccess(account)),
          catchError(error => of(new accountAction.LoadAccountFail(error)))
        );
    })
  );
  @Effect()
  addAccount$ = this.actions$.ofType(AccountActionType.ADD_ACCOUNT).pipe(
    map((action: accountAction.AddAccount) => action.payload),
    switchMap(account => {
      return this.accountService
        .createAccount(account)
        .pipe(
          map(acc => new accountAction.AddAccountSuccess(acc)),
          map(acc => new accountAction.LoadAccount()),
          catchError(error => of(new accountAction.AddAccountFail(error)))
        );
    })
  );
  @Effect()
  updateAccount$ = this.actions$.ofType(AccountActionType.UPDATE_ACCOUNT).pipe(
    map((action: accountAction.UpdateAccount) => action.payload),
    switchMap(bb => {
      return this.accountService
        .updateAccount(bb)
        .pipe(
          map(acc => new accountAction.UpdateAccountSuccess(acc)),
          map(acc => new accountAction.LoadAccount()),
          catchError(error => of(new accountAction.UpdateAccountFail(error)))
        );
    })
  );
  @Effect({dispatch: false})
  createSuccess$ = this.actions$
    .ofType(
      AccountActionType.ADD_ACCOUNT_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Create Account Success'
        });
      })
    );
  @Effect({dispatch: false})
  updateSuccess$ = this.actions$
    .ofType(
      AccountActionType.UPDATE_ACCOUNT_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Update Account Success'
        });
      })
    );

  @Effect({dispatch: false})
  deleteSuccess$ = this.actions$
    .ofType(
      AccountActionType.DELETE_ACCOUNT_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Delete Account Success'
        });
      })
    );
  @Effect({dispatch: false})
  failActionSuccess$ = this.actions$
    .ofType(
      AccountActionType.ADD_ACCOUNT_FAIL,
      AccountActionType.UPDATE_ACCOUNT_FAIL,
      AccountActionType.DELETE_ACCOUNT_FAIL
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-danger',
          message: 'Action gagal di proses'
        });
      })
    );

  constructor(private actions$: Actions,
              private accountService: fromServices.AccountService,
              private msgService: fromServices.MessageService) {
  }
}
