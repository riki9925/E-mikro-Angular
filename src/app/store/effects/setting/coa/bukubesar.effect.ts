import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

import { BukuBesarActionType } from '@app/store/actions';
import * as bukubesarAction from '@app/store/actions/setting/coa/bukubesar.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class BukubesarEffect {
  @Effect()
  loadBukubesar$ = this.actions$.ofType(BukuBesarActionType.LOAD_BUKUBESAR).pipe(
    switchMap(() => {
      return this.bukubesarService
        .getBukabesar()
        .pipe(
          map(bukubesar => new bukubesarAction.LoadBukuBesarSuccess(bukubesar)),
          catchError(error => of(new bukubesarAction.LoadBukuBesarFail(error)))
        );
    })
  );
  @Effect()
  addBukubesar$ = this.actions$.ofType(BukuBesarActionType.ADD_BUKUBESAR).pipe(
    map((action: bukubesarAction.AddBukuBesar) => action.payload),
    switchMap(bb => {
      return this.bukubesarService
        .createBukubesar(bb)
        .pipe(
          map(acc => new bukubesarAction.AddBukuBesarSuccess(acc)),
          catchError(error => of(new bukubesarAction.AddBukuBesarFail(error)))
        );
    })
  );
  @Effect()
  updateBukubesar$ = this.actions$.ofType(BukuBesarActionType.UPDATE_BUKUBESAR).pipe(
    map((action: bukubesarAction.UpdateBukuBesar) => action.payload),
    switchMap(bb => {
      return this.bukubesarService
        .updateBukubesar(bb)
        .pipe(
          map(acc => new bukubesarAction.UpdateBukuBesarSuccess(bb)),
          catchError(error => of(new bukubesarAction.UpdateBukuBesarFail(error)))
        );
    })
  );
  @Effect()
  deleteBukubesar$ = this.actions$.ofType(BukuBesarActionType.DELETE_BUKUBESAR).pipe(
    map((action: bukubesarAction.DeleteBukuBesar) => action.payload),
    switchMap(bb => {
      return this.bukubesarService
        .removeBukubesar(bb)
        .pipe(
          map(acc => new bukubesarAction.DeleteBukuBesarSuccess(bb)),
          catchError(error => of(new bukubesarAction.DeleteBukuBesarFail(error)))
        );
    })
  );
  @Effect({dispatch: false})
  createSuccess$ = this.actions$
    .ofType(
      BukuBesarActionType.ADD_BUKUBESAR_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Create Buku Besar Success'
        });
      })
    );
  @Effect({dispatch: false})
  updateSuccess$ = this.actions$
    .ofType(
      BukuBesarActionType.UPDATE_BUKUBESAR_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Update Buku Besar Success'
        });
      })
    );

  @Effect({dispatch: false})
  deleteSuccess$ = this.actions$
    .ofType(
      BukuBesarActionType.DELETE_BUKUBESAR_SUCCESS
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-success',
          message: 'Delete Buku Besar Success'
        });
      })
    );
  @Effect({dispatch: false})
  failActionSuccess$ = this.actions$
    .ofType(
      BukuBesarActionType.ADD_BUKUBESAR_FAIL,
      BukuBesarActionType.UPDATE_BUKUBESAR_FAIL,
      BukuBesarActionType.DELETE_BUKUBESAR_FAIL
    ).pipe(
      tap(() => {
        this.msgService.sendMessage({
          type: 'alert-danger',
          message: 'Action gagal di proses'
        });
      })
    );

  constructor(private actions$: Actions,
              private bukubesarService: fromServices.BukubesarService,
              private msgService: fromServices.MessageService) {
  }
}
