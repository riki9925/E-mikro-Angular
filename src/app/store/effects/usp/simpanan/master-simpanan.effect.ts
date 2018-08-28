import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {MasterSimpananActionType} from '@app/store/actions';
import * as masterAction from '@app/store/actions/usp/simpanan/master-simpanan.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class MasterSimpananEffect {
  @Effect()
  loadMasterSimpanan$ = this.actions$.ofType(MasterSimpananActionType.MASTER_SIMPANAN_LOAD).pipe(
    switchMap(() => {
      return this.service
        .getMasterSimpanan()
        .pipe(
          map(data => new masterAction.MasterSimpananLoadSuccess(data)),
          catchError(error => of(new masterAction.MasterSimpananLoadFail(error)))
        );
    })
  );
  @Effect()
  addMasterSimpanan$ = this.actions$.ofType(MasterSimpananActionType.MASTER_SIMPANAN_ADD).pipe(
    map((action: masterAction.MasterSimpananAdd) => action.payload),
    switchMap(bb => {
      return this.service
        .createMasterSimpanan(bb)
        .pipe(
          map(acc => new masterAction.MasterSimpananAddSuccess(acc)),
          catchError(error => of(new masterAction.MasterSimpananAddFail(error)))
        );
    })
  );
  @Effect()
  updateMasterSimpanan$ = this.actions$.ofType(MasterSimpananActionType.MASTER_SIMPANAN_UPDATE).pipe(
    map((action: masterAction.MasterSimpananUpdate) => action.payload),
    switchMap(bb => {
      return this.service
        .updateMasterSimpanan(bb)
        .pipe(
          map(acc => new masterAction.MasterSimpananUpdateSuccess(bb)),
          catchError(error => of(new masterAction.MasterSimpananUpdateFail(error)))
        );
    })
  );
  @Effect()
  deleteMasterSimpanan$ = this.actions$.ofType(MasterSimpananActionType.MASTER_SIMPANAN_DELETE).pipe(
    map((action: masterAction.MasterSimpananDelete) => action.payload),
    switchMap(bb => {
      return this.service
        .deleteMasterSimpanan(bb)
        .pipe(
          map(acc => new masterAction.MasterSimpananDeleteSuccess(bb)),
          catchError(error => of(new masterAction.MasterSimpananDeleteFail(error)))
        );
    })
  );
  @Effect({dispatch: false})
  createSuccess$ = this.actions$
    .ofType(
      MasterSimpananActionType.MASTER_SIMPANAN_ADD_SUCCESS
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
      MasterSimpananActionType.MASTER_SIMPANAN_UPDATE_SUCCESS
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
      MasterSimpananActionType.MASTER_SIMPANAN_DELETE_SUCCESS
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
      MasterSimpananActionType.MASTER_SIMPANAN_DELETE_FAIL,
      MasterSimpananActionType.MASTER_SIMPANAN_UPDATE_FAIL,
      MasterSimpananActionType.MASTER_SIMPANAN_ADD_FAIL
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-danger',
          message: 'Action gagal di proses'
        });
      })
    );


  constructor(private actions$: Actions,
              private service: fromServices.MasterSimpananService,
              private msgService: fromServices.MessageService) {
  }
}
