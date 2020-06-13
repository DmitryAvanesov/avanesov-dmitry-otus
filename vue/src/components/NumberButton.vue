<template>
  <button @click="onClick" class="number-button">{{number}}</button>
</template>

<script>
export default {
  name: "NumberButton",
  props: ["number"],
  methods: {
    onClick() {
      this.$store.commit("addNumber", this.number);
    }
  }
};
</script>

<style scoped lang="scss">
.number-button {
  width: 75px;
  height: 75px;
  font-size: 36px;
  border: 5px solid #0168df;
  border-radius: 50%;
  background-color: #0075ff;
  color: white;
  margin: 10px 15px;
  cursor: pointer;
}
</style>
