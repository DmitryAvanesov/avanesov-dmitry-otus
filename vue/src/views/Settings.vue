<template>
  <div id="settings">
    <div class="greeting-header">Hello!</div>
    <div class="stats">
      <p>Welcome to the training day #{{day}}.</p>
      <p>
        Your last result is
        <span class="highlight">{{lastResult.solved}}/{{lastResult.total}}</span>.
      </p>
      <p>The average precision is {{precision}}%.</p>
    </div>

    <form>
      <p class="settings-header">Settings</p>

      <input @input="onChangeDuration" type="range" min="1" max="5" :value="duration" />
      <p class="range-label">Duration: {{duration}} min</p>

      <input @input="onChangeDifficulty" type="range" min="1" max="10" :value="difficulty" />
      <p class="range-label">Difficulty: {{difficulty}}</p>

      <div class="checkbox-item" v-for="typeName in typeNames" :key="typeName.id">
        <input @input="onCheckType" type="checkbox" :value="typeName" :checked="types[typeName]" />
        <span class="checkbox-label">{{typeName}}</span>
      </div>

      <router-link class="play-button" to="/game">Play</router-link>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Settings",
  data() {
    return {
      day: parseInt(Date.now() / 8.64e+7) - 18423,
      typeNames: this.$store.getters.typeNames
    };
  },
  computed: mapState([
    "lastResult",
    "precision",
    "duration",
    "difficulty",
    "types"
  ]),
  methods: {
    onChangeDuration(e) {
      this.$store.commit("changeDuration", e.target.value);
    },
    onChangeDifficulty(e) {
      this.$store.commit("changeDifficulty", e.target.value);
    },
    onCheckType(e) {
      this.$store.commit("checkType", e.target.value);
    },
    onPlayButtonClick() {}
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

  .stats {
    margin-bottom: 25px;

    * {
      margin: 0 0 5px 0;

      .highlight {
        font-weight: bold;
      }
    }
  }

  .settings-header {
    margin: 0 0 20px 0;
    font-size: 32px;
  }

  .range-label {
    margin: 0 0 15px 0;

    &:last-of-type {
      margin-bottom: 25px;
    }
  }

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

  .play-button {
    background-color: #0075ff;
    border: none;
    border-radius: 5%;
    padding: 10px 15px;
    font-size: 22px;
    text-decoration: none;
    color: white;
  }
}
</style>
