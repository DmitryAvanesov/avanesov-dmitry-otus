<template>
  <div id="game">
    <router-link class="cancel-button" to="/settings">Cancel</router-link>
    <timer />
    <equation />
    <number-button v-for="number in 10" :number="number - 1" :key="number" />
    <switch-button :direction="'<'" />
    <switch-button :direction="'>'" />
    <button @click="onResetButtonClick" class="reset-button">C</button>
    <button @click="onConfirmButtonClick" class="confirm-button">=</button>
  </div>
</template>

<script>
import Timer from "../components/Timer";
import Equation from "../components/Equation";
import NumberButton from "../components/NumberButton";
import SwitchButton from "../components/SwitchButton";
import { mapState } from "vuex";

export default {
  name: "Game",
  computed: mapState(["duration", "difficulty", "types"]),
  methods: {
    onResetButtonClick() {
      this.$store.commit("resetNumber");
    },
    onConfirmButtonClick() {
      this.$store.commit("checkConfirmation");
      this.$store.commit("setEquation");
    }
  },
  components: {
    timer: Timer,
    equation: Equation,
    "number-button": NumberButton,
    "switch-button": SwitchButton
  }
};
</script>

<style scoped lang="scss">
#game {
  margin: 20px 15px;
  font-size: 18px;

  .cancel-button {
    background-color: #0075ff;
    border: none;
    border-radius: 5%;
    padding: 10px 15px;
    font-size: 22px;
    text-decoration: none;
    color: white;
  }
}
</style>
