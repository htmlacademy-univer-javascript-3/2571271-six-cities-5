import { OfferList } from '../types/offer-list.ts';
import { SortingOrder } from '../types/sortings.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type OffersState = {
  offers: OfferList[];
  sortingOrder: SortingOrder;
  offersLoadingStatus: boolean;
};

const initialState: OffersState = {
  offers: [],
  sortingOrder: 'Popular',
  offersLoadingStatus: false,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    fillSortingOrders(state, action: PayloadAction<OfferList[]>) {
      state.offers = action.payload;
    },
    setSortingOrdersLoadingStatus(state, action: PayloadAction<boolean>) {
      state.offersLoadingStatus = action.payload;
    },
    changeSortingOrder(state, action: PayloadAction<SortingOrder>) {
      state.sortingOrder = action.payload;
    },
  },
});

export const { fillSortingOrders, setSortingOrdersLoadingStatus, changeSortingOrder } = offersSlice.actions;
export default offersSlice.reducer;
