
<template>
  <div>
    <div class="w1200">
      <div class="center">
        <div class="big-head-wrap">
          <h1 class="huge-head">Articles</h1>
          <div class="top-line down"></div>
        </div>
      </div>
      <div class="group-wrap">
        <a
          :href="article.link"
          target="_blank"
          v-for="article in shiurimArticles"
          :key="article._id"
          class="art-box"
        >
          <img
            :src="article.image.imageURL"
            height=""
            width=""
            class="art-box-img"
          />
          <div class="art-box-txt-wrap">
            <p class="box-head row3">
              {{ article.title }}
            </p>
            <p class="date">
              {{ new Date(article.date).toLocaleDateString() }}
            </p>
            <p class="box-txt row3">
              {{ article.blurb }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shiurimArticles: [],
    };
  },
  async beforeMount() {
    let { data: shiurimArticles } = await this.$db
      .collection("shiurimArticles")
      .sort("date", "desc")
      .get();
    this.shiurimArticles = shiurimArticles;
  },
};
</script>