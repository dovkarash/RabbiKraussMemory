
<template>
  <div>
    <div class="w1200">
      <h3 class="head-sec">Post a Tribute</h3>
      <form
        action="/"
        class="post-form"
        @submit.prevent="sendForm"
        v-if="formStatus != 'success'"
      >
        <div class="form-left">
          <input
            placeholder="Name"
            type="text"
            id=""
            name=""
            class="dark-input"
            v-model="form.name"
          />
          <input
            placeholder="Email"
            type="email"
            id=""
            name=""
            class="dark-input"
            v-model="form.email"
          />
          <input
            placeholder="City"
            type="text"
            id=""
            name=""
            class="dark-input"
            v-model="form.city"
          />
          <div class="bgl-checkbox-wrap">
            <input
              class="bgl-checkbox"
              type="checkbox"
              id="bglcheckbox"
              name="bglcheckbox"
              checked=""
              v-model="form.agree"
            />
            <label class="bgl-checkbox-label" for="bglcheckbox"
              >I agree to publish this on the site</label
            >
          </div>
        </div>

        <div class="form-right">
          <textarea
            placeholder="Entry"
            id=""
            name=""
            class="dark-input big"
            v-model="form.tribute"
          ></textarea>
          <input type="submit" id="" value="Submit Tribute" class="btn form" />
        </div>
      </form>
      <div v-if="formStatus == 'fail'" class="form-fail">
        <p>Something went wrong while submitting</p>
      </div>
      <div v-if="formStatus == 'success'" class="form-success">
        <p>Thank you for the Tribute</p>
      </div>

      <div class="post-info">
        <p class="post-info-txt">
          If you have a video, article or photo you think should be featured in
          any other section of this website, you may include it in your post,
          but please also submit it to
          <a href="mailto:tharcsztark@gmail.com" target="_blank"
            >tharcsztark@gmail.com.</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formStatus: "",
      form: {
        name: "",
        email: "",
        city: "",
        tribute: "",
        agree: false,
      },
    };
  },
  methods: {
    async sendForm() {
      try {
        await this.$db.collection("tributes").post(this.form);
        this.formStatus = "success";
      } catch (err) {
        console.log(err.response.data);
        this.formStatus = "fail";
      }
    },
  },
};
</script>