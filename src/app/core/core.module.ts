import {NgModule} from '@angular/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {CommonModule} from '@angular/common';
import * as fromGuard from './guards';
import * as fromServices from './services';
import * as fromPipes from './pipe';
import * as fromDirective from './directive';
import * as fromIntreceptor from './intreceptor';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,

    CommonModule,
  ],
  declarations: [
    ...fromPipes.pipes,
    ...fromDirective.directive
  ],
  exports: [
    ReactiveFormsModule,
    SweetAlert2Module,
    FormsModule,
    ...fromPipes.pipes,
    ...fromDirective.directive
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [...fromDirective.directive, ...fromPipes.pipes, ...fromServices.services, ...fromGuard.guards, ...fromIntreceptor.intreceptor]
    };
  }
}
