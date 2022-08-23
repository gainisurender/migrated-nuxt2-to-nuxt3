<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="text" placeholder="Search Jokes..." />
    <input type="submit" value="Search Jokes" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchJokes",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search-text", this.text);
      this.text = "";
    },
  },
});
</script>

<style>
</style>
