import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Instansi} from '@app/models/index';
import * as fromStore from '@app/store';

@Component({
  selector: 'app-instansi',
  templateUrl: 'instansi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InstansiComponent implements OnInit {
  instansi$: Observable<Instansi[]>;
  selectedInstansi$: Observable<Instansi>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromStore.RootState>) {
  }

  ngOnInit() {
    this.instansi$ = this.store.select(fromStore.getAllInstansi);
    this.selectedInstansi$ = this.store.select(fromStore.getSelectedInstansi);
    this.loading$ = this.store.select(fromStore.getInstansiIsLoading);
  }

  edit(item) {
    this.store.dispatch(new fromStore.InstansiSelect(item));
  }

  delete(item) {

  }

  save(item) {
    this.store.dispatch(new fromStore.InstansiAdd(item));
  }

  update(item) {
    this.store.dispatch(new fromStore.InstansiUpdate(item));
  }

  batal() {
    this.store.dispatch(new fromStore.InstansiSelect(null));
  }

  create() {
    this.store.dispatch(new fromStore.InstansiSelect({}));
  }

}
