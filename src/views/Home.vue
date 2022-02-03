<template>
  <div class="home">
    <div class="main-hero">
      <div class="main-txt-box">
        <h1 class="main-head">
          Rabbi Simcha Krauss <span class="zl">z”l</span>
        </h1>
        <h2 class="head30">A Memorial to Rabbi Simcha Krauss</h2>
        <router-link to="/post" class="btn">Post a Tribute</router-link>
      </div>
      <div class="main-hero-grad"></div>
      <img src="../assets/RabbiKrauss2.jpg" class="main-hero-img" />
    </div>
    <div v-if="events.length" id="events" class="sec">
      <div class="w1200">
        <h3 class="head-sec">Events</h3>
        <div class="events-wrap">
          <div v-for="event in events" :key="event._id" class="event-box">
            <h4 class="box-head">{{ event.title }}</h4>
            <p class="date">{{ new Date(event.date).toLocaleDateString() }}</p>
            <div class="date-sep"></div>
            <p class="date">{{ event.hebrewDate }}</p>
            <p class="box-txt" v-html="event.description"></p>
          </div>
        </div>
      </div>
    </div>
    <div id="gallery" class="timeline-sec">
      <div class="w1200">
        <h3 class="head-sec">Gallery</h3>
        <div class="timelime-wrap">
          <div
            v-for="gallery in galleries"
            :key="gallery._id"
            class="timeline-box"
          >
            <div class="timeline-box-line">
              <div class="timeline-mark"></div>
            </div>
            <div class="timeline-box-img-wrap">
              <div
                v-for="image in gallery.image"
                :key="image.imageURL"
                class="timeline-img-wrap"
                @click="
                  selectPopup({
                    image: image,
                    date: gallery.date,
                    hebrewDate: gallery.hebrewDate,
                    title: gallery.title,
                  })
                "
              >
                <div class="timeline-icon-wrap">
                  <img
                    src="../assets/exp.svg"
                    height=""
                    width=""
                    class="timeline-icon"
                  />
                </div>
                <img
                  :src="image.imageURL + '&resize=500'"
                  class="timeline-img"
                />
              </div>
            </div>
            <div class="timeline-box-txt-wrap">
              <h4 class="box-head">{{ gallery.title }}</h4>
              <p class="date">
                {{ new Date(gallery.date).toLocaleDateString() }}
              </p>
              <div v-if="hebrewDate" class="date-sep"></div>
              <p class="date">{{ gallery.hebrewDate }}</p>
            </div>
          </div>

          <div class="timeline-line"></div>
        </div>
      </div>
    </div>

    <popup
      v-if="popupOpen"
      @close="popupOpen = false"
      :image="selected.image"
      :title="selected.title"
      :hebrewDate="selected.hebrewDate"
      :date="selected.date"
      :open="popupOpen"
    />
  </div>
</template>

<script>
import Popup from "../components/popup.vue";
export default {
  data() {
    return {
      events: [],
      galleries: [],
      selected: {},
      popupOpen: false,
    };
  },
  components: { Popup },
  methods: {
    selectPopup(selected) {
      this.selected = selected;
      this.popupOpen = true;
      console.log(this.popupOpen);
    },
  },
  async beforeMount() {
    const now = new Date(Date.now());
    const year = now.getFullYear();
    let month = String(now.getMonth());
    let day = String(now.getDate() + 10);

    month = month.length === 1 ? "0" + month : month;
    day = day.length === 1 ? "0" + day : day;

    // prettier-ignore
    const q = `${year}-${month}-${day}`;
    console.log(q);
    let { data: events } = await this.$db
      .collection("events")
      .query("date", ">", q)
      .get();
    this.events = events;
    let { data: galleries } = await this.$db
      .collection("galleries")
      .sort("date", "desc")
      .get();
    this.galleries = galleries;
  },
  name: "Home",
};
</script>