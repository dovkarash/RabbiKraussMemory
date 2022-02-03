
      <template>
  <div>
    <div class="w1200">
      <div class="top-line"></div>
      <h1 class="small-center-head">Obituaries in</h1>
      <h1 class="center-head">Publications</h1>
      <div class="group-wrap">
        <a
          :href="article.link"
          target="_blank"
          v-for="article in publications"
          :key="article._id"
          class="link-box pub"
        >
          <p class="box-head row3">
            {{ article.title }}
          </p>
          <p class="date">Continue reading</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publications: [],
    };
  },
  async beforeMount() {
    let { data: publications } = await this.$db
      .collection("publications")
      .sort("date", "desc")
      .get();
    this.publications = publications;
  },
};
</script>