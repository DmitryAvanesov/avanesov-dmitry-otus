<template>
  <div class="checkbox-item">
    <input @input="onCheckType" type="checkbox" :value="typeName" :checked="types[typeName]" />
    <span class="checkbox-label">{{typeName}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Type",
  props: ["typeName"],
  computed: mapState(["types"]),
  methods: {
    onCheckType(e) {
      this.$store.commit("checkType", e.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
.checkbox-item {
    margin-bottom: 5px;

    &:last-of-type {
      margin-bottom: 50px;
    }

    .checkbox-label {
      margin-left: 5px;
      text-transform: capitalize;
    }
  }
</style>
