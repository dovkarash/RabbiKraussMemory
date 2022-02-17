
<template>
  <div>
    <div class="w1200">
      <div class="top-line"></div>
      <h1 class="center-head">Personal Tributes</h1>
      <div class="group-wrap">
        <router-link
          :to="'/tribute/' + article._id"
          class="link-box"
          v-for="article in tributes"
          :key="article._id"
        >
          <h3 class="box-head down" v-if="article.header">
            {{ article.header }}
          </h3>
          <div v-else>
            <p class="box-txt row3" v-html="article.tribute"></p>
            <p class="read">Continue reading</p>
          </div>
          <p class="small-name">{{ article.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tributes: [],
    };
  },
  async beforeMount() {
    let { data: tributes } = await this.$db
      .collection("tributes")
      // .sort("date", "desc")
      .sort("order", "asc")
      .query("premision._id", "=", "c7tee1223aks73alfe80")
      .get();
    this.tributes = tributes;
  },
};
</script>