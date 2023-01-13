<template>
  <v-app>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <Navbar />
    <Nuxt />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "DefaultLayout",
  components: {
    Navbar,
  },
  // data () {
  //   return {
  //     clipped: false,
  //     drawer: false,
  //     fixed: false,
  //     items: [
  //       {
  //         icon: 'mdi-apps',
  //         title: 'Welcome',
  //         to: '/'
  //       },
  //       {
  //         icon: 'mdi-chart-bubble',
  //         title: 'Inspire',
  //         to: '/inspire'
  //       }
  //     ],
  //     miniVariant: false,
  //     right: true,
  //     rightDrawer: false,
  //     title: 'Vuetify.js'
  //   }
  // }
};
</script>
