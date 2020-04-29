export const CHANGE_SEARCH_INPUT = 'CHANGE_INPUT';
export const CLICK_SEARCH_BUTTON = 'CLICK_SEARCH_BUTTON';
export const CLICK_FAVORITE_CITY = 'CLICK_FAVORITE_CITY';

interface IChangeSearchInputAction {
  type: typeof CHANGE_SEARCH_INPUT,
  payload: {
    newQuery: string
  }
}

interface IClickSearchButtonAction {
  type: typeof CLICK_SEARCH_BUTTON
}

export type IAction = IChangeSearchInputAction | IClickSearchButtonAction;