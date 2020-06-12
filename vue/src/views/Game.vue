<template>
  <div id="game">
    <router-link class="cancel-button" to="/settings">Cancel</router-link>
    <timer />
    <equation />
    <number-button v-for="number in 10" :number="number - 1" :key="number" />
  </div>
</template>

<script>
import Timer from "../components/Timer";
import Equation from "../components/Equation";
import NumberButton from "../components/NumberButton";
import { mapState } from "vuex";

export default {
  name: "Game",
  computed: mapState(["duration", "difficulty", "types"]),
  components: {
    timer: Timer,
    equation: Equation,
    "number-button": NumberButton
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
