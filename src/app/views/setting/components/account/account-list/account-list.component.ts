import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account, BukuBesar, Jenis, Kelompok, UnitBisnis} from '@app/models';

@Component({
  selector: 'app-account-list',
  templateUrl: 'account-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AccountListComponent implements OnInit {
  @Input('unit') unit: UnitBisnis[];
  @Input('loading') loading: boolean;
  @Input('jenis') jenis: Jenis[];
  @Input('kelompok') kelompok: Kelompok[];
  @Input('bukubesar') bukubesar: BukuBesar[];
  @Input('account') account: Account[];

  @Output('onJenisChange') onJenisChange = new EventEmitter<any>();
  @Output('onKelompokChange') onKelompokChange = new EventEmitter<any>();
  @Output('onBukubesarChange') onBukubesarChange = new EventEmitter<any>();
  @Output('onUnitBisnisChange') onUnitBisnisChange = new EventEmitter<any>();
  @Output('onEdit') onEdit = new EventEmitter<any>();
  @Output('onDelete') onDelete = new EventEmitter<any>();
  @Output('onCreate') onCreate = new EventEmitter<any>();

  selectedBukubesar: any = '0';
  selectedKelompok: any = '0';
  selectedJenis: any = '0';
  selectedUnitBisnis: any = '0';

  constructor() {
  }

  ngOnInit() {

  }

  onChangeUnitBisnis() {
    this.selectedJenis = '0';
    this.selectedKelompok = '0';
    this.selectedBukubesar = '0';
    this.onUnitBisnisChange.emit(this.selectedUnitBisnis);
  }

  onChangeJenis() {
    this.selectedKelompok = '0';
    this.selectedBukubesar = '0';
    this.onJenisChange.emit(this.selectedJenis);
  }

  onChangeKelompok() {
    this.selectedBukubesar = '0';
    this.onKelompokChange.emit(this.selectedKelompok);
  }

  onChangeBukubesar() {
    this.onBukubesarChange.emit(this.selectedBukubesar);
  }

  edit(item) {
    this.onEdit.emit(item);

  }

  delete(item) {
    this.onDelete.emit(item);
  }

  createNewAccount() {
    let account: Account = {
      ACCBB: this.selectedBukubesar.ACCBB,
      KU: this.selectedUnitBisnis.KU,
    };
    this.onCreate.emit(account);
  }
}
