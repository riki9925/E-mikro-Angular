import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {JenisSimpananActionType} from '@app/store/actions';
import * as instansiAction from '@app/store/actions/usp/simpanan/jenis-simpanan.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class JenisSimpananEffect {
  @Effect()
  loadJenisSimpanan$ = this.actions$.ofType(JenisSimpananActionType.JENIS_SIMPANAN_LOAD).pipe(
    switchMap(() => {
      return this.service
        .getJenisSimpanan()
        .pipe(
          map(data => new instansiAction.JenisSimpananLoadSuccess(data)),
          catchError(error => of(new instansiAction.JenisSimpananLoadFail(error)))
        );
    })
  );
  @Effect()
  addJenisSimpanan$ = this.actions$.ofType(JenisSimpananActionType.JENIS_SIMPANAN_ADD).pipe(
    map((action: instansiAction.JenisSimpananAdd) => action.payload),
    switchMap(bb => {
      return this.service
        .createJenisSimpanan(bb)
        .pipe(
          map(acc => new instansiAction.JenisSimpananAddSuccess(acc)),
          catchError(error => of(new instansiAction.JenisSimpananAddFail(error)))
        );
    })
  );
  @Effect()
  updateJenisSimpanan$ = this.actions$.ofType(JenisSimpananActionType.JENIS_SIMPANAN_UPDATE).pipe(
    map((action: instansiAction.JenisSimpananUpdate) => action.payload),
    switchMap(bb => {
      return this.service
        .updateJenisSimpanan(bb)
        .pipe(
          map(acc => new instansiAction.JenisSimpananUpdateSuccess(bb)),
          catchError(error => of(new instansiAction.JenisSimpananUpdateFail(error)))
        );
    })
  );
  @Effect()
  deleteJenisSimpanan$ = this.actions$.ofType(JenisSimpananActionType.JENIS_SIMPANAN_DELETE).pipe(
    map((action: instansiAction.JenisSimpananDelete) => action.payload),
    switchMap(bb => {
      return this.service
        .deleteJenisSimpanan(bb)
        .pipe(
          map(acc => new instansiAction.JenisSimpananDeleteSuccess(bb)),
          catchError(error => of(new instansiAction.JenisSimpananDeleteFail(error)))
        );
    })
  );
  @Effect({dispatch: false})
  createSuccess$ = this.actions$
    .ofType(
      JenisSimpananActionType.JENIS_SIMPANAN_ADD_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Create Jenis Simpanan Success'
        });
      })
    );
  @Effect({dispatch: false})
  updateSuccess$ = this.actions$
    .ofType(
      JenisSimpananActionType.JENIS_SIMPANAN_UPDATE_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Update Jenis Simpanan Success'
        });
      })
    );

  @Effect({dispatch: false})
  deleteSuccess$ = this.actions$
    .ofType(
      JenisSimpananActionType.JENIS_SIMPANAN_DELETE_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Delete Jenis Simpanan Success'
        });
      })
    );
  @Effect({dispatch: false})
  failActionSuccess$ = this.actions$
    .ofType(
      JenisSimpananActionType.JENIS_SIMPANAN_ADD_FAIL,
      JenisSimpananActionType.JENIS_SIMPANAN_UPDATE_FAIL,
      JenisSimpananActionType.JENIS_SIMPANAN_DELETE_FAIL
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-danger',
          message: 'Action gagal di proses'
        });
      })
    );

  constructor(private actions$: Actions,
              private service: fromServices.JenisSimpananService,
              private msgService: fromServices.MessageService) {
  }
}
