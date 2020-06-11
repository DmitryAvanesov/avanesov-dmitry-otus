<template>
  <div class="equation">
    <span>{{knownValue}}</span>
    <span
      v-for="(operator, index) in operators"
      :key="index"
    >{{operator}} {{guessedValues[index] || '___'}}</span>
    <span>= {{result}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Equation",
  computed: mapState(["ranges", "types"]),
  created: function() {
    this.knownValue = Math.floor(
      Math.floor(Math.random() * (2 ** this.ranges.difficulty.value + 10))
    );

    const numberOfArithmetics =
      Math.floor(Math.random() * (this.ranges.difficulty.value / 3)) + 1;

    this.operators = new Array();
    this.unknownValues = new Array();
    this.guessedValues = new Array();
    this.result = new Array();
    this.result.push(this.knownValue);

    for (let i = 0; i < numberOfArithmetics; i++) {
      const operatorCoef = Math.random() * this.ranges.difficulty.value;

      this.operators.push(
        operatorCoef < 2 && this.types.addition
          ? "+"
          : operatorCoef < 4 && this.types.subtraction
          ? "-"
          : operatorCoef < 6 && this.types.multiplication
          ? "*"
          : operatorCoef < 8 && this.types.division
          ? "/"
          : this.types.exponentiation
          ? "**"
          : this.types.division
          ? "/"
          : this.types.multiplication
          ? "*"
          : this.types.subtraction
          ? "-"
          : "+"
      );

      this.unknownValues.push(
        this.operators == "**"
          ? Math.floor(Math.random() * (this.ranges.difficulty.value / 3)) + 1
          : Math.floor(Math.random() * (2 ** this.ranges.difficulty.value + 10))
      );

      this.guessedValues.push(undefined);

      this.result.push(this.operators[i]);
      this.result.push(this.unknownValues[i]);

      for (const [index, value] of this.result.entries()) {
        if (value == "**") {
          this.result.splice(
            index - 1,
            3,
            this.result[index - 1] ** this.result[index + 1]
          );

          console.log(this.result);
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.equation {
  margin: 50px auto;
  width: fit-content;
  font-size: 40px;

  * {
    margin-right: 15px;
  }
}
</style>
