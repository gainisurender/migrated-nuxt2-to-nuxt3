<template>
  <div>
    <h1>About DadJokes</h1>
    <p>This is an app that displays corny dad jokes</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  useHead() {
    return {
      title: "About The App",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for corny dad jokes",
        },
      ],
    };
  },
});
</script>

<style>
</style>