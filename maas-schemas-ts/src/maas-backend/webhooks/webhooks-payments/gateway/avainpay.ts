/*

undefined
Avainpay payment webhook schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/avainpay.json';

// Request
// The purpose of this remains a mystery
export type Request = t.Branded<
  {
    payload?: {
      action_str?: string;
      data_type?: string;
      log_list?: Array<unknown>;
      trans_map?: {
        system_time?: number;
        nonce?: string;
        signature?: string;
      };
      request_map?: {};
    } & {
      action_str: Defined;
      data_type: Defined;
    };
    headers?: {
      'Set-Cookie'?: string;
    };
    params?: {
      gatewayName?: string & 'avainpay';
    } & {
      gatewayName: Defined;
    };
  } & {
    params: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          action_str: t.string,
          data_type: t.string,
          log_list: t.UnknownArray,
          trans_map: t.partial({
            system_time: t.number,
            nonce: t.string,
            signature: t.string,
          }),
          request_map: t.type({}),
        }),
        t.type({
          action_str: Defined,
          data_type: Defined,
        }),
      ]),
      headers: t.partial({
        'Set-Cookie': t.string,
      }),
      params: t.intersection([
        t.partial({
          gatewayName: t.intersection([t.string, t.literal('avainpay')]),
        }),
        t.type({
          gatewayName: Defined,
        }),
      ]),
    }),
    t.type({
      params: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        action_str?: string;
        data_type?: string;
        log_list?: Array<unknown>;
        trans_map?: {
          system_time?: number;
          nonce?: string;
          signature?: string;
        };
        request_map?: {};
      } & {
        action_str: Defined;
        data_type: Defined;
      };
      headers?: {
        'Set-Cookie'?: string;
      };
      params?: {
        gatewayName?: string & 'avainpay';
      } & {
        gatewayName: Defined;
      };
    } & {
      params: Defined;
      payload: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

// Avainpay
// The default export. More information at the top.
export type Avainpay = t.Branded<unknown, AvainpayBrand>;
export const Avainpay = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, AvainpayBrand> => true,
  'Avainpay',
);
export interface AvainpayBrand {
  readonly Avainpay: unique symbol;
}

export default Avainpay;

// Success
