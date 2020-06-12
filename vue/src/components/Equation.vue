<template>
  <div class="equation">
    <span>{{knownValue}}</span>
    <span v-for="(operator, index) in operators" :key="index">
      {{operator}}
      <span :class="{chosen: chosenValue == index}">{{guessedValues[index] || '___'}}</span>
    </span>
    <span>= {{result}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Equation",
  computed: mapState([
    "ranges",
    "types",
    "knownValue",
    "operators",
    "unknownValues",
    "guessedValues",
    "result",
    "chosenValue"
  ]),
  created: function() {
    this.$store.commit("setEquation");
  }
};
</script>

<style scoped lang="scss">
.equation {
  margin: 50px auto;
  width: fit-content;
  font-size: 40px;

  & > * {
    margin-right: 10px;
  }

  .chosen {
    font-weight: bold;
  }
}
</style>
