<template>
  <div class="stats">
    <p>Welcome to the training day #{{day}}.</p>
    <p>
      Your last result is
      <span class="highlight">{{lastResult.solved}}/{{lastResult.total}}</span>.
    </p>
    <p>The average precision is {{precision}}%.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Settings",
  data() {
    return {
      day: parseInt(Date.now() / 8.64e7) - 18423
    };
  },
  computed: mapState(["lastResult", "precision"])
};
</script>

<style scoped lang="scss">
.stats {
  margin-bottom: 25px;

  * {
    margin: 0 0 5px 0;

    .highlight {
      font-weight: bold;
    }
  }
}
</style>
