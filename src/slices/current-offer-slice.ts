import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Offer } from '../types/offer.ts';
import { OfferList } from '../types/offer-list.ts';
import { Comment } from '../types/comment.ts';
import { changeFavouriteStatus } from './offers-slice.ts';

type CurrentOfferState = {
  offer: Offer | undefined;
  comments: Comment[];
  nearbyOffers: OfferList[];
};

const initialState: CurrentOfferState = {
  offer: undefined,
  comments: [],
  nearbyOffers: [],
};

const currentOfferSlice = createSlice({
  name: 'currentOffer',
  initialState,
  reducers: {
    fillReviews(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },
    fillNearbyOffers(state, action: PayloadAction<OfferList[]>) {
      state.nearbyOffers = action.payload;
    },
    updateOffer(state, action: PayloadAction<Offer | undefined>) {
      state.offer = action.payload;
    },
    clearOffer(state) {
      state.offer = undefined;
      state.nearbyOffers = [];
      state.comments = [];
    },
    addComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeFavouriteStatus, (state, action) => {
        const { offerId, isFavorite } = action.payload;
        if (state.offer && offerId === state.offer.id) {
          state.offer.isFavorite = isFavorite;
        }
      });
  },
});

export const { fillNearbyOffers, fillReviews, updateOffer, clearOffer, addComment } = currentOfferSlice.actions;
export default currentOfferSlice.reducer;
