export const CHANGE_SEARCH_INPUT = 'CHANGE_INPUT';
export const CLICK_SEARCH_BUTTON = 'CLICK_SEARCH_BUTTON';
export const CLICK_FAVORITE_CITY = 'CLICK_FAVORITE_CITY';

interface IChangeStateInputAction {
  type: typeof CHANGE_SEARCH_INPUT,
  payload: {
    content: string
  }
}

export type IAction = IChangeStateInputAction;