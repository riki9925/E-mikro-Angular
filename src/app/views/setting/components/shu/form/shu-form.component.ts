import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Shu} from '@app/models/';

@Component({
  selector: 'app-shu-form',
  templateUrl: 'shu-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShuFormComponent implements OnInit {
  @Input() shu: Shu;
  shuForm: FormGroup;

  @Input()
  loading: boolean;

  @Output('save')
  saveEvent = new EventEmitter<any>();

  @Output('back')
  backEvent = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.shuForm = this.fb.group({
      Karyawan: [this.shu.Karyawan, [Validators.required, Validators.min(0), Validators.max(100)]],
      pengurus: [this.shu.pengurus, [Validators.required, Validators.min(0), Validators.max(100)]],
      anggota: [this.shu.anggota, [Validators.required, Validators.min(0), Validators.max(100)]],
      modal: [this.shu.modal, [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  update() {
    if (this.shuForm.valid) {
      let obj =
        this.saveEvent.emit(this.shuForm.value);
    }
  }

  back() {
    this.backEvent.emit('back');
  }
}
