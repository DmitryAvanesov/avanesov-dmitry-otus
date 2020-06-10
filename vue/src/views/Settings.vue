<template>
  <div id="settings">
    <div class="greeting-header">Hello!</div>
    <div class="stats">
      <p>Welcome to the training day #{{day}}.</p>
      <p>
        Your last result is
        <b>{{lastResult.solved}}/{{lastResult.total}}</b>.
      </p>
      <p>The average precision is {{precision}}%.</p>
    </div>

    <form>
      <p class="settings-header">Settings</p>

      <input @input="onChangeDuration" type="range" min="1" max="5" :value="duration" />
      <p>Duration: {{duration}} min</p>

      <input @input="onChangeDifficulty" type="range" min="1" max="10" :value="difficulty" />
      <p>Difficulty: {{difficulty}}</p>

      <div>
        <input @input="onCheckType" type="checkbox" value="addition" :checked="types.addition" />
        <span>Addition</span>
      </div>

      <div>
        <input
          @input="onCheckType"
          type="checkbox"
          value="subtraction"
          :checked="types.subtraction"
        />
        <span>Subtraction</span>
      </div>

      <div>
        <input
          @input="onCheckType"
          type="checkbox"
          value="multiplication"
          :checked="types.multiplication"
        />
        <span>Multiplication</span>
      </div>

      <div>
        <input @input="onCheckType" type="checkbox" value="division" :checked="types.division" />
        <span>Division</span>
      </div>

      <div>
        <input
          @input="onCheckType"
          type="checkbox"
          value="exponentiation"
          :checked="types.exponentiation"
        />
        <span>Exponentiation</span>
      </div>

      <button>
        <router-link to="/game">Play</router-link>
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Settings",
  computed: mapState([
    "day",
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
</style>
