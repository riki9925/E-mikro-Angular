import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';
import {LoginActionType} from '@app/store/actions';
import * as loginAction from '@app/store/';
import * as fromServices from '@app/core/services';

@Injectable()
export class LoginEffect {
  @Effect()
  performLogin$ = this.actions$.ofType(LoginActionType.PERFORM_LOGIN).pipe(
    map((action: loginAction.PerformLogin) => action.payload),
    switchMap(payload => {
      return this.authService
        .performLogin(payload)
        .pipe(
          map(account => {
            localStorage.setItem('session', JSON.stringify(account));
            return new loginAction.PerformLoginSuccess(account);
          }),
          catchError(error => of(new loginAction.PerformLoginFail(error)))
        );
    })
  );
  @Effect()
  performLoginSuccess$ = this.actions$
    .ofType(LoginActionType.PERFORM_LOGIN_SUCCESS)
    .pipe(
      map(account => {
        return new loginAction.Go({
          path: ['/dashboard', {}],
        });
      })
    );
  @Effect()
  performLogoutSuccess$ = this.actions$
    .ofType(LoginActionType.PERFORM_LOGOUT)
    .pipe(
      map(account => {
        return new loginAction.Go({
          path: ['/auth', {}],
        });
      })
    );

  constructor(private actions$: Actions,
              private authService: fromServices.AuthService) {
  }
}
