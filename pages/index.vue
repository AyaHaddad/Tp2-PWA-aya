<template>
  <section>
    <div class="background hidden-xs-only">
      <div class="flex-container pa-9 d-flex flex-column justify-space-around">
        <HomeBlockWiki style="max-width: 50%" />
        <HomeBlockQuizz style="max-width: 50%" />
      </div>
    </div>
    <div
      class="background hidden-sm-and-up"
      style="background: #000 !important"
    >
      <div
        class="flex-container pa-9 d-inline-flex flex-column justify-space-around"
      >
        <HomeBlockWiki align="center" />
        <HomeBlockQuizz style="text-align: center" />
      </div>
    </div>
  </section>
</template>

<script>
import api from "../store/api";
import Navbar from "../components/Navbar.vue";
import HomeBlockQuizz from "../components/HomeBlockQuiz.vue";
import HomeBlockWiki from "../components/HomeBlockWiki.vue";
export default {
  components: { Navbar, HomeBlockQuizz, HomeBlockWiki },
  name: "IndexPage",
  layout: "index",
};
</script>
