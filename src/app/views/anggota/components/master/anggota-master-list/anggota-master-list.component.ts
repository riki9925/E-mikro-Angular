import {Anggota, Golongan, Instansi} from '@app/models';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-anggota-master-list',
  templateUrl: 'anggota-master-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AnggotaMasterListComponent implements OnInit {
  @Input('anggota') coreAnggota: Anggota[];
  anggota: Anggota[];
  @Input() loading: boolean;
  @Output('approv') approveEvent = new EventEmitter<any>();
  @Output('edit') editEvent = new EventEmitter<any>();
  @Output('delete') deleteEvent = new EventEmitter<any>();
  @Output('create') createEvent = new EventEmitter<any>();
  @Input() instansi: Instansi[];
  @Input() golongan: Golongan[];
  selectedGolongan: any = 'SEMUA';
  selectedInstansi: any = 'SEMUA';
  status: any = 'SEMUA';

  constructor() {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.anggota = this.coreAnggota.filter(x => {
      if (this.selectedInstansi === 'SEMUA') {
        return true;
      }
      return x.KI === this.selectedInstansi.KI;
    }).filter(x => {
      if (this.selectedGolongan === 'SEMUA') {
        return true;
      }
      return x.GOLONGAN === this.selectedGolongan.GOLONGAN;
    }).filter(x => {
      if (this.status === 'SEMUA') {
        return true;
      }
      return x.ST === this.status;
    });
  }

  create() {
    const anggota = <Anggota>{};
    this.createEvent.emit(anggota);
  }

  approv(item) {
    this.approveEvent.emit(item);
  }

  edit(item) {
    this.editEvent.emit(item);
  }

  delete(item) {
    this.deleteEvent.emit(item);
  }

}
