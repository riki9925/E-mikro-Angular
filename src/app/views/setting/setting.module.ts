import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {components} from './components';
import {containers} from './containers';
import {RouterModule} from '@angular/router';

import {routes} from './setting-routing.module';
import {CoreModule} from '@app/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    ...containers
  ]
})
export class SettingModule {
}
