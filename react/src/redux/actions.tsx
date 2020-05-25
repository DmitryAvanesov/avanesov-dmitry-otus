import { CHANGE_SEARCH_INPUT, CLICK_SEARCH_BUTTON, UPDATE_DATA, IAction, CLICK_FAVORITE_CITY } from './action-types';
import { IData } from '../api';

export const changeSearchInput = (newQuery: string): IAction => ({
  type: CHANGE_SEARCH_INPUT,
  payload: {
    newQuery
  }
});

export const clickSearchButton = (): IAction => ({
  type: CLICK_SEARCH_BUTTON
});

export const clickFavoriteCity = (): IAction => ({
  type: CLICK_FAVORITE_CITY
});

export const updateData = (newData: IData): IAction => ({
  type: UPDATE_DATA,
  payload: {
    newData
  }
});