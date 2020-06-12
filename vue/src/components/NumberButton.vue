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
</style>
