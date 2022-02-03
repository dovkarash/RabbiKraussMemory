<template>
  <div class="popup-wrap" :class="{ open: popupOpen }" @click="close">
    <button @click="close" type="button" class="close-pop">
      <img src="../assets/close.svg" />
    </button>
    <div @click.stop class="popup-box">
      <img :src="image.imageURL" height="" width="" class="popup-img" />
      <div class="">
        <h4 class="box-head">{{ title }}</h4>
        <p class="date">{{ new Date(date).toLocaleDateString() }}</p>
        <div v-if="hebrewDate" class="date-sep"></div>
        <p class="date">{{ hebrewDate }}</p>
      </div>
    </div>
  </div>
</template>
      <script>
export default {
  name: "popup",
  props: {
    image: Object,
    title: String,
    date: String,
    hebrewDate: String,
    open: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  data() {
    return {
      popupOpen: this.open,
    };
  },
};
</script>