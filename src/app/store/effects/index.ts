import * as fromCore from './core';
import * as fromSetting from './setting';
import * as fromSystem from './system';
import * as fromMaster from './master';
import * as fromUsp from './usp';

export const effects: any[] = [
  ...fromCore.coreEffect,
  ...fromSetting.settingEffect,
  ...fromSystem.systemEffect,
  ...fromMaster.masterEffect,
  ...fromUsp.uspEffect
];
