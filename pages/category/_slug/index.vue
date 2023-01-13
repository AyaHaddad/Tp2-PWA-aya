<template>
  <section>
    <v-container class="px-10 pt-10 pb-0" fluid>
      <v-btn
        @click="goBack"
        color="white"
        elevation="12"
        large
        rounded
        outlined
        class="ma-2"
        ><v-icon left> mdi-arrow-u-left-top</v-icon>Go back
      </v-btn>
    </v-container>
    <v-container class="px-10 pt-0 pb-16" fluid>
      <h1 class="categoryHeadline text-center py-7">{{ this.slug }}</h1>
      <v-row class="ma-3 flex-wrap" justify="start">
        <v-col
          v-for="(item, index) of items"
          :key="index"
          cols="12"
          md="4"
          lg="4"
          sm="6"
        >
          <v-card
            class="blurredCard categoryCard"
            @click="redirect(`/category/${slug}/${getOnlyId(item.url)}`)"
            elevation="12"
          >
            <v-card-text>
              <div class="categoryCaption white--text pb-3">
                {{ item.name || item.title
                }}<v-icon right>mdi-chevron-right</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="d-flex flex-row justify-center align-center">
        <v-btn
          v-if="prev"
          @click="onPreviousPage"
          rounded
          large
          elevation="12"
          class="primaryBtn ma-2 mt-4"
          ><v-icon left>mdi-chevron-left</v-icon>Previous Page</v-btn
        >
        <v-btn
          v-if="next"
          @click="onNextPage"
          rounded
          large
          elevation="12"
          class="primaryBtn ma-2 mt-4"
          >Next Page<v-icon right>mdi-chevron-right</v-icon></v-btn
        >
      </div>
    </v-container>
  </section>
</template>
<script>
import api from "../../../store/api";

export default {
  name: "category",
  data: () => ({
    page: 1,
    items: [],
  }),

  async asyncData({ params }) {
    let res = await api.getItemsFromCategory(params.slug);
    console.log(res);
    let items = res.results;
    let next = res.next ? true : false;
    let prev = res.previous ? true : false;
    return { items, slug: params.slug, next: next, prev: prev };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    redirect(link) {
      this.$router.push(link);
    },
    getOnlyId(string) {
      let arrayString = string.split("/");
      return arrayString[arrayString.length - 2];
    },
    async onNextPage() {
      this.page++;
      let res = await api.getItemsFromCategory(this.slug, this.page);
      this.next = res.next;
      this.prev = res.previous;
      this.items = res.results;
    },
    async onPreviousPage() {
      this.page--;
      let res = await api.getItemsFromCategory(this.slug, this.page);
      this.prev = res.previous;
      this.items = res.results;
    },
  },
};
</script>
