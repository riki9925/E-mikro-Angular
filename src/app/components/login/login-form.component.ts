import {Store} from '@ngrx/store';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromStore from '@app/store/index';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  auth: FormGroup;
  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private fb: FormBuilder,
              private store: Store<fromStore.RootState>) {
  }

  ngOnInit() {
    this.auth = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
    this.error$ = this.store.select(fromStore.getLoginErrorMessage);
    this.loading$ = this.store.select(fromStore.getLoginIsLoading);
  }

  onSubmit({value, valid}: { value: any, valid: boolean }) {
    if (valid) {
      this.store.dispatch(new fromStore.PerformLogin(value));
    }
  }
}
