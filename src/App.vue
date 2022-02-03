<template>
  <div id="app">
    <topnavbar />
    <router-view />
  </div>
</template>

<script>
import topnavbar from "./components/topnavbar.vue";

export default {
  name: "App",
  components: { topnavbar },
};
</script>

<style src="./main.css"></style>