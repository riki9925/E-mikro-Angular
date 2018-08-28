import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

import * as fromRoot from '@app/store/';

import {AnggotaActionType} from '@app/store/actions';
import * as anggotaAction from '@app/store/actions/master/anggota.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class AnggotaEffect {
  @Effect()
  loadAnggota$ = this.actions$.ofType(AnggotaActionType.ANGGOTA_LOAD).pipe(
    switchMap(() => {
      return this.service
        .getAnggota()
        .pipe(
          map(data => new anggotaAction.AnggotaLoadSuccess(data)),
          catchError(error => of(new anggotaAction.AnggotaLoadFail(error)))
        );
    })
  );
  @Effect()
  addAnggota$ = this.actions$.ofType(AnggotaActionType.ANGGOTA_ADD).pipe(
    map((action: anggotaAction.AnggotaAdd) => action.payload),
    switchMap(bb => {
      return this.service
        .createAnggota(bb)
        .pipe(
          map(acc => new anggotaAction.AnggotaAddSuccess(acc)),
          catchError(error => of(new anggotaAction.AnggotaAddFail(error)))
        );
    })
  );
  @Effect()
  updateAnggota$ = this.actions$.ofType(AnggotaActionType.ANGGOTA_UPDATE).pipe(
    map((action: anggotaAction.AnggotaUpdate) => action.payload),
    switchMap(bb => {
      return this.service
        .updateAnggota(bb)
        .pipe(
          map(acc => new anggotaAction.AnggotaUpdateSuccess(bb)),
          catchError(error => of(new anggotaAction.AnggotaUpdateFail(error)))
        );
    })
  );
  @Effect()
  deleteAnggota$ = this.actions$.ofType(AnggotaActionType.ANGGOTA_DELETE).pipe(
    map((action: anggotaAction.AnggotaDelete) => action.payload),
    switchMap(bb => {
      return this.service
        .deleteAnggota(bb)
        .pipe(
          map(acc => new anggotaAction.AnggotaDeleteSuccess(bb)),
          catchError(error => of(new anggotaAction.AnggotaDeleteFail(error)))
        );
    })
  );
  @Effect({dispatch: false})
  createSuccess$ = this.actions$
    .ofType(
      AnggotaActionType.ANGGOTA_ADD_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Create Anggota Success'
        });
      })
    );
  @Effect({dispatch: false})
  updateSuccess$ = this.actions$
    .ofType(
      AnggotaActionType.ANGGOTA_UPDATE_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Update Anggota Success'
        });
      })
    );

  @Effect({dispatch: false})
  deleteSuccess$ = this.actions$
    .ofType(
      AnggotaActionType.ANGGOTA_DELETE_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Delete Anggota Success'
        });
      })
    );
  @Effect({dispatch: false})
  failSuccess$ = this.actions$
    .ofType(
      AnggotaActionType.ANGGOTA_DELETE_FAIL,
      AnggotaActionType.ANGGOTA_ADD_FAIL,
      AnggotaActionType.ANGGOTA_UPDATE_FAIL
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-danger',
          message: 'Action gagal di proses'
        });
      })
    );

  constructor(private actions$: Actions,
              private service: fromServices.AnggotaService,
              private msgService: fromServices.MessageService) {
  }
}
