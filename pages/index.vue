<template>
  <div>
    <h2>Welcome to the best corny dad jokes app on the web</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  useHead() {
    return {
      title: "Welcome To Dad Jokes",
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
