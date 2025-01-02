import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.ts';
import { AxiosInstance } from 'axios';
import { ApiRoutes } from '../constants/constants.ts';
import { AuthStatus } from '../constants/constants.ts';
import { OfferList } from '../types/offer-list.ts';
import { User } from '../types/user.ts';
import { AuthData } from '../types/authorization-data.ts';
import { dropToken, saveToken } from '../services/authorization-token.ts';
import { setUser, changeAuthorizationStatus } from '../slices/authorization-slice.ts';
import { fillSortingOrders, setSortingOrdersLoadingStatus, fillFavorites, changeFavouriteStatus } from '../slices/offers-slice.ts';
import { FavouriteData } from '../types/favourite-data.ts';
import { buildUrl } from '../services/api-utils.ts';
import { fillNearbyOffers, fillReviews, updateOffer, addComment } from '../slices/current-offer-slice.ts';
import { Comment } from '../types/comment.ts';
import { Offer } from '../types/offer.ts';
import {CommentData} from '../types/comment-data.ts';

export const sendComment = createAsyncThunk<
  void,
  CommentData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'SEND_REVIEW',
  async ({ offerId, formData }, { dispatch, getState, rejectWithValue, extra: api }) => {
    if (getState().auth.authorizationStatus !== AuthStatus.Auth) {
      return rejectWithValue('Unauthorized');
    }
    const { data: review } = await api.post<Comment>(buildUrl(ApiRoutes.Comments, { offerId }), formData);
    dispatch(addComment(review));
  }
);

export const fetchFavoritesAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('FETCH_FAVORITES', async (_arg, {dispatch, getState, rejectWithValue, extra: api}) => {
  if (getState().auth.authorizationStatus !== AuthStatus.Auth) {
    return rejectWithValue('Unauthorized');
  }
  const {data} = await api.get<OfferList[]>(ApiRoutes.Favorite);
  dispatch(fillFavorites(data));
});

export const fetchOffer = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'FETCH_OFFER',
  async (offerId, { dispatch, extra: api }) => {
    const { data: newOffer } = await api.get<Offer>(
      buildUrl(ApiRoutes.Offer, { offerId })
    );
    dispatch(updateOffer(newOffer));
    const { data: newReviews } = await api.get<Comment[]>(
      buildUrl(ApiRoutes.Comments, { offerId })
    );
    dispatch(fillReviews(newReviews));
    const { data: newNearbyOffers } = await api.get<OfferList[]>(
      buildUrl(ApiRoutes.OffersNearby, { offerId })
    );
    dispatch(fillNearbyOffers(newNearbyOffers));
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<
    void,
    FavouriteData,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('CHANGE_FAVORITE_STATUS', async ({ offerId, isFavorite }, { dispatch, getState, rejectWithValue, extra: api }) => {
  if (getState().auth.authorizationStatus !== AuthStatus.Auth) {
    return rejectWithValue('Unauthorized');
  }
  await api.post<OfferList>(
    buildUrl(ApiRoutes.FavoriteStatus, {
      offerId: offerId,
      status: Number(isFavorite).toString(),
    })
  );
  dispatch(changeFavouriteStatus({ offerId, isFavorite }));
});

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

export const authorizationAction = createAsyncThunk<
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
      'LOGIN',
      async ({login: email, password}, {dispatch, extra: api}) => {
        const {data: user} = await api.post<User>(ApiRoutes.Login, {email, password});
        dispatch(setUser(user));
        saveToken(user.token);
        dispatch(changeAuthorizationStatus(AuthStatus.Auth));
        dispatch(fetchFavoritesAction());
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
      'LOGOUT', async (_arg, {dispatch, extra: api}) => {
        await api.delete(ApiRoutes.Logout);
        dropToken();
        dispatch(changeAuthorizationStatus(AuthStatus.NotAuth));
        dispatch(setUser(null));
      });
