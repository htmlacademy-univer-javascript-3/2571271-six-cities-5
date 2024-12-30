import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.ts';
import { AxiosInstance } from 'axios';
import { fillSortingOrdersAction, setSortingOrdersLoadingAction } from './actions.ts';
import { ApiRoutes } from '../constants/constants.ts';
import { OfferList } from '../types/offer-list.ts';
export const fetchOrdersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_OFFERS', async (_arg, { dispatch, extra: api }) => {
  dispatch(setSortingOrdersLoadingAction(true));
  const { data } = await api.get<OfferList[]>(ApiRoutes.Offers);
  dispatch(setSortingOrdersLoadingAction(false));
  dispatch(fillSortingOrdersAction(data));
});
