<template>
  <button @click="onClick" class="switch-button">{{direction}}</button>
</template>

<script>
export default {
  name: "SwitchButton",
  props: ["direction"],
  methods: {
    onClick() {
      this.$store.commit("switchChosenValue", this.direction);
    }
  }
};
</script>

<style scoped lang="scss">
.switch-button {
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
</style>
