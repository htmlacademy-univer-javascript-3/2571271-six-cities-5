import { createReducer } from '@reduxjs/toolkit';
import { MockLocations } from '../mocks/locations.ts';
import { MockOffersList } from '../mocks/offer-lists.ts';
import { changeCityAction, fillOrdersAction } from './actions';
import { State } from '../types/state.ts';

const initialState: State = {
  city: MockLocations.find((c) => c.name === 'Paris') || MockLocations[0],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fillOrdersAction, (state) => {
      state.offers = MockOffersList;
    })
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    });
});
