import { CLICK_FAVORITE_CITY, IAction } from '../action-types';

interface IState {
  selected: string
}

const initialState: IState = {
  selected: ''
};

const favoriteReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CLICK_FAVORITE_CITY: {
      const { newSelected } = action.payload;

      return {
        ...state,
        selected: newSelected
      };
    }
    default:
      return state;
  }
}

export default favoriteReducer;