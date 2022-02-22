<template>
  <div>
    <div class="w1200">
      <div class="center">
        <div class="big-head-wrap">
          <h1 class="huge-head">Shloshim Events</h1>
          <div class="top-line down"></div>
        </div>
      </div>
      <div class="group-wrap">
        <a
          v-for="video in shiurimVideo"
          :key="video._id"
          :href="video.link"
          target="_blank"
          class="video-box"
        >
          <div class="video-box-img-wrap">
            <img
              src="../assets/play.svg"
              height=""
              width=""
              class="play-icon"
            />
            <img
              :src="video.thumbnail.imageURL"
              height=""
              width=""
              class="video-box-img"
            />
            <!-- <img
              :src="getYoutubeThumbnail(video.link)"
              height=""
              width=""
              class="video-box-img"
            /> -->
          </div>
          <p class="box-head row3">
            {{ video.title }}
          </p>
          <p v-if="video.date" class="date">
            {{ new Date(video.date).toLocaleDateString() }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shiurimVideo: [],
    };
  },
  components: {},
  methods: {
    getYoutubeThumbnail(vidLink) {
      const id = vidLink.split("v=").at(-1);
      //     quality: {
      // 	default: 'default',
      // 	medium: 'mqdefault',
      // 	high: 'hqdefault',
      // 	standard: 'sddefault',
      // 	maxres: 'maxresdefault'
      // }
      const url = "https://i.ytimg.com/vi/" + id + "/" + "hqdefault" + ".jpg";
      console.log(url);
      return url;
    },
  },
  async beforeMount() {
    let { data: shiurimVideo } = await this.$db
      .collection("shloshim")
      // .sort("date", "desc")
      .sort("order", "asc")
      .get();
    this.shiurimVideo = shiurimVideo;
  },
};
</script>