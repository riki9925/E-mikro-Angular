import {JenisSimpanan} from '@app/models';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-simpanan-setting-list',
  templateUrl: 'simpanan-setting-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SimpananSettingListComponent implements OnInit {
  @Input('jenis') jenis: JenisSimpanan[];

  @Output('edit') editEvent = new EventEmitter<any>();
  @Output('delete') deleteEvent = new EventEmitter<any>();
  @Output('create') createEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  edit(item) {
    this.editEvent.emit(item);
  }

  delete(item) {
    this.deleteEvent.emit(item);
  }

  create(){
    this.createEvent.emit('');
  }
}
