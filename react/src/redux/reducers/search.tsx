import { CHANGE_SEARCH_INPUT, CLICK_SEARCH_BUTTON, IAction } from '../action-types';

interface IState {
  query: string,
  errorMessage: string
}

const initialState: IState = {
  query: '',
  errorMessage: ''
};

const searchReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT: {
      const { content } = action.payload;

      return {
        ...state,
        query: content
      };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;