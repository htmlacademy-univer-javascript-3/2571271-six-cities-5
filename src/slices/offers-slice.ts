import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferList } from '../types/offer-list.ts';
import { SortingOrder } from '../types/sortings.ts';
import { FavouriteData } from '../types/favourite-data.ts';

type OffersState = {
  offers: OfferList[];
  sortingOrder: SortingOrder;
  offersLoadingStatus: boolean;
  favourites: OfferList[];
};

const initialState: OffersState = {
  offers: [],
  sortingOrder: 'Popular',
  offersLoadingStatus: false,
  favourites: [],
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
    changeFavouriteStatus(state, action: PayloadAction<FavouriteData>) {
      const { offerId, isFavorite} = action.payload;
      const offer = state.offers.find((x) => x.id === offerId);
      if (offer) {
        offer.isFavorite = isFavorite;
        if (isFavorite && !state.favourites.find((x) => x.id === offerId)) {
          state.favourites.push(offer);
        } else {
          state.favourites = state.favourites.filter((x) => x.id !== offerId);
        }
      }
    },
    fillFavorites(state, action: PayloadAction<OfferList[]>) {
      state.favourites = action.payload;
    }
  },
});

export const { fillSortingOrders, setSortingOrdersLoadingStatus, changeSortingOrder, fillFavorites,
  changeFavouriteStatus} = offersSlice.actions;
export default offersSlice.reducer;
