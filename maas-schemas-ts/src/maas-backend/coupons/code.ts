/*

undefined
MaaS coupon code

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/maas-backend/coupons/code.json';

// Code
// The default export. More information at the top.
export type Code = t.Branded<unknown, CodeBrand>;
export const Code = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, CodeBrand> => true,
  'Code',
);
export interface CodeBrand {
  readonly Code: unique symbol;
}

export default Code;

// Success