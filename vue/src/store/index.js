import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastResult: {
      current: {
        solved: 0,
        total: 0
      },
      solved: localStorage.getItem("lastResult") ? localStorage.getItem("lastResult").solved : 0,
      total: localStorage.getItem("lastResult") ? localStorage.getItem("lastResult").total : 0
    },
    allResults: {
      solved: localStorage.getItem("allResult") ? localStorage.getItem("allResult").solved : 0,
      total: localStorage.getItem("allResult") ? localStorage.getItem("allResult").total : 0
    },
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
    knownValue: 0,
    operators: new Array(),
    unknownValues: new Array(),
    guessedValues: new Array(),
    result: new Array(),
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
      else {
        state.numberOfCheckedTypes++;
      }
    },
    setGame(state) {
      state.lastResult.current.solved = 0;
      state.lastResult.current.total = 0;
    },
    setEquation(state) {
      state.knownValue = Math.floor(
        Math.floor(Math.random() * (2 ** state.ranges.difficulty.value + 10))
      );

      const numberOfArithmetics =
        Math.floor(Math.random() * (state.ranges.difficulty.value / 3)) + 1;

      state.operators = new Array();
      state.unknownValues = new Array();
      state.result = new Array();
      state.result.push(state.knownValue);

      for (let i = 0; i < numberOfArithmetics; i++) {
        const operatorCoef = Math.random() * state.ranges.difficulty.value;

        state.operators.push(
          operatorCoef < 2 && state.types.addition
            ? "+"
            : operatorCoef < 4 && state.types.subtraction
              ? "-"
              : operatorCoef < 6 && state.types.multiplication
                ? "*"
                : operatorCoef < 8 && state.types.division
                  ? "/"
                  : state.types.exponentiation
                    ? "**"
                    : state.types.division
                      ? "/"
                      : state.types.multiplication
                        ? "*"
                        : state.types.subtraction
                          ? "-"
                          : "+"
        );

        state.unknownValues.push(
          state.operators[i] == "**"
            ? Math.floor(Math.random() * (state.ranges.difficulty.value / 3)) + 1
            : Math.floor(
              Math.random() * (2 ** state.ranges.difficulty.value + 10)
            )
        );

        state.result.push(state.operators[i]);
        state.result.push(state.unknownValues[i]);
      }

      state.guessedValues = new Array(numberOfArithmetics);

      let position = 1;

      while (position < state.result.length) {
        if (state.result[position] == "**") {
          state.result.splice(
            position - 1,
            3,
            state.result[position - 1] ** state.result[position + 1]
          );
        } else {
          position += 2;
        }
      }

      position = 1;

      while (position < state.result.length) {
        if (state.result[position] == "/") {
          state.result.splice(
            position - 1,
            3,
            parseInt(state.result[position - 1] / state.result[position + 1])
          );
        } else if (state.result[position] == "*") {
          state.result.splice(
            position - 1,
            3,
            state.result[position - 1] * state.result[position + 1]
          );
        } else {
          position += 2;
        }
      }

      position = 1;

      while (position < state.result.length) {
        if (state.result[position] == "-") {
          state.result.splice(
            position - 1,
            3,
            state.result[position - 1] - state.result[position + 1]
          );
        } else if (state.result[position] == "+") {
          state.result.splice(
            position - 1,
            3,
            state.result[position - 1] + state.result[position + 1]
          );
        } else {
          position += 2;
        }
      }

      state.result = state.result[0];

      state.lastResult.current.total++;
      state.chosenValue = 0;
    },
    addNumber(state, number) {
      Vue.set(state.guessedValues, state.chosenValue, state.guessedValues[state.chosenValue] ? parseInt(`${state.guessedValues[state.chosenValue]}${number}`) : number);
    },
    switchChosenValue(state, direction) {
      state.chosenValue = direction == "<" ? Math.max(0, state.chosenValue - 1) : Math.min(state.guessedValues.length - 1, state.chosenValue + 1);
    },
    resetNumber(state) {
      Vue.set(state.guessedValues, state.chosenValue, parseInt(state.guessedValues[state.chosenValue].toString().slice(0, -1)));
    },
    checkConfirmation(state) {
      let confirmedResult = new Array();
      confirmedResult.push(state.knownValue);

      for (let i = 0; i < state.unknownValues.length; i++) {
        confirmedResult.push(state.operators[i]);
        confirmedResult.push(state.unknownValues[i]);
      }

      let position = 1;

      while (position < confirmedResult.length) {
        if (confirmedResult[position] == "**") {
          confirmedResult.splice(
            position - 1,
            3,
            confirmedResult[position - 1] ** confirmedResult[position + 1]
          );
        } else {
          position += 2;
        }
      }

      position = 1;

      while (position < confirmedResult.length) {
        if (confirmedResult[position] == "/") {
          confirmedResult.splice(
            position - 1,
            3,
            parseInt(confirmedResult[position - 1] / confirmedResult[position + 1])
          );
        } else if (confirmedResult[position] == "*") {
          confirmedResult.splice(
            position - 1,
            3,
            confirmedResult[position - 1] * confirmedResult[position + 1]
          );
        } else {
          position += 2;
        }
      }

      position = 1;

      while (position < confirmedResult.length) {
        if (confirmedResult[position] == "-") {
          confirmedResult.splice(
            position - 1,
            3,
            confirmedResult[position - 1] - confirmedResult[position + 1]
          );
        } else if (confirmedResult[position] == "+") {
          confirmedResult.splice(
            position - 1,
            3,
            confirmedResult[position - 1] + confirmedResult[position + 1]
          );
        } else {
          position += 2;
        }
      }

      confirmedResult = confirmedResult[0];

      if (confirmedResult == state.result) {
        state.lastResult.current.solved++;
      }
    },
    finishGame(state) {
      state.lastResult.solved = state.lastResult.current.solved;
      state.lastResult.total = state.lastResult.current.total;
      state.allResults.solved += state.lastResult.solved;
      state.allResults.total += state.lastResult.total;

      localStorage.setItem("lastResult", {
        solved: state.lastResult.solved,
        total: state.lastResult.total
      });

      localStorage.setItem("allResults", {
        solved: state.allResults.solved,
        total: state.allResults.total
      })
    }
  }
});
