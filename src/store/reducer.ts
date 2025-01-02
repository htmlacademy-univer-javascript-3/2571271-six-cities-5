import { MockLocations } from '../mocks/locations.ts';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityAction,
  fillSortingOrdersAction,
  changeSortingOrderAction,
  setSortingOrdersLoadingAction,
  changeAuthStatusAction,
  setUserAction
} from './actions';
import { SortingOrder } from '../types/sortings.ts';
import { OfferList } from '../types/offer-list.ts';
import { AuthStatus } from '../constants/constants.ts';
import { User } from '../types/user.ts';

const initialState: {
  city: string;
  offers: OfferList[];
  sortingOrder: SortingOrder;
  loadingStatus: boolean;
  authorizationStatus: AuthStatus;
  user?: User;
} = {
  city: MockLocations[0].name,
  offers: [],
  sortingOrder: 'Popular',
  loadingStatus: false,
  authorizationStatus: AuthStatus.Unknown
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
    })
    .addCase(changeAuthStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserAction, (state, action) => {
      state.user = action.payload;
    });
});
