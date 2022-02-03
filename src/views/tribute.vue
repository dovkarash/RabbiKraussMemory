
<template>
  <div>
    <div class="w1200">
      <div class="trib-box">
        <router-link to="/personal-tributes" class="close-pop">
          <img src="../assets/close.svg" />
        </router-link>
        <div class="trib-info">
          <h1 class="big-name">{{ tribute.name }}</h1>
        </div>
        <p class="trip-txt" v-html="tribute.tribute"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tribute: {},
    };
  },
  async beforeMount() {
    const { params } = this.$route;
    let { data: tribute } = await this.$db
      .collection("tributes")
      .item(params.id)
      .get();
    this.tribute = tribute;
  },
};
</script>