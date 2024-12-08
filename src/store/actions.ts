import { createAction } from '@reduxjs/toolkit';
import { SortingOrder } from '../types/sortings.ts';

export const fillOrdersAction = createAction('FILL_ORDERS');

export const changeCityAction = createAction(
  'CHANGE_CITY',
  (value: string) => ({
    payload: value
  })
);

export const changeSortingOrderAction = createAction(
  'CHANGE_SORT_ORDER',
  (value: SortingOrder) => ({
    payload: value,
  })
);
