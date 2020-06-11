<template>
  <div class="range">
    <input
      @input="onChangeRange"
      type="range"
      :min="ranges[rangeName].min"
      :max="ranges[rangeName].max"
      :value="ranges[rangeName].value"
    />
    <p class="range-label">{{ranges[rangeName].label}}: {{ranges[rangeName].value}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Range",
  props: ["rangeName"],
  computed: mapState(["ranges"]),
  methods: {
    onChangeRange(e) {
      this.$store.commit("changeRange", {
        rangeName: this.rangeName,
        newRangeValue: e.target.value
      });
    }
  }
};
</script>

<style scoped lang="scss">
.range {
  &:last-of-type {
    margin-bottom: 25px;
  }

  .range-label {
    margin: 0 0 15px 0;
  }
}
</style>