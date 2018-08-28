import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';

import {KelompokActionType} from '@app/store/actions';
import * as kelompokAction from '@app/store/actions/setting/coa/kelompok.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class KelompokEffect {
  @Effect()
  loadJenis$ = this.actions$.ofType(KelompokActionType.LOAD_KELOMPOK_ACCOUNT).pipe(
    switchMap(() => {
      return this.kelompokService
        .getKelompok()
        .pipe(
          map(kelompok => new kelompokAction.LoadKelompokAccountSuccess(kelompok)),
          catchError(error => of(new kelompokAction.LoadKelompokAccountFail(error)))
        );
    })
  );

  constructor(private actions$: Actions,
              private kelompokService: fromServices.KelompokService) {
  }

}
