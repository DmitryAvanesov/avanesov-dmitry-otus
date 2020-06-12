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
  computed: mapState(["ranges", "types", "guessedValues"]),
  methods: {
    setValues() {
      this.knownValue = Math.floor(
        Math.floor(Math.random() * (2 ** this.ranges.difficulty.value + 10))
      );

      this.numberOfArithmetics =
        Math.floor(Math.random() * (this.ranges.difficulty.value / 3)) + 1;

      this.operators = new Array();
      this.unknownValues = new Array();
      this.result = new Array();
      this.result.push(this.knownValue);
    },
    randomizeEquation() {
      for (let i = 0; i < this.numberOfArithmetics; i++) {
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
          this.operators[i] == "**"
            ? Math.floor(Math.random() * (this.ranges.difficulty.value / 3)) + 1
            : Math.floor(
                Math.random() * (2 ** this.ranges.difficulty.value + 10)
              )
        );

        this.result.push(this.operators[i]);
        this.result.push(this.unknownValues[i]);
      }

      this.$store.commit("setGuessedValuesSize", this.numberOfArithmetics);
    },
    getResult() {
      let position = 1;

      while (position < this.result.length) {
        if (this.result[position] == "**") {
          this.result.splice(
            position - 1,
            3,
            this.result[position - 1] ** this.result[position + 1]
          );
        } else {
          position += 2;
        }
      }

      position = 1;

      while (position < this.result.length) {
        if (this.result[position] == "/") {
          this.result.splice(
            position - 1,
            3,
            parseInt(this.result[position - 1] / this.result[position + 1])
          );
        } else if (this.result[position] == "*") {
          this.result.splice(
            position - 1,
            3,
            this.result[position - 1] * this.result[position + 1]
          );
        } else {
          position += 2;
        }
      }

      position = 1;

      while (position < this.result.length) {
        if (this.result[position] == "-") {
          this.result.splice(
            position - 1,
            3,
            this.result[position - 1] - this.result[position + 1]
          );
        } else if (this.result[position] == "+") {
          this.result.splice(
            position - 1,
            3,
            this.result[position - 1] + this.result[position + 1]
          );
        } else {
          position += 2;
        }
      }

      this.result = this.result[0];
    }
  },
  created: function() {
    this.setValues();
    this.randomizeEquation();
    this.getResult();
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
