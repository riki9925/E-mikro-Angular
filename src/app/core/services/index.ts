import * as fromSystem from './system';
import * as fromCoa from './coa';
import * as fromMaster from './master';
import * as fromUsp from './usp';
import * as fromUtils from './utils';


export const services: any[] = [
  ...fromSystem.services,
  ...fromCoa.services,
  ...fromMaster.services,
  ...fromUsp.services,
  ...fromUtils.utilsService
];

export * from './system';
export * from './coa';
export * from './master';
export * from './usp';
export * from './utils';
