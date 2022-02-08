<template>
  <div class="nav-bar">
    <router-link to="/" class="logo">
      <img src="../assets/icon.svg" />
      <p class="top-logo">Rabbi Simcha Krauss</p>
      <p class="logo-small-txt">A Jewish Leader</p></router-link
    >
    <div class="nav-links-wrap" :class="{ open: openSideBar }">
      <div class="close-nav" @click="openSideBar = false">
        <img src="../assets/close-small.svg" />
      </div>
      <a href="/#gallery" class="nav-link active">Gallery</a>

      <dropdown :links="dropDown.links" :title="dropDown.title" />

      <dropdown :links="dropDown1.links" :title="dropDown1.title" />

      <a v-if="events.length" href="/#events" class="nav-link">Events</a>
    </div>
    <button @click="openSideBar = true" type="button" class="menu-btn">
      <img src="../assets/menu.svg" />
    </button>
  </div>
</template>
      <script>
import dropdown from "./dropdown.vue";

export default {
  components: { dropdown },
  data() {
    return {
      events: [],
      openSideBar: false,
      openDrop: false,
      dropDown: {
        links: [
          { linkName: "Videos", path: "/shiurim-video" },
          { linkName: "Articles", path: "/shiurimarticles" },
        ],
        title: "Shiurim",
      },
      dropDown1: {
        links: [
          { linkName: "Levaya & Hespedim ", path: "/levaya" },
          { linkName: "Personal Tributes", path: "/personal-tributes" },
          { linkName: "Obituaries in Publications", path: "/publications" },
          {
            linkName: "Articles about Rabbi Krauss",
            path: "/articles",
          },
        ],
        title: "Tributes",
      },
    };
  },
  async beforeMount() {
    const now = new Date(Date.now());
    const year = now.getFullYear();
    let month = String(now.getMonth());
    let day = String(now.getDate() + 10);

    month = month.length === 1 ? "0" + month : month;
    day = day.length === 1 ? "0" + day : day;
    const q = `${year}-${month}-${day}`;

    let { data: events } = await this.$db
      .collection("events")
      .query("date", ">", q)
      .get();
    this.events = events;
  },
  name: "topnavbar",
};
</script>


