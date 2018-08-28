import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {routes} from './simpanan-routing.module';
import {components} from './components';
import {comtainer} from './container';


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
    ...comtainer
  ]
})
export class SimpananModule {
}
