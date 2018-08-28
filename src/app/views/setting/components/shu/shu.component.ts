import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '@app/store/';
import {Shu} from '@app/models/';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-shu',
  templateUrl: 'shu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShuComponent implements OnInit {

  loading$: Observable<boolean>;
  shu$: Observable<Shu>;

  constructor(private store: Store<fromStore.RootState>) {
  }

  ngOnInit() {
    this.shu$ = this.store.select(fromStore.getShu);
    this.loading$ = this.store.select(fromStore.getShuIsLoading);
  }

  save(data) {
    this.store.dispatch(new fromStore.UpdateShu(data));
  }

  back() {
    this.store.dispatch(new fromStore.Back());
  }
}
