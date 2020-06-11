<template>
  <div class="equation">
    <span>{{knownValue}}</span>
    <span
      v-for="(operator, index) in operators"
      :key="index"
    >{{operator}} {{guessedValues[index] || '___'}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Equation",
  computed: mapState(["ranges", "types"]),
  created: function() {
    this.knownValue = Math.floor(
      Math.random() * 5 ** this.ranges.difficulty.value
    );

    const numberOfArithmetics =
      Math.floor(Math.random() * (this.ranges.difficulty.value / 3)) + 1;

    this.operators = new Array();
    this.unknownValues = new Array();
    this.guessedValues = new Array();

    for (let i = 0; i < numberOfArithmetics; i++) {
      const operatorCoef = Math.random() * this.ranges.difficulty.value;

      this.operators.push(
        operatorCoef < 2
          ? "+"
          : operatorCoef < 4
          ? "-"
          : operatorCoef < 6
          ? "*"
          : operatorCoef < 8
          ? "/"
          : "**"
      );

      this.unknownValues.push(
        Math.floor(Math.random() * 5 ** this.ranges.difficulty.value)
      );

      this.guessedValues.push(undefined);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
