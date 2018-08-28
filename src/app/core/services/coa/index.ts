import {BukubesarService} from './bukubesar.service';
import {JenisService} from './jenis.service';
import {AccountService} from './account.service';
import {KelompokService} from './kelompok.service';

export const services: any[] = [
  AccountService,
  JenisService,
  KelompokService,
  BukubesarService
];

export * from './account.service';
export * from './jenis.service';
export * from './bukubesar.service';
export * from './kelompok.service';

