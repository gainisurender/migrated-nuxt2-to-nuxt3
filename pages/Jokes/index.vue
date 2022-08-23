<template>
  <div>
    <SearchJokes v-on:search-text="searchText" />
    <h1 v-if="load">Okay</h1>

    <Joke
      v-else
      v-for="joke in jokes"
      :key="joke.id"
      :id="joke.id"
      :joke="joke.joke"
    />
    <Load v-if="load" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
// import { JokeItem, JokeResponseRoot } from "~~/types/joke";

const Joke = resolveComponent("Joke");
const route = useRoute();
let jokes = ref([]);
// let text = ref('');
const load = ref(false);

const fetchJokes = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    load.value = true;
    const res = await $fetch("https://icanhazdadjoke.com/search", config);
    console.log(" this is data : " + res.results);
    jokes.value = res.results;
    load.value = false;
  } catch (err) {
    console.log(err);
    load.value = false;
  }
};

const searchText = async (value: string) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await $fetch(
      `https://icanhazdadjoke.com/search?term=${value}`,
      config
    );
    jokes.value = res.results;
  } catch (err) {
    console.log(err);
  }
};
await useAsyncData(searchText);

await useAsyncData(fetchJokes);

useHead({
  title: "Dad Jokes",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Best place for corny dad jokes",
    },
  ],
});
</script>

<style></style>