import { IAction, CHANGE_SEARCH_INPUT, CLICK_SEARCH_BUTTON, UPDATE_DATA } from '../action-types';
import { IData } from '../../api';

interface IState {
  added: Array<string>,
  query: string,
  errorMessage: string,
  data: IData | undefined
}

const initialState: IState = {
  added: new Array<string>(),
  query: '',
  errorMessage: '',
  data: undefined
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
    case UPDATE_DATA: {
      const { newData } = action.payload;

      return {
        ...state,
        data: newData
      }
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;