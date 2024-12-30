import { MockLocations } from '../mocks/locations.ts';
import { createReducer } from '@reduxjs/toolkit';
import {changeCityAction,
  fillSortingOrdersAction,
  changeSortingOrderAction,
  setSortingOrdersLoadingAction} from './actions';
import {SortingOrder} from '../types/sortings.ts';
import {OfferList} from '../types/offer-list.ts';

const initialState: {
  city: string;
  offers: OfferList[];
  sortingOrder: SortingOrder;
  loadingStatus: boolean;
} = {
  city: MockLocations[0].name,
  offers: [],
  sortingOrder: 'Popular',
  loadingStatus: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillSortingOrdersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortingOrdersLoadingAction, (state, action) => {
      state.loadingStatus = action.payload;
    })
    .addCase(changeSortingOrderAction, (state, action) => {
      state.sortingOrder = action.payload;
    });
});
