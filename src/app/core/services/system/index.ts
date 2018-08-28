import {AuthService} from './auth.service';
import {MasterService} from './master.service';
import {StrukturService} from './struktur.service';
import {ShuService} from './shu.service';
import {UnitBisnisService} from './unit-bisnis.service';

export const services: any[] = [
  AuthService,
  MasterService,
  StrukturService,
  ShuService,
  UnitBisnisService
];

export * from './auth.service';
export * from './master.service';
export * from './struktur.service';
export * from './shu.service';
export * from './unit-bisnis.service';
