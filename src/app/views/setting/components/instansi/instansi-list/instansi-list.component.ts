import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instansi} from '@app/models/index';

@Component({
  selector: 'app-instansi-list',
  templateUrl: 'instansi-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InstansiListComponent implements OnInit {
  @Input() instansi: Instansi[];
  @Input() loading: boolean;
  @Output('edit') editEvent = new EventEmitter<any>();
  @Output('delete') deleteEvent = new EventEmitter<any>();
  @Output('create') createEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

  }

  create() {
    this.createEvent.emit('');
  }

  edit(item) {
    this.editEvent.emit(item);
  }

  delete(item) {
    this.deleteEvent.emit(item);
  }
}
