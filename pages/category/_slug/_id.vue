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
      <v-row class="ma-5 flex-wrap" justify="center">
        <v-card class="blurredCard" elevation="12" width="70vw">
          <v-card-text class="v-category-item px-8">
            <h1 class="questionHeadline white--text py-5">
              {{ item.name || item.title }}
            </h1>
            <div v-for="(value, index) of item" :key="index">
              <div class="d-flex flex-row align-center">
                <v-chip color="white" outlined dense>{{ index }}</v-chip>
                <p class="v-category-item-text ml-4 mb-0">{{ value }}</p>
              </div>
              <v-divider class="my-2" dark></v-divider>
            </div>
          </v-card-text>
          <v-card-actions>
            <!-- <div>
              <v-btn v-if="resultAPI.previous" @click="onPreviousPage">
                Previous
              </v-btn>
              <span> Page numéro: {{ currentPage }} </span>
              <v-btn v-if="resultAPI.next" @click="onNextPage">Next Page</v-btn>
            </div> -->
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </section>
</template>
<!-- <div class="ma-0 pa-0 mb-15" fluid>
    <div>
      <!-- <a @click.prevent="onGoBack" href="#">
            Go back
        </a> 
      <h1>{{ this.slug }}</h1>
    </div>
    <div>
      <p v-for="(item, index) of items" :key="index">
        {{ item.name || item.title }}
      </p>
    </div>
    <div>
      <button v-if="resultAPI.previous" @click="onPreviousPage">
        Previous
      </button>
      <span> Page numéro: {{ currentPage }} </span>
      <button v-if="resultAPI.next" @click="onNextPage">Next Page</button>
    </div> 
  </div> -->

<script>
import api from "../../../store/api";

export default {
  name: "category",
  async asyncData({ params }) {
    let res = await api.getOneItem(params.slug, params.id);
    console.log(res);
    let item = res;
    return { item, slug: params.slug, id: params.id };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
