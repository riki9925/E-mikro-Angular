import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instansi} from '@app/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '@app/core';

@Component({
  selector: 'app-instansi-form',
  templateUrl: 'instansi-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InstansiFormComponent extends BaseComponent implements OnInit {
  @Input() loading: boolean;
  @Input() instansi: Instansi;
  @Output('save') saveEvent = new EventEmitter<any>();
  @Output('update') updateEvent = new EventEmitter<any>();
  @Output('batal') batalEvent = new EventEmitter<any>();
  instansiForm: FormGroup;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.instansiForm = this.fb.group({
      NAMA_INSTANSI: [this.instansi.NAMA_INSTANSI || '', [Validators.required]],
      ALAMAT: [this.instansi.ALAMAT || '', [Validators.required]],
      TELEPON: [this.instansi.TELEPON || '', [Validators.required]],
      HANDPHONE: [this.instansi.HANDPHONE || '', [Validators.required]],
      NAMA_BENDAHARA: [this.instansi.NAMA_BENDAHARA || '', [Validators.required]],
      TELEPON_BENDAHARA: [this.instansi.TELEPON_BENDAHARA || '', [Validators.required]],
    });
  }

  getForm() {
    return this.instansiForm;
  }

  update() {
    if (this.instansiForm.valid) {
      this.instansi = {
        ...this.instansi,
        ...this.instansiForm.value,
      };
      console.log(this.instansi);
      this.updateEvent.emit(this.instansi);
    }
  }

  simpan() {
    if (this.instansiForm.valid) {
      this.instansi = {
        ...this.instansi,
        ...this.instansiForm.value,
      };
      console.log(this.instansi);
      this.saveEvent.emit(this.instansi);
    }
  }

  batal() {
    this.batalEvent.emit('');
  }
}
