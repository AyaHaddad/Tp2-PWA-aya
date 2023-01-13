<template>
  <section>
    <v-container class="pa-10" fluid>
      <h1 class="categoryHeadline text-center py-7">Categories</h1>
      <v-row class="ma-3 flex-wrap" justify="start">
        <v-col cols="12" md="4" lg="4" sm="6">
          <v-card
            class="blurredCard categoryCard"
            @click="redirect('category/species')"
            elevation="12"
          >
            <v-img
              :style="{ width: '100%' }"
              max-height="230"
              height="230"
              :src="require('../../assets/img/species.png')"
              class="image-card"
            />
            <v-card-text>
              <div class="categoryCaption white--text pb-3">
                Species<v-icon right>mdi-chevron-right</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4" sm="6">
          <v-card
            class="blurredCard categoryCard"
            @click="redirect('category/films')"
            elevation="12"
          >
            <v-img
              :style="{ width: '100%' }"
              max-height="230"
              height="230"
              :src="require('../../assets/img/films.jpeg')"
              class="image-card"
            />
            <v-card-text>
              <div class="categoryCaption white--text pb-3">
                Film<v-icon right>mdi-chevron-right</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4" sm="6">
          <v-card
            class="blurredCard categoryCard"
            @click="redirect('category/vehicles')"
            elevation="12"
          >
            <v-img
              :style="{ width: '100%' }"
              max-height="230"
              height="230"
              :src="require('../../assets/img/vehicles.jpeg')"
              class="image-card"
            />
            <v-card-text>
              <div class="categoryCaption white--text pb-3">
                Vehicle<v-icon right>mdi-chevron-right</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4" sm="6">
          <v-card
            class="blurredCard categoryCard"
            @click="redirect('category/people')"
            elevation="12"
          >
            <v-img
              :style="{ width: '100%' }"
              max-height="230"
              height="230"
              :src="require('../../assets/img/people.jpeg')"
              class="image-card"
            />
            <v-card-text>
              <div class="categoryCaption white--text pb-3">
                People<v-icon right>mdi-chevron-right</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4" sm="6">
          <v-card
            class="blurredCard categoryCard"
            @click="redirect('category/starships')"
            elevation="12"
          >
            <v-img
              :style="{ width: '100%' }"
              max-height="230"
              height="230"
              :src="require('../../assets/img/starships.jpeg')"
              class="image-card"
            />
            <v-card-text>
              <div class="categoryCaption white--text pb-3">
                Starship<v-icon right>mdi-chevron-right</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4" sm="6">
          <v-card
            class="blurredCard categoryCard"
            @click="redirect('category/planets')"
            elevation="12"
          >
            <v-img
              :style="{ width: '100%' }"
              max-height="230"
              height="230"
              :src="require('../../assets/img/planetes.jpeg')"
              class="image-card"
            />
            <v-card-text>
              <div class="categoryCaption white--text pb-3">
                Planet<v-icon right>mdi-chevron-right</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import api from "../../store/api";
import Navbar from "../../components/Navbar.vue";
export default {
  name: "categories",
  components: { Navbar },
  data() {
    return {
      categories: [
        {
          name: "Species",
          link: "category/species",
          img: "../../assets/img/species.png",
        },
        {
          name: "Film",
          link: "category/films",
          img: "../../assets/img/films.jpeg",
        },
        {
          name: "Vehicle",
          link: "category/vehicles",
          img: "../../assets/img/vehicles.jpeg",
        },
        {
          name: "People",
          link: "category/people",
          img: "../../assets/img/people.jpeg",
        },
        {
          name: "Starship",
          link: "category/starships",
          img: "../../assets/img/starships.jpeg",
        },
        {
          name: "Planet",
          link: "category/planets",
          img: "../../assets/img/planets.jpeg",
        },
      ],
    };
  },
  methods: {
    redirect(link) {
      this.$router.push(link);
    },
  },
};
</script>
