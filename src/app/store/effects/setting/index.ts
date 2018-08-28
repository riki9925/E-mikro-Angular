import {AccountEffect, BukubesarEffect, JenisEffect, KelompokEffect} from './coa';

export const settingEffect: any[] = [
  JenisEffect,
  AccountEffect,
  BukubesarEffect,
  KelompokEffect
];

export * from './coa';
