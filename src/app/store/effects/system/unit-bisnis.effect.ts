import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';

import {UnitBisnisActionType} from '@app/store/';
import * as unitBisnis from '@app/store//actions';
import * as fromServices from '@app/core/services';

@Injectable()
export class UnitBisnisEffect {
  @Effect()
  loadUnitBisnis$ = this.actions$.ofType(UnitBisnisActionType.LOAD_UNIT_BISNIS).pipe(
    switchMap(() => {
      return this.unitBisnisService
        .getUnitBisnis()
        .pipe(
          map(data => new unitBisnis.LoadUnitBisnisSuccess(data)),
          catchError(error => of(new unitBisnis.LoadUnitBisnisFail(error)))
        );
    })
  );
  @Effect()
  updateUnitBisnis$ = this.actions$.ofType(UnitBisnisActionType.UPDATE_UNIT_BISNIS).pipe(
    map((action: unitBisnis.UpdateUnitBisnis) => action.payload),
    switchMap(data => {
      return this.unitBisnisService
        .updateUnitBisnis(data)
        .pipe(
          map(data => new unitBisnis.UpdateUnitBisnisSuccess(data)),
          catchError(error => of(new unitBisnis.UpdateUnitBisnisFail(error)))
        );
    })
  );

  constructor(private actions$: Actions,
              private unitBisnisService: fromServices.UnitBisnisService) {
  }
}
