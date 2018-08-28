import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import * as fromComponent from './components';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '@app/core';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ClarityModule,
    CoreModule.forRoot()
  ],
  declarations: [...fromComponent.components],
  exports: [...fromComponent.components, ClarityModule]
})
export class SharedModule {
}
