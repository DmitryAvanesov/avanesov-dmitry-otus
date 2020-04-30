import { CHANGE_SEARCH_INPUT, CLICK_SEARCH_BUTTON, CLICK_FAVORITE_CITY, IAction } from './action-types';

export const changeSearchInput = (newQuery: string): IAction => ({
  type: CHANGE_SEARCH_INPUT,
  payload: {
    newQuery
  }
});

export const clickSearchButton = (): IAction => ({
  type: CLICK_SEARCH_BUTTON
});

export const clickFavoriteCity = (newSelected: string): IAction => ({
  type: CLICK_FAVORITE_CITY,
  payload: {
    newSelected
  }
});