import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {JenisSimpanan} from '@app/models';
import {Store} from '@ngrx/store';
import * as fromStore from '@app/store';

@Component({
  selector: 'app-simpanan-setting',
  templateUrl: './simpanan-setting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpananSettingComponent implements OnInit {
  jenis$: Observable<JenisSimpanan[]>;
  loading$: Observable<boolean>;
  selectedJenis$: Observable<JenisSimpanan>;
  account$: Observable<any>;

  constructor(private store: Store<fromStore.RootState>) {
    this.jenis$ = this.store.select(fromStore.getAllJenisSimpanan);
    this.loading$ = this.store.select(fromStore.getJenisSimpananIsLoading);
    this.selectedJenis$ = this.store.select(fromStore.getSelectedJenisSimpanan);
    this.account$ = this.store.select(fromStore.getAccountEntity);
  }

  ngOnInit() {

  }

  onListEdit(item) {
    this.store.dispatch(new fromStore.JenisSimpananSelect(item));
  }

  onListDelete(item) {
    this.store.dispatch(new fromStore.JenisSimpananDelete(item));

  }

  onFormBatal() {
    this.store.dispatch(new fromStore.JenisSimpananSelect(null));
  }

  onFormCreate(item) {
    this.store.dispatch(new fromStore.JenisSimpananAdd(item));
  }

  onFormUpdate(item) {
    this.store.dispatch(new fromStore.JenisSimpananUpdate(item));
  }

  onListCreate() {
    const payload = <JenisSimpanan>{};
    this.store.dispatch(new fromStore.JenisSimpananSelect(payload));
  }
  refresh(){
    this.store.dispatch(new fromStore.MasterSimpananLoad);
  }
}
