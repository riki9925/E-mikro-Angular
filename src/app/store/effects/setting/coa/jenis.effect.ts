import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';
import {JenisActionType} from '@app/store/actions';
import * as jenisAction from '@app/store/actions/setting/coa/jenis.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class JenisEffect {
  @Effect()
  loadJenis$ = this.actions$.ofType(JenisActionType.LOAD_JENIS_ACCOUNT).pipe(
    switchMap(() => {
      return this.jenisService
        .getJenis()
        .pipe(
          map(account => new jenisAction.LoadJenisAccountSuccess(account)),
          catchError(error => of(new jenisAction.LoadJenisAccountFail(error)))
        );
    })
  );

  constructor(private actions$: Actions,
              private jenisService: fromServices.JenisService) {
  }

}
