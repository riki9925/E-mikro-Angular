import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as fromRoot from '@store/actions';
import {InstansiActionType} from '@store/actions';
import * as instansiAction from '@store/actions/master/instansi.action';
import * as fromServices from '@core/services';

@Injectable()
export class InstansiEffect {
  @Effect()
  loadInstansi$ = this.actions$.ofType(InstansiActionType.INSTANSI_LOAD).pipe(
    switchMap(() => {
      return this.service
        .getInstansi()
        .pipe(
          map(data => new instansiAction.InstansiLoadSuccess(data)),
          catchError(error => of(new instansiAction.InstansiLoadFail(error)))
        );
    })
  );
  @Effect()
  addInstansi$ = this.actions$.ofType(InstansiActionType.INSTANSI_ADD).pipe(
    map((action: instansiAction.InstansiAdd) => action.payload),
    switchMap(bb => {
      return this.service
        .createInstansi(bb)
        .pipe(
          map(acc => new instansiAction.InstansiAddSuccess(acc)),
          catchError(error => of(new instansiAction.InstansiAddFail(error)))
        );
    })
  );
  @Effect()
  updateInstansi$ = this.actions$.ofType(InstansiActionType.INSTANSI_UPDATE).pipe(
    map((action: instansiAction.InstansiUpdate) => action.payload),
    switchMap(bb => {
      return this.service
        .updateInstansi(bb)
        .pipe(
          map(acc => new instansiAction.InstansiUpdateSuccess(bb)),
          catchError(error => of(new instansiAction.InstansiUpdateFail(error)))
        );
    })
  );
  @Effect()
  deleteInstansi$ = this.actions$.ofType(InstansiActionType.INSTANSI_DELETE).pipe(
    map((action: instansiAction.InstansiDelete) => action.payload),
    switchMap(bb => {
      return this.service
        .deleteInstansi(bb)
        .pipe(
          map(acc => new instansiAction.InstansiDeleteSuccess(bb)),
          catchError(error => of(new instansiAction.InstansiDeleteFail(error)))
        );
    })
  );
  @Effect({dispatch: false})
  createSuccess$ = this.actions$
    .ofType(
      InstansiActionType.INSTANSI_ADD_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Create Instansi Success'
        });
      })
    );
  @Effect({dispatch: false})
  updateSuccess$ = this.actions$
    .ofType(
      InstansiActionType.INSTANSI_UPDATE_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Update Instansi Success'
        });
      })
    );

  @Effect({dispatch: false})
  deleteSuccess$ = this.actions$
    .ofType(
      InstansiActionType.INSTANSI_DELETE_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Delete Instansi Success'
        });
      })
    );
  @Effect({dispatch: false})
  failActionSuccess$ = this.actions$
    .ofType(
      InstansiActionType.INSTANSI_ADD_FAIL,
      InstansiActionType.INSTANSI_UPDATE_FAIL,
      InstansiActionType.INSTANSI_DELETE_FAIL
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-danger',
          message: 'Action gagal di proses'
        });
      })
    );
  constructor(private actions$: Actions,
              private service: fromServices.InstansiService,
              private msgService: fromServices.MessageService) {
  }
}
