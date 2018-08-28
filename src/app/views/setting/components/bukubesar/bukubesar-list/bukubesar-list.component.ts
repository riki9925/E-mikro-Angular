import {BukuBesar, Jenis, Kelompok} from '@app/models';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bukubesar-list',
  templateUrl: 'bukubesar-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BukubesarListComponent implements OnInit {
  @Input() loading: boolean;
  @Input('jenis') jenis: Jenis[];
  @Input('kelompok') kelompok: Kelompok[];
  @Input('bukubesar') bukubesar: BukuBesar[];
  @Output('jenisChange') onJenisChange = new EventEmitter<any>();
  @Output('kelompokChange') onKelompokChange = new EventEmitter<any>();
  @Output('onEdit') onEditEvent = new EventEmitter<any>();
  @Output('onDelete') onDeleteEvent = new EventEmitter<any>();
  @Output('onCreate') onCreateEvent = new EventEmitter<any>();
  selectedKelompok = '0';
  selectedJenis = '0';

  constructor() {
  }

  ngOnInit() {
  }

  onChangeJenis() {
    this.selectedKelompok = '0';
    this.onJenisChange.emit(this.selectedJenis);
  }

  onChangeKelompok() {
    this.onKelompokChange.emit(this.selectedKelompok);
  }

  onEdit(item) {
    this.onEditEvent.emit(item);
  }

  onDelete(item) {
    this.onDeleteEvent.emit(item);
  }

  create() {
    let bb: BukuBesar = {};
    this.onCreateEvent.emit(bb);
  }

}
