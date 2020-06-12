import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastResult: {
      solved: 20,
      total: 25
    },
    precision: 75,
    ranges: {
      duration: {
        min: 1,
        max: 5,
        value: 3,
        label: 'Duration (min)'
      },
      difficulty: {
        min: 1,
        max: 10,
        value: 5,
        label: 'Difficulty'
      }
    },
    types: {
      addition: true,
      subtraction: true,
      multiplication: true,
      division: true,
      exponentiation: false
    },
    numberOfCheckedTypes: 4,
    guessedValues: new Array(),
    chosenValue: 0
  },
  getters: {
    rangeNames: state => Object.keys(state.ranges),
    typeNames: state => Object.keys(state.types)
  },
  mutations: {
    changeRange(state, payload) {
      state.ranges[payload.rangeName].value = payload.newRangeValue;
    },
    checkType(state, typeName) {
      state.types[typeName] = !state.types[typeName];

      if (!state.types[typeName]) {
        state.numberOfCheckedTypes--;
      }
    },
    setGuessedValuesSize(state, size) {
      state.guessedValues = new Array(size);
    },
    addNumber(state, number) {
      Vue.set(state.guessedValues, state.chosenValue, state.guessedValues[state.chosenValue] ? parseInt(`${state.guessedValues[state.chosenValue]}${number}`) : number);
    },
    switchChosenValue(state, direction) {
      state.chosenValue = direction == "<" ? Math.max(0, state.chosenValue - 1) : Math.min(state.guessedValues.length, state.chosenValue + 1);
    }
  }
});
