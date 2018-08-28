import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild} from '@angular/router';

import {Store} from '@ngrx/store';
import {forkJoin} from 'rxjs/observable/forkJoin';

import {Observable} from 'rxjs/Observable';
import {filter, map, take, tap} from 'rxjs/operators';
import * as fromRoot from '@app/store';

@Injectable()
export class MasterIsLoadedGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store<fromRoot.RootState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return forkJoin([
      this.checkPekerjaan(),
      this.checkAgama(),
      this.checkJabatan(),
      this.checkPendidikan(),
      this.checkGolongan(),
      this.checkHubunganKeluarga(),
      this.checkIdentitas(),
      this.checkStruktur(),
      this.checkShu(),
      this.checkUnitBisnis(),
      this.checkInstansi(),
      this.checkAnggota(),
      this.checkJenisSimpanan(),
      this.checkMasterSimpanan()
    ]).pipe(
      map(x => {
        if (x[0] === false) {
          this.store.dispatch(new fromRoot.Back());
        }
        return x[0];
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> {
    return forkJoin([
      this.checkPekerjaan(),
      this.checkAgama(),
      this.checkJabatan(),
      this.checkPendidikan(),
      this.checkGolongan(),
      this.checkHubunganKeluarga(),
      this.checkIdentitas(),
      this.checkStruktur(),
      this.checkShu(),
      this.checkUnitBisnis(),
      this.checkInstansi(),
      this.checkAnggota(),
      this.checkJenisSimpanan(),
      this.checkMasterSimpanan()
    ]).pipe(
      map(x => {
        if (x[0] === false) {
          this.store.dispatch(new fromRoot.Back());
        }
        return x[0];
      })
    );
  }

  checkJenisSimpanan(): Observable<boolean> {
    return this.store.select(fromRoot.getJenisSimpananIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.JenisSimpananLoad());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkMasterSimpanan(): Observable<boolean> {
    return this.store.select(fromRoot.getMasterSimpananIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.MasterSimpananLoad());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkInstansi(): Observable<boolean> {
    return this.store.select(fromRoot.getInstansiIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.AnggotaLoad());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkAnggota(): Observable<boolean> {
    return this.store.select(fromRoot.getAnggotaIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.InstansiLoad());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkStruktur(): Observable<boolean> {
    return this.store.select(fromRoot.getStrukturIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadStruktur());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkUnitBisnis(): Observable<boolean> {
    return this.store.select(fromRoot.getUnitBisnisIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadUnitBisnis());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkShu(): Observable<boolean> {
    return this.store.select(fromRoot.getShuIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadShu());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkIdentitas(): Observable<boolean> {
    return this.store.select(fromRoot.getIdentitasIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadIdentitas());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkPendidikan(): Observable<boolean> {
    return this.store.select(fromRoot.getPendidikanIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadPendidikan());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkGolongan(): Observable<boolean> {
    return this.store.select(fromRoot.getGolonganIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadGolongan());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkPekerjaan(): Observable<boolean> {
    return this.store.select(fromRoot.getPekerjaanIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadPekerjaan());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkJabatan(): Observable<boolean> {
    return this.store.select(fromRoot.getJabatanIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadJabatan());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkAgama(): Observable<boolean> {
    return this.store.select(fromRoot.getAgamaIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadAgama());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkHubunganKeluarga(): Observable<boolean> {
    return this.store.select(fromRoot.getHubunganKeluargaIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadHubunganKeluarga());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
