import { createAction } from '@reduxjs/toolkit';

import { SortingOrder } from '../types/sortings.ts';
import { OfferList } from '../types/offer-list.ts';
import { AuthStatus } from '../constants/constants.ts';
import { User } from '../types/user.ts';

export const changeCityAction = createAction<string>('CHANGE_CITY');

export const changeSortingOrderAction = createAction<SortingOrder>('CHANGE_SORT_ORDER');

export const fillSortingOrdersAction = createAction<OfferList[]>('FILL_ORDERS');

export const setSortingOrdersLoadingAction = createAction<boolean>('SET_OFFERS_LOADING');

export const changeAuthStatusAction = createAction<AuthStatus>('CHANGE_AUTH_STATUS');

export const setUserAction = createAction<User>('SET_USER');
