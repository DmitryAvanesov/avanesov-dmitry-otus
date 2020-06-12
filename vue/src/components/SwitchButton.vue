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
</style>
