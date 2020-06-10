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
  getters: {
    typeNames: state => Object.keys(state.types)
  },
  mutations: {
    changeDuration(state, newDuration) {
      state.duration = newDuration;
    },
    changeDifficulty(state, newDifficulty) {
      state.difficulty = newDifficulty;
    },
    checkType(state, typeName) {
      state.types[typeName] = !state.types[typeName];
    }
  }
});
