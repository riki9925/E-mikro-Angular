import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {
  DashboardComponent,
  LoginFormComponent,
  UspDashboardComponent
} from './components';
import {CoaIsLoadedGuard, IsAuthenticatedGuard, MasterIsLoadedGuard} from '@app/core';

export const routes: Routes = [
  {
    path: 'auth',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [CoaIsLoadedGuard, MasterIsLoadedGuard, IsAuthenticatedGuard],
    component: DashboardComponent
  },
  {
    path: 'pengaturan',
    data: {
      title: 'Pengaturan'
    },
    canActivate: [CoaIsLoadedGuard, MasterIsLoadedGuard , IsAuthenticatedGuard],
    loadChildren: '@app/views/setting/setting.module#SettingModule'
  },
  {
    path: 'anggota',
    data: {
      title: 'Modul Anggota'
    },
    canActivate: [CoaIsLoadedGuard, MasterIsLoadedGuard , IsAuthenticatedGuard],
    loadChildren: '@app/views/anggota/anggota.module#AnggotaModule'
  },
  {
    path: 'usp/simpanan',
    data: {
      title: 'Modul Simpanan'
    },
    canActivate: [CoaIsLoadedGuard, MasterIsLoadedGuard , IsAuthenticatedGuard],
    loadChildren: '@app/views/simpanan/simpanan.module#SimpananModule'
  },
  {
    path: 'usp/dashboard',
    data: {
      title: 'Modul Unit Simpan Pinjam'
    },
    canActivate: [CoaIsLoadedGuard, MasterIsLoadedGuard , IsAuthenticatedGuard],
    component: UspDashboardComponent
  },
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
