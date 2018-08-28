import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild} from '@angular/router';

import {Store} from '@ngrx/store';
import {forkJoin} from 'rxjs/observable/forkJoin';

import {Observable} from 'rxjs/Observable';
import {filter, map, take, tap} from 'rxjs/operators';
import * as fromRoot from '@app/store';

@Injectable()
export class CoaIsLoadedGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store<fromRoot.RootState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return forkJoin([this.checkAccount(), this.checkJenis(), this.checkKelompok(), this.checkBukubesar()]).pipe(
      map(x => {
        if (x[0] === false) {
          this.store.dispatch(new fromRoot.Back());
        }
        return x[0];
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> {
    return forkJoin([this.checkAccount(), this.checkJenis(), this.checkKelompok(), this.checkBukubesar()]).pipe(
      map(x => {
        if (x[0] === false) {
          this.store.dispatch(new fromRoot.Back());
        }
        return x[0];
      })
    );
  }

  checkAccount(): Observable<boolean> {
    return this.store.select(fromRoot.getAccountIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadAccount());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkBukubesar(): Observable<boolean> {
    return this.store.select(fromRoot.getBukubesarIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadBukuBesar());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkKelompok(): Observable<boolean> {
    return this.store.select(fromRoot.getKelompokIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadKelompokAccount());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  checkJenis(): Observable<boolean> {
    return this.store.select(fromRoot.getJenisIsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadJenisAccount());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
