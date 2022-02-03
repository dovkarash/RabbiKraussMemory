
<template>
  <div>
    <div class="w1200">
      <div class="top-line"></div>
      <h1 class="small-center-head">Articles by</h1>

      <h1 class="center-head">Rabbi Simcha Krauss z”l</h1>
      <div class="group-wrap">
        <a
          :href="article.link"
          target="_blank"
          v-for="article in articlesByRabbiKrauss"
          :key="article._id"
          class="link-box pub"
        >
          <p class="box-head row3">
            {{ article.title }}
          </p>
          {{ new Date(article.date).toLocaleDateString() }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articlesByRabbiKrauss: [],
    };
  },
  async beforeMount() {
    let { data: articlesByRabbiKrauss } = await this.$db
      .collection("articlesByRabbiKrauss")
      .sort("date", "desc")
      .get();
    this.articlesByRabbiKrauss = articlesByRabbiKrauss;
  },
};
</script>