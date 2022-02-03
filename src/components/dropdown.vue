<template>
  <div class="nav-link drop" @click="openDrop = !openDrop">
    <div class="drop-head">
      <p class="nav-drop-txt">{{ title }}</p>
      <img src="../assets/down.svg" />
    </div>
    <div class="bgl-dropdown-content" :class="{ opendropdown: openDrop }">
      <!-- [{linkName: '', path: ''}] -->
      <router-link
        v-for="({ linkName, path }, i) of links"
        :to="path"
        :key="linkName + i"
        class="bg-dropdown-link"
      >
        {{ linkName }}
      </router-link>
    </div>
  </div>
</template>
      <script>
export default {
  name: "dropdown",
  data() {
    return {
      openDrop: false,
    };
  },
  props: {
    title: String,
    links: Array,
  },
};
</script>

