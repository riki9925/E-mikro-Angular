import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UnitBisnis} from '@app/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '@app/core/';

@Component({
  selector: 'app-unit-bisnis-form',
  templateUrl: 'unit-bisnis-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitBisnisFormComponent extends BaseComponent implements OnInit {
  unitForm: FormGroup;
  @Input('loading') loading: boolean;
  @Input('unit') unit: UnitBisnis;
  @Output('save') saveEvent = new EventEmitter<any>();
  @Output('cancle') cancleEvent = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    super();
  }

  getForm(): FormGroup {
    return this.unitForm;
  }

  ngOnInit() {
    this.unitForm = this.fb.group({
      NAMA_UNIT: [this.unit.NAMA_UNIT, [Validators.required]],
      JENIS: [this.unit.JENIS, [Validators.required]],
      KU: [this.unit.KU, [Validators.required]],
      ST: [this.unit.ST, [Validators.required]],
      SYS: [this.unit.SYS, [Validators.required]],
      CIF: [this.unit.CIF, [Validators.required]],
      ID: [this.unit.ID, [Validators.required]],
    });
  }

  update() {
    if (this.unitForm.valid) {
      this.saveEvent.emit(this.unitForm.value);
    }
  }

  back() {
    this.cancleEvent.emit('');
  }
}
