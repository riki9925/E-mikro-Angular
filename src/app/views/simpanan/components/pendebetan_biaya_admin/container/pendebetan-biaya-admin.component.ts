import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Account, Anggota, Instansi, JenisSimpanan, MasterSimpanan} from '@app/models';
import {Store} from '@ngrx/store';
import * as fromStore from '@app/store';

@Component({
  selector: 'app-pendebetan-biaya-admin',
  templateUrl: './pendebetan-biaya-admin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendebetanBiayaAdminComponent implements OnInit {
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
