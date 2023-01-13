<template>
  <section>
    <v-card class="blurredCard pa-6">
      <h1 class="questionHeadline white--text">Welcome to Star Wars library</h1>
      <p class="body-1 pt-2">
        All the Star Wars data you've ever wanted: Planets, Spaceships, Vehicles, People, Films and Species. From all SEVEN Star Wars films. Now with The Force Awakens data!
      </p>
      <v-btn
        rounded
        large
        elevation="12"
        @click="redirect"
        class="primaryBtn mt-2"
        >Wiki</v-btn
      >
    </v-card>
  </section>
</template>
<script>
export default {
  methods: {
    redirect() {
      this.$router.push("/category");
    },
  },
};
</script>
