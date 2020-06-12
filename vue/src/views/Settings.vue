<template>
  <div id="settings">
    <div class="greeting-header">Hello!</div>
    <stats />

    <form>
      <p class="settings-header">Settings</p>
      <range v-for="rangeName in rangeNames" :rangeName="rangeName" :key="rangeName" />
      <type v-for="typeName in typeNames" :typeName="typeName" :key="typeName" />
      <router-link
        class="play-button"
        :class="{'disabled-button': numberOfCheckedTypes == 0}"
        to="/game"
        :event="numberOfCheckedTypes == 0 ? '' : 'click'"
      >Play</router-link>
    </form>
  </div>
</template>

<script>
import Stats from "../components/Stats";
import Type from "../components/Type";
import Range from "../components/Range";
import { mapState } from "vuex";

export default {
  name: "Settings",
  data() {
    return {
      rangeNames: this.$store.getters.rangeNames,
      typeNames: this.$store.getters.typeNames
    };
  },
  computed: mapState(["numberOfCheckedTypes"]),
  components: {
    stats: Stats,
    range: Range,
    type: Type
  }
};
</script>

<style scoped lang="scss">
#settings {
  margin: 20px 15px;
  font-size: 18px;

  .greeting-header {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .settings-header {
    margin: 0 0 20px 0;
    font-size: 32px;
  }

  .play-button {
    background-color: #0075ff;
    border: none;
    border-radius: 5%;
    padding: 10px 15px;
    font-size: 22px;
    text-decoration: none;
    color: white;
  }

  .disabled-button {
    background-color: lightgray;
    cursor: default;
  }
}
</style>
