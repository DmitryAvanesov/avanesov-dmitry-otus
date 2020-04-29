import { CHANGE_SEARCH_INPUT, CLICK_SEARCH_BUTTON, CLICK_FAVORITE_CITY, IAction } from './action-types';

export const changeSearchInput = (content: string): IAction => ({
  type: CHANGE_SEARCH_INPUT,
  payload: {
    content
  }
});