import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';

import {ShuActionType} from '@app/store';
import * as shuAction from '@app/store/actions/system/shu.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class ShuEffect {
  @Effect()
  loadShu$ = this.actions$.ofType(ShuActionType.LOAD_SHU).pipe(
    switchMap(() => {
      return this.shuService
        .getShu()
        .pipe(
          map(data => new shuAction.LoadShuSuccess(data)),
          catchError(error => of(new shuAction.LoadShuFail(error)))
        );
    })
  );
  @Effect()
  updateShu$ = this.actions$.ofType(ShuActionType.UPDATE_SHU).pipe(
    map((action: shuAction.UpdateShu) => action.payload),
    switchMap(shu => {
      return this.shuService
        .updateShu(shu)
        .pipe(
          map(data => new shuAction.UpdateShuSuccess(shu)),
          catchError(error => of(new shuAction.UpdateShuFail(error)))
        );
    })
  );

  constructor(private actions$: Actions,
              private shuService: fromServices.ShuService) {
  }
}
