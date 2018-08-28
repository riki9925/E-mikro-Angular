import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UnitBisnis} from '@app/models';
import {Store} from '@ngrx/store';
import * as fromStore from '@app/store';

@Component({
  selector: 'app-unit-bisnis',
  templateUrl: 'unit-bisnis.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitBisnisComponent implements OnInit {
  jenis$: Observable<string[]>;
  unit$: Observable<UnitBisnis[]>;
  loading$: Observable<boolean>;
  selected$: Observable<UnitBisnis>;

  constructor(private store: Store<fromStore.RootState>) {
    this.unit$ = this.store.select(fromStore.getAllUnitBisnis);
    this.jenis$ = this.store.select(fromStore.getUnitJenis);
    this.loading$ = this.store.select(fromStore.getUnitBisnisIsLoading);
    this.selected$ = this.store.select(fromStore.getSelectedUnitBisnis);
  }

  ngOnInit() {
  }

  update($event) {
    this.store.dispatch(new fromStore.SelectUnitBisnis($event));
  }

  save($event) {
    this.store.dispatch(new fromStore.UpdateUnitBisnis($event));
  }

  cancle() {
    this.store.dispatch(new fromStore.SelectUnitBisnis(null));
  }
}
