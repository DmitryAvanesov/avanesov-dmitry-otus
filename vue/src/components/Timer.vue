<template>
  <div
    class="timer"
  >{{parseInt((ranges.duration.value * 60 - secondsPassed) / 60)}}:{{((ranges.duration.value * 60 - secondsPassed) % 60).toString().length == 1 ? 0 : ''}}{{(ranges.duration.value * 60 - secondsPassed) % 60}}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Timer",
  data() {
    return {
      secondsPassed: 0
    };
  },
  computed: mapState(["ranges"]),
  mounted: function() {
    this.interval = setInterval(() => {
      if (this.secondsPassed < this.ranges.duration.value * 60) {
        this.secondsPassed++;
      } else {
        this.$router.go(-1);
      }
    }, 1000);
  },
  beforeDestroy: function() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped lang="scss">
.timer {
  float: right;
  font-weight: bold;
  border: 1px black solid;
  border-radius: 5%;
  width: fit-content;
  padding: 10px 15px;
}
</style>
