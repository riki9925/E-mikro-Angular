import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account, BukuBesar, Jenis, Kelompok, UnitBisnis} from '@app/models';
import * as fromStore from '@app/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountModalComponent implements OnInit {
  unit$: Observable<UnitBisnis[]>;
  loading$: Observable<boolean>;
  jenis$: Observable<Jenis[]>;
  kelompok$: Observable<Kelompok[]>;
  bukubesar$: Observable<BukuBesar[]>;
  account$: Observable<Account[]>;
  @Output('onSelect') onSelect = new EventEmitter<any>();
  @Output('onClose') onClose = new EventEmitter<any>();
  selectedBukubesar: any = '0';
  selectedKelompok: any = '0';
  selectedJenis: any = '0';
  selectedUnitBisnis: any = '0';
  @Input() input: string;
  @Input('show') showModal = false;

  constructor(private store: Store<fromStore.RootState>) {
  }

  ngOnInit() {
    this.unit$ = this.store.select(fromStore.getActiveUnitBisnis);
    this.jenis$ = this.store.select(fromStore.getAllJenis);
    this.kelompok$ = this.store.select(fromStore.getKelompokFilteredJenis);
    this.bukubesar$ = this.store.select(fromStore.getBukubesarFilteredKelompok);
    this.account$ = this.store.select(fromStore.getAccountFilteredBukubesar);
    this.loading$ = this.store.select(fromStore.getAccountIsLoading);
  }

  show(item) {
    this.input = item;
  }

  onChangeUnitBisnis() {
    this.selectedJenis = '0';
    this.selectedKelompok = '0';
    this.selectedBukubesar = '0';
    this.store.dispatch(new fromStore.SelectUnitBisnis(this.selectedUnitBisnis));
  }

  onChangeJenis() {
    this.selectedKelompok = '0';
    this.selectedBukubesar = '0';
    this.store.dispatch(new fromStore.SelectJenisAccount(this.selectedJenis));
  }

  onChangeKelompok() {
    this.selectedBukubesar = '0';
    this.store.dispatch(new fromStore.SelectKelompokAccount(this.selectedKelompok));
  }

  onChangeBukubesar() {
    this.store.dispatch(new fromStore.SelectBukubesar(this.selectedBukubesar));
  }

  pilih(item) {
    const output = {
      input: this.input,
      payload: item
    };
    this.onSelect.emit(output);
  }

  close(){
    this.onClose.emit(!this.showModal);
  }
}
