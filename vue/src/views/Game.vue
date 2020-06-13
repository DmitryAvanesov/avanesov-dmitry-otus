<template>
  <div id="game">
    <router-link class="cancel-button" to="/settings">Cancel</router-link>
    <timer />
    <equation />
    <div class="buttons">
      <div class="button-block">
        <div class="button-row" v-for="row in 3" :key="row">
          <number-button v-for="col in 3" :number="(row - 1) * 3 + col" :key="col" />
        </div>
        <number-button :number="0" />
      </div>
      <div class="button-block">
        <switch-button :direction="'<'" />
        <switch-button :direction="'>'" />
        <button @click="onResetButtonClick" class="reset-button">C</button>
        <button
          @click="onConfirmButtonClick"
          class="confirm-button"
          :class="{correct: checkHighlight == 'correct', incorrect: checkHighlight == 'incorrect'}"
        >=</button>
      </div>
    </div>
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
  computed: mapState(["duration", "difficulty", "types", "checkHighlight"]),
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

  .buttons {
    width: fit-content;
    margin: 50px auto;
    border: #0075ff 2px solid;
    border-radius: 5%;
    padding: 15px;

    .button-block {
      display: inline-block;
      vertical-align: middle;
      margin: 0 50px;

      & > * {
        display: block;
        margin: 10px auto;
      }

      *:focus {
        outline: none;
        box-shadow: none;
      }
    }

    .reset-button {
      width: 75px;
      height: 75px;
      font-size: 36px;
      font-weight: bold;
      border: 5px solid black;
      border-radius: 50%;
      background-color: white;
      margin: 10px 15px;
      cursor: pointer;
    }

    .confirm-button {
      width: 75px;
      height: 75px;
      font-size: 36px;
      font-weight: bold;
      border: 5px solid black;
      border-radius: 50%;
      background-color: white;
      margin: 10px 15px;
      cursor: pointer;
      transition: background-color 2s, color 2s;

      &.correct {
        background-color: #006400;
        color: white;
      }

      &.incorrect {
        background-color: #8b0000;
        color: white;
      }
    }
  }

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
