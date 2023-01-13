<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="6" class="text-center">
        <h1 class="questionHeadline white--text mb-4">
          may the force be with you
        </h1>
        <v-card
          class="blurredCard d-flex flex-column justify-center align-center pa-6"
        >
          <div
            class="tenor-gif-embed"
            data-postid="16275086"
            data-share-method="host"
            data-aspect-ratio="1.72043"
            data-width="50%"
          >
            <a
              href="https://tenor.com/view/star-wars-chewbacca-joyful-screaming-joy-happy-gif-16275086"
              >Star Wars Chewbacca GIF</a
            >from
            <a href="https://tenor.com/search/star+wars-gifs">Star Wars GIFs</a>
          </div>
          <script
            type="text/javascript"
            async
            src="https://tenor.com/embed.js"
          ></script>
          <div>
            <h1 class="captionQuiz white--text mb-8 mt-4">
              "You are the chosen one. You have brought balance to this world.
              Stay on this path, and you will do it again for the galaxy. But
              beware of your heart."
            </h1>
            <v-row align="center" justify="center" class="pb-6">
              <v-btn
                rounded
                large
                elevation="12"
                @click="redirect"
                class="primaryBtn ma-2 mt-4"
                >Ready for the adventure<v-icon right> mdi-play </v-icon></v-btn
              >
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push("/quiz");
    },
  },
};
</script>
