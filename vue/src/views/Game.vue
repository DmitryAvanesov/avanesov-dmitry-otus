<template>
  <div id="game">
    <router-link class="cancel-button" to="/settings">Cancel</router-link>
    <timer />
    <equation />
  </div>
</template>

<script>
import Timer from "../components/Timer";
import Equation from "../components/Equation";
import { mapState } from "vuex";

export default {
  name: "Game",
  computed: mapState(["duration", "difficulty", "types"]),
  components: {
    timer: Timer,
    equation: Equation
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
