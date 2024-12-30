import { createAction } from '@reduxjs/toolkit';
import { SortingOrder } from '../types/sortings.ts';
import OfferList from '../types/offer-list.ts';

export const fillOrdersAction = createAction('FILL_ORDERS');

export const changeCityAction = createAction(
  'CHANGE_CITY',
  (value: string) => ({
    payload: value,
  })
);

export const changeSortingOrderAction = createAction(
  'CHANGE_SORT_ORDER',
  (value: SortingOrder) => ({
    payload: value,
  })
);

export const fillSortingOrdersAction = createAction(
  'FILL_ORDERS',
  (value: OfferList[]) => ({
    payload: value,
  })
);

export const setSortingOrdersLoadingAction = createAction(
  'SET_OFFERS_LOADING',
  (value: boolean) => ({
    payload: value,
  })
);
