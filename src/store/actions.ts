import { createAction } from '@reduxjs/toolkit';
import { Location } from '../types/location.ts';

export const fillOrdersAction = createAction('FILL_ORDERS');

export const changeCityAction = createAction(
  'CHANGE_CITY',
  (value: Location) => ({
    payload: value
  })
);
