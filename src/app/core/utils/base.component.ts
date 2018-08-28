import {FormControl, FormGroup} from '@angular/forms';

export abstract class BaseComponent {
  abstract getForm(): FormGroup;

  isRequired(name) {
    const form: FormControl = this.getForm().get(name) as FormControl;
    return form.hasError('required') && form.touched;
  }

  isError(name, type) {
    const form: FormControl = this.getForm().get(name) as FormControl;
    return form.hasError(type) && form.touched;
  }
}
