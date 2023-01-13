<template>
  <section>
    <v-card class="blurredCard pa-6">
      <h1 class="questionHeadline white--text">
        Want to test your knowledge ?
      </h1>
      <p class="body-1 pt-2">
        You can visit our database to find out about the different items on the
        star saga.
      </p>
      <v-btn
        rounded
        large
        elevation="12"
        @click="redirect"
        class="primaryBtn mt-2"
        >Quiz</v-btn
      >
    </v-card>
  </section>
</template>
<script>
export default {
  methods: {
    redirect() {
      this.$router.push("/Quiz");
    },
  },
};
</script>
