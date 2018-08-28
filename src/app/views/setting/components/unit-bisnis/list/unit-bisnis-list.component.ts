import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UnitBisnis} from '@app/models';

@Component({
  selector: 'app-unit-bisnis-list',
  templateUrl: 'unit-bisnis-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitBisnisListComponent implements OnInit {
  @Input('loading') loading: boolean;
  @Input('jenis') jenis: string[];
  @Input('unit') unit: UnitBisnis[];
  unitList: UnitBisnis[];
  @Output('update') editEvent = new EventEmitter<any>();
  selectedJenis = '0';

  constructor() {
  }

  ngOnInit() {
    this.unitList = this.unit.filter(e => e.JENIS === this.selectedJenis);
  }

  onChangeJenis() {
    this.unitList = this.unit.filter(e => e.JENIS === this.selectedJenis);
  }

  update(item) {
    this.editEvent.emit(item);
  }
}
