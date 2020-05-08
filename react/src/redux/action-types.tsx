import { IData } from '../api';

export const CHANGE_SEARCH_INPUT = 'CHANGE_INPUT';
export const CLICK_SEARCH_BUTTON = 'CLICK_SEARCH_BUTTON';
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

interface IUpdateDataAction {
  type: typeof UPDATE_DATA,
  payload: {
    newData: IData
  }
}

export type IAction = IChangeSearchInputAction | IClickSearchButtonAction | IUpdateDataAction;