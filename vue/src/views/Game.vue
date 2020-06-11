<template>
  <div id="game">
   
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Game",
  computed: mapState([
    "duration",
    "difficulty",
    "types"
  ]),
  methods: {

  }
};
</script>

<style scoped lang="scss">

</style>
