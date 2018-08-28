import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MasterSimpanan} from '@app/models';
import {Store} from '@ngrx/store';
import * as fromStore from '@app/store';

@Component({
  selector: 'app-pendebetan-bunga-jasa',
  templateUrl: './pendebetan-bunga-jasa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendebetanBungaJasaComponent implements OnInit {
  master$: Observable<MasterSimpanan[]>;
  jenis$: Observable<any>;

  constructor(private store: Store<fromStore.RootState>) {
    this.master$ = this.store.select(fromStore.getAllMasterSimpanan);
    this.jenis$ = this.store.select(fromStore.getAllJenisSimpanan);
  }

  ngOnInit() {

  }
  refresh(){
    this.store.dispatch(new fromStore.MasterSimpananLoad);
  }
}
