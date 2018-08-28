import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromStore from '@app/store/';
import {Account, BukuBesar, Jenis, Kelompok} from '@app/models/';

@Component({
  selector: 'app-bukubesar',
  templateUrl: 'bukubesar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BukubesarComponent implements OnInit {
  loading$: Observable<boolean>;
  jenis$: Observable<Jenis[]>;
  kelompok$: Observable<Kelompok[]>;
  bukubesar$: Observable<BukuBesar[]>;
  selectedBukubesar$: Observable<BukuBesar>;
  selectedJenis$: Observable<Jenis>;
  selectedKelompok$: Observable<Kelompok>;


  constructor(private store: Store<fromStore.RootState>) {
  }

  ngOnInit() {
    this.jenis$ = this.store.select(fromStore.getAllJenis);
    this.kelompok$ = this.store.select(fromStore.getKelompokFilteredJenis);
    this.bukubesar$ = this.store.select(fromStore.getBukubesarFilteredKelompok);
    this.loading$ = this.store.select(fromStore.getBukubesarIsLoading);
    this.selectedBukubesar$ = this.store.select(fromStore.getSelectedBukubesar);
    this.selectedJenis$ = this.store.select(fromStore.getSelectedJenis);
    this.selectedKelompok$ = this.store.select(fromStore.getSelectedKelompok);
  }

  emitJenisChange($event) {
    this.store.dispatch(new fromStore.SelectJenisAccount($event));
  }

  emitKelompokChange($event) {
    this.store.dispatch(new fromStore.SelectKelompokAccount($event));
  }

  emitOnEdit(item) {
    this.store.select(store => store.kelompok.entities[item.ACCKEL]).subscribe(r => {
      this.store.dispatch(new fromStore.SelectKelompokAccount(r));
      this.store.select(store => store.jenis.entities[r.ACCJENIS]).subscribe(b => {
        this.store.dispatch(new fromStore.SelectJenisAccount(b));
      });
    });
    this.store.dispatch(new fromStore.SelectBukubesar(item));
  }

  emitOnDelete(item) {
    this.store.dispatch(new fromStore.DeleteAccount(item));
  }

  emitOnCreate(item) {
    this.store.dispatch(new fromStore.SelectBukubesar(item));

  }

  batal() {
    this.store.dispatch(new fromStore.SelectBukubesar(null));
  }

  save(item) {
    this.store.dispatch(new fromStore.AddBukuBesar(item));
  }

  update(item) {
    this.store.dispatch(new fromStore.UpdateBukuBesar(item));
  }
}
