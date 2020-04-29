import { CHANGE_SEARCH_INPUT, CLICK_SEARCH_BUTTON, IAction } from '../action-types';

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
      const data = {
        'moscow': {
          temperature: '+7.3',
          wind: '1 m/s western',
          pressure: '735 mmHg',
          humidity: '45%'
        },
        'saint petersburg': {
          temperature: '+1.1',
          wind: '2 m/s southern',
          pressure: '746 mmHg',
          humidity: '76%'
        },
        'kazan': {
          temperature: '+6.3',
          wind: '0 m/s calm',
          pressure: '752 mmHg',
          humidity: '64%'
        },
        'tomsk': {
          temperature: '+7.7',
          wind: '1 m/s southern',
          pressure: '750 mmHg',
          humidity: '42%'
        }
      };

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