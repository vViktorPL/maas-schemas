/*

undefined
Request schema for creating a booking through a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as Customer_ from 'maas-schemas-ts/core/customer';
import * as Configurator_ from 'maas-schemas-ts/core/components/configurator';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

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

export const schemaId = 'http://maasglobal.com/tsp/bookings-create/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    leg?: BookingOption_.Leg;
    meta?: BookingMeta_.BookingMeta;
    terms?: Booking_.Terms;
    customer?: Customer_.Customer;
    tspProduct?: BookingOption_.TspProduct;
    configurator?: Configurator_.Configurator;
    customerSelection?: CustomerSelection_.CustomerSelection;
  } & {
    leg: Defined;
    meta: Defined;
    terms: Defined;
    customer: Defined;
    tspProduct: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      leg: BookingOption_.Leg,
      meta: BookingMeta_.BookingMeta,
      terms: Booking_.Terms,
      customer: Customer_.Customer,
      tspProduct: BookingOption_.TspProduct,
      configurator: Configurator_.Configurator,
      customerSelection: CustomerSelection_.CustomerSelection,
    }),
    t.type({
      leg: Defined,
      meta: Defined,
      terms: Defined,
      customer: Defined,
      tspProduct: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      leg?: BookingOption_.Leg;
      meta?: BookingMeta_.BookingMeta;
      terms?: Booking_.Terms;
      customer?: Customer_.Customer;
      tspProduct?: BookingOption_.TspProduct;
      configurator?: Configurator_.Configurator;
      customerSelection?: CustomerSelection_.CustomerSelection;
    } & {
      leg: Defined;
      meta: Defined;
      terms: Defined;
      customer: Defined;
      tspProduct: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Request)).decodeSync(examplesRequest) // => examplesRequest */
export const examplesRequest: NonEmptyArray<Request> = ([
  {
    leg: {
      to: {
        lat: 60.1769789,
        lon: 24.9504135,
        name: 'Ida Aalbergin tie 3, Helsinki',
        address:
          'streetName:Ida%20Aalbergin%20tie|streetNumber:1|city:Helsinki|zipCode:00400|country:Suomi',
      },
      from: {
        lat: 60.177252,
        lon: 24.950388,
        name: 'Siltasaarenkatu 1, Helsinki',
        address:
          'streetName:Siltasaarenkatu|streetNumber:1|city:Helsinki|zipCode:00530|country:Suomi',
      },
      mode: 'TAXI',
      endTime: 1572441571838,
      agencyId: 'Test1',
      startTime: 1572440451838,
    },
    customer: {
      email: 'test@example.com',
      phone: '+358400001010',
      locale: 'en',
      clientId: 'whim',
      lastName: 'Tester',
      opaqueId: 'cafecaca',
      firstName: 'Test',
      documents: [],
    },
    meta: {
      MODE_TAXI: {
        driver: {},
        taxiCenter: { name: 'Taksi', phone: '+358100000011' },
        vehicleType: 'any',
      },
    },
    terms: {
      reusable: false,
      validity: { endTime: 1572355249017, startTime: 1572355193128 },
      reconcilable: false,
    },
    configurator: {},
    customerSelection: {},
    cost: null,
    tspId: null,
    tspProduct: { id: 'testtaxi1-product1' },
  },
] as unknown) as NonEmptyArray<Request>;

export default Request;

// Success
