import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    day: 1,
    lastResult: {
      solved: 20,
      total: 25
    },
    precision: 75,
    duration: 3,
    difficulty: 5,
    types: {
      addition: true,
      subtraction: true,
      multiplication: true,
      division: true,
      exponentiation: false
    }
  },
  mutations: {
    changeDuration(state, newDuration) {
      state.duration = newDuration;
    },
    changeDifficulty(state, newDifficulty) {
      state.difficulty = newDifficulty;
    }
  }
});
