import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { components } from './components';
import { container } from './container';

import {CoreModule} from '@app/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './anggota-routing.module';
import {SharedModule} from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CoreModule.forRoot(),
    SharedModule
  ],
  declarations: [
    ...components,
    ...container
  ]
})
export class AnggotaModule {
  constructor(){
  }
}
