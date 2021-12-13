<template>
  <div class="home_container">
    <Carousel />
    <div id="popular"></div>
    <a href="#popular">
      <v-btn class="scroll_container" fab dark medium color="dark">
        <v-icon dark> mdi-arrow-down-bold </v-icon>
      </v-btn>
    </a>

    <Poppular />
    <v-divider></v-divider>
    <Poppular />
    <v-divider></v-divider>
    <div class="shop_container d-flex">
      <Shop v-for="(shop, index) in shopdata" :key="index" :web="shop" />
    </div>
  </div>
</template>

<style src="./style.css"></style>

<script>
import Carousel from "@/components/home/carousel.vue";
import Poppular from "../components/home/poppular.vue";
import Shop from "../components/home/shop.vue";
import shopdata from "../assets/shop";

export default {
  components: { Carousel, Poppular, Shop },
  data: () => ({
    shopdata: shopdata,
  }),
};
</script>

<style scoped>
.home_container {
  padding: 0;
  margin: 0;
}
.home_container a {
  text-decoration: none;
}
.scroll_container {
  display: block;
  position: relative;
  top: -15px;
  margin: auto;
}

.shop_container {
  padding: 80px 40px 80px 40px;
}
</style>