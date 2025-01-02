import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.ts';
import { AxiosInstance } from 'axios';
import { ApiRoutes } from '../constants/constants.ts';
import { OfferList } from '../types/offer-list.ts';
import { AuthStatus } from '../constants/constants.ts';
import { User } from '../types/user.ts';
import { AuthData } from '../types/authorization-data.ts';
import { dropToken, saveToken } from '../services/authorization-token.ts';
import { setUser, changeAuthorizationStatus } from '../slices/authorization-slice.ts';
import { fillSortingOrders, setSortingOrdersLoadingStatus } from '../slices/offers-slice.ts';

export const fetchOrdersAction = createAsyncThunk<
void,
undefined,
{
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'FETCH_OFFERS', async (_arg, {dispatch, extra: api}) => {
    dispatch(setSortingOrdersLoadingStatus(true));
    const {data} = await api.get<OfferList[]>(ApiRoutes.Offers);
    dispatch(setSortingOrdersLoadingStatus(false));
    dispatch(fillSortingOrders(data));
  });

export const authAction = createAsyncThunk<
void,
undefined,
{
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'CHECK_AUTH', async (_arg, {dispatch, extra: api}) => {
    try {
      const user = (await api.get<User>(ApiRoutes.Login)).data;
      dispatch(setUser(user));
      await api.get(ApiRoutes.Login);
      dispatch(changeAuthorizationStatus(AuthStatus.Auth));
    } catch {
      dispatch(changeAuthorizationStatus(AuthStatus.NotAuth));
    }
  });

export const loginAction = createAsyncThunk<
    void,
    AuthData,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      'user/login',
      async ({ login: email, password }, { dispatch, extra: api }) => {
        const user = (await api.post<User>(ApiRoutes.Login, { email, password })).data;
        dispatch(setUser(user));
        saveToken(user.token);
        dispatch(changeAuthorizationStatus(AuthStatus.Auth));
      }
    );

export const logoutAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      'user/logout', async (_arg, { dispatch, extra: api }) => {
        await api.delete(ApiRoutes.Logout);
        dropToken();
        dispatch(changeAuthorizationStatus(AuthStatus.NotAuth));
      });
