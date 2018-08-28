import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';

import {MasterActionType} from '@app/store/';
import * as masterAction from '@app/store/actions/system/master.action';
import * as fromServices from '@app/core/services';

@Injectable()
export class MasterEffect {
  @Effect()
  loadPendidikan$ = this.actions$.ofType(MasterActionType.MASTER_LOAD_PENDIDIKAN).pipe(
    switchMap(() => {
      return this.masterService
        .getAllPendidikan()
        .pipe(
          map(data => new masterAction.LoadPendidikanSuccess(data)),
          catchError(error => of(new masterAction.LoadPendidikanFail(error)))
        );
    })
  );
  @Effect()
  loadGolongan$ = this.actions$.ofType(MasterActionType.MASTER_LOAD_GOLONGAN).pipe(
    switchMap(() => {
      return this.masterService
        .getAllGolongan()
        .pipe(
          map(data => new masterAction.LoadGolonganSuccess(data)),
          catchError(error => of(new masterAction.LoadGolonganFail(error)))
        );
    })
  );
  @Effect()
  loadPekerjaan$ = this.actions$.ofType(MasterActionType.MASTER_LOAD_PEKERJAAN).pipe(
    switchMap(() => {
      return this.masterService
        .getAllPekerjaan()
        .pipe(
          map(data => new masterAction.LoadPekerjaanSuccess(data)),
          catchError(error => of(new masterAction.LoadPekerjaanFail(error)))
        );
    })
  );
  @Effect()
  loadHubunganKeluarga$ = this.actions$.ofType(MasterActionType.MASTER_LOAD_HUB_KELUARGA).pipe(
    switchMap(() => {
      return this.masterService
        .getAllHubunganKeluarga()
        .pipe(
          map(data => new masterAction.LoadHubunganKeluargaSuccess(data)),
          catchError(error => of(new masterAction.LoadHubunganKeluargaFail(error)))
        );
    })
  );
  @Effect()
  loadAgama$ = this.actions$.ofType(MasterActionType.MASTER_LOAD_AGAMA).pipe(
    switchMap(() => {
      return this.masterService
        .getAllAgama()
        .pipe(
          map(data => new masterAction.LoadAgamaSuccess(data)),
          catchError(error => of(new masterAction.LoadAgamaFail(error)))
        );
    })
  );
  @Effect()
  loadJabatan$ = this.actions$.ofType(MasterActionType.MASTER_LOAD_JABATAN).pipe(
    switchMap(() => {
      return this.masterService
        .getAllJabatan()
        .pipe(
          map(data => new masterAction.LoadJabatanSuccess(data)),
          catchError(error => of(new masterAction.LoadJabatanFail(error)))
        );
    })
  );
  @Effect()
  loadIdentitas$ = this.actions$.ofType(MasterActionType.MASTER_LOAD_IDENTITAS).pipe(
    switchMap(() => {
      return this.masterService
        .getAllIdentitas()
        .pipe(
          map(data => new masterAction.LoadIdentitasSuccess(data)),
          catchError(error => of(new masterAction.LoadIdentitasFail(error)))
        );
    })
  );

  constructor(private actions$: Actions,
              private masterService: fromServices.MasterService) {
  }


}
