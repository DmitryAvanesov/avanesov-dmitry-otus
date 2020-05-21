import { IData } from '../api';

export const CHANGE_SEARCH_INPUT = 'CHANGE_INPUT';
export const CLICK_SEARCH_BUTTON = 'CLICK_SEARCH_BUTTON';
export const CLICK_FAVORITE_CITY = 'CLICK_FAVORITE_CITY';
export const UPDATE_DATA = 'UPDATE_DATA';

interface IChangeSearchInputAction {
  type: typeof CHANGE_SEARCH_INPUT,
  payload: {
    newQuery: string
  }
}

interface IClickSearchButtonAction {
  type: typeof CLICK_SEARCH_BUTTON
}

interface IClickFavoriteCityAction {
  type: typeof CLICK_FAVORITE_CITY
}

interface IUpdateDataAction {
  type: typeof UPDATE_DATA,
  payload: {
    newData: IData
  }
}

export type IAction = IChangeSearchInputAction | IClickSearchButtonAction | IClickFavoriteCityAction | IUpdateDataAction;