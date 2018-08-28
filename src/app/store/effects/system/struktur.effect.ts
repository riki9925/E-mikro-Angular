import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';

import {StrukturActionType} from '@app/store/';
import * as struktuAction from '@app/store/actions/system/struktur.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class StrukturEffect {
  @Effect()
  loadStruktur$ = this.actions$.ofType(StrukturActionType.LOAD_STRUKTUR).pipe(
    switchMap(() => {
      return this.strukturService
        .getStruktur()
        .pipe(
          map(data => new struktuAction.LoadStrukturSuccess(data)),
          catchError(error => of(new struktuAction.LoadStrukturFail(error)))
        );
    })
  );
  @Effect()
  updateStruktur$ = this.actions$.ofType(StrukturActionType.UPDATE_STRUKTUR).pipe(
    map((action: struktuAction.UpdateStruktur) => action.payload),
    switchMap(struktur => {
      return this.strukturService
        .updateStruktur(struktur)
        .pipe(
          map(data => new struktuAction.UpdateStrukturSuccess(data)),
          catchError(error => of(new struktuAction.UpdateStrukturFail(error)))
        );
    })
  );

  constructor(private actions$: Actions,
              private strukturService: fromServices.StrukturService) {
  }
}
