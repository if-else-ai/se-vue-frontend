<template>
  <v-container class="shopping__container">
    <Tabs/>
	<v-divider class="mb-4"></v-divider>
    <!-- <Carousel /> -->
    <v-parallax v-if="query !== 'ALL'" dark :src="image">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="font-weight-bold mb-4">
            {{ query }}
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
    <h1 v-if="query === 'ALL'" class="font-weight-bold mb-4">
      {{ query }}
    </h1>

    <v-divider class="my-4"></v-divider>

    <div class="product-filter">
      <v-combobox
        class="filter"
        prepend-icon="mdi-filter-outline"
        :items="filterItem"
        v-model="selectedFilter"
      >
      </v-combobox>

      <v-autocomplete
        :items="productList"
        class="search"
        label="Search"
        prepend-icon="mdi-magnify"
      >
      </v-autocomplete>
    </div>

    <section class="products__container" v-if="products.length > 0">
      <Product
        v-for="product in products"
        :key="product.productID"
        :product="product"
      />
    </section>
  </v-container>
</template>

<style scoped>
.shopping__container {
  padding-top: 0;
  padding: 0;
}
.shopping__container h1 {
  text-align: center;
}

.products__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-width: 1px;
  border-style: dashed;
  border-color: rgb(218, 218, 218);
}

.product-filter {
  display: flex;
  flex-direction: row;
}

.product-filter .v-input.search {
  max-width: 300px;
}

.product-filter .v-input.filter {
  max-width: 250px;
}
</style>


<script>
import Tabs from "@/components/tabs.vue";
import Product from "../components/product-card.vue";

export default {
  components: { Tabs, Product },
  data: () => ({
    categoryImage:
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_x600.jpg?v=1611981271%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_800x.jpg?v=1611981271%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_1200x.jpg?v=1611981271%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_1400x.jpg?v=1611981271%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_1600x.jpg?v=1611981271%201600w",
    filterItem: ["ราคามาก -> น้อย", "ราคาน้อย -> มาก"],
    selectedFilter: "ราคาน้อย -> มาก",
  }),

  computed: {
    query(){
      return this.$route.query.category
    },
    image(){
      return this.$route.query.src
    },

    products() {
      // filter here

      return this.$store.getters.products;
    },

    productList() {
      // get product name and id
      let products = this.$store.getters.products;
      products = products.map((product) => {
        return {
          text: product.productName,
          id: product.productID,
        };
      });
      return products;
    },
  },
};
</script>


