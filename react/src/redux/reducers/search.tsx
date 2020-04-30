import { CHANGE_SEARCH_INPUT, CLICK_SEARCH_BUTTON, IAction } from '../action-types';
import { data } from '../../constants';

interface IState {
  added: Array<string>,
  query: string,
  errorMessage: string
}

const initialState: IState = {
  added: new Array<string>(),
  query: '',
  errorMessage: ''
};

const searchReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT: {
      const { newQuery } = action.payload;

      return {
        ...state,
        query: newQuery.toLowerCase()
      };
    }
    case CLICK_SEARCH_BUTTON: {
      if (Object.keys(data).includes(state.query)) {
        if (state.added.includes(state.query)) {
          return {
            ...state,
            errorMessage: 'Error: this city is already in favorites list'
          };
        }

        return {
          ...state,
          added: [...state.added, state.query],
          query: '',
          errorMessage: ''
        };
      }

      return {
        ...state,
        errorMessage: 'Error: city not found'
      };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;