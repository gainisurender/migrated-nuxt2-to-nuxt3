<template>
  <div>
    <nuxt-link to="/jokes">Back To Jokes</nuxt-link>
    <!-- <h2>{{ joke }}</h2> -->
    <hr />
    <small>Joke ID: {{ $route.params.id }}</small>
    <p>{{ this.joke.joke }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { JokeItem, JokeResponseRoot } from "~~/types/type";
const Search = ref("");
export default defineComponent({
  data() {
    return {
      joke: {},
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      console.log(this.$route.params.id);
      const res = await $fetch<JokeResponseRoot>(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      );
      console.log("res: " + res);

      this.joke = res;
      console.log("joke : " + this.joke);
    } catch (err) {
      console.log(err);
    }
  },
  useHead() {
    return {
      title: this.joke,
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

<style></style>