import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Component, OnInit, ViewChild} from '@angular/core';
import * as fromStore from '@app/store';
import {Account, BukuBesar, Jenis, Kelompok, UnitBisnis} from '@app/models';

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html'
})

export class AccountComponent implements OnInit {
  @ViewChild('modal') modal;
  loading$: Observable<boolean>;
  jenis$: Observable<Jenis[]>;
  kelompok$: Observable<Kelompok[]>;
  bukubesar$: Observable<BukuBesar[]>;
  account$: Observable<Account[]>;
  selectedAccount$: Observable<Account>;
  selectedBukubesar$: Observable<BukuBesar>;
  unit$: Observable<UnitBisnis[]>;

  constructor(private store: Store<fromStore.RootState>) {
  }

  ngOnInit() {
    this.jenis$ = this.store.select(fromStore.getAllJenis);
    this.kelompok$ = this.store.select(fromStore.getKelompokFilteredJenis);
    this.bukubesar$ = this.store.select(fromStore.getBukubesarFilteredKelompok);
    this.account$ = this.store.select(fromStore.getAccountFilteredBukubesar);
    this.selectedAccount$ = this.store.select(fromStore.getSelectedAccount);
    this.selectedBukubesar$ = this.store.select(fromStore.getSelectedBukubesar);
    this.loading$ = this.store.select(fromStore.getAccountIsLoading);
    this.unit$ = this.store.select(fromStore.getActiveUnitBisnis);
  }

  onJenisChange($event) {
    this.store.dispatch(new fromStore.SelectJenisAccount($event));
  }

  onKelompokChange($event) {
    this.store.dispatch(new fromStore.SelectKelompokAccount($event));
  }

  onBukubesarChange($event) {
    this.store.dispatch(new fromStore.SelectBukubesar($event));
  }

  onUnitBisnisChange($event) {
    this.store.dispatch(new fromStore.SelectUnitBisnis($event));
  }

  createAccount($event) {
    this.store.dispatch(new fromStore.AddAccount($event));
  }

  updateAccount($event) {
    this.store.dispatch(new fromStore.UpdateAccount($event));
  }

  removeAccount($event) {
    this.store.dispatch(new fromStore.DeleteAccount($event));
  }

  onEdit($event) {
    this.store.dispatch(new fromStore.SelectAccount($event));
  }

  onDelete($event) {
    this.modal.trigger();
  }

  onCreate($event) {

    this.store.dispatch(new fromStore.SelectAccount($event));
  }

  approve($event) {
    if ($event) {
      this.store.dispatch(new fromStore.DeleteAccount($event));
    }
  }

  batal() {
    this.store.dispatch(new fromStore.SelectAccount(null));
  }
}
