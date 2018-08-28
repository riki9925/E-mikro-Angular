import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CustomRouterStateSerializer, effects, metaReducers, reducers} from '@app/store';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {NgModule} from '@angular/core';
import {CoreModule} from './core/core.module';
import * as fromcomponents from './components';
import {environment} from '../environments/environment';
import {SharedModule} from './shared/shared.module';
import { SweetAlert2Module} from  '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    ...fromcomponents.components,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ?
      StoreDevtoolsModule.instrument({
        maxAge: 25 // Retains last 25 states
      })
      : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    EffectsModule.forRoot(effects),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-dialog',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
  ],
  providers: [{
    provide: RouterStateSerializer,
    useClass: CustomRouterStateSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
