import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild} from '@angular/router';

import {Store} from '@ngrx/store';
import {forkJoin} from 'rxjs/observable/forkJoin';

import {Observable} from 'rxjs/Observable';
import {filter, map, take, tap} from 'rxjs/operators';
import * as fromRoot from '@app/store';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store<fromRoot.RootState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    return true;
  }
}
