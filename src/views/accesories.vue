<template>
  <main>
    <section class="products">
      <Product
        v-for="product in products"
        :key="product.pid"
        :product="product"
      />
    </section>
  </main>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  components: {
    Product,
  },
  data: () => ({
    products: [
      {
        pid: "0001",
        title: "Nike air max1",
        detail: "fdgdfgdfgdfgddfgsdq4erewjrglsfdjoigijsdfcvbojfh",
        price: "500",
        selled: "50",
        src: "https://external-preview.redd.it/NM4s5l1oPe6iE2nD2HGueHhV9xTCmpDrGVqtveo2xNA.jpg?auto=webp&s=a3c3e52fc8e7da8fa9293847e1e5a61f56cabb10",
      },
      {
        pid: "0002",
        title: "Nike air max1",
        detail:
          "odihgoedfhg9ehrgvn dkzfhgoembtsijdg;fjgjioufhgtrhfgkndfiuhugbfngiueh",
        price: "2000",
        selled: "50",
        src: "https://external-preview.redd.it/NM4s5l1oPe6iE2nD2HGueHhV9xTCmpDrGVqtveo2xNA.jpg?auto=webp&s=a3c3e52fc8e7da8fa9293847e1e5a61f56cabb10",
      },
      {
        pid: "0003",
        title: "Nike air max1",
        detail: "dfjgjidfigjytdslgfomvkcdnifghfmijnkdsnguchihhghhindsgkhlfdgf",
        price: "1050",
        selled: "50",
        src: "https://external-preview.redd.it/NM4s5l1oPe6iE2nD2HGueHhV9xTCmpDrGVqtveo2xNA.jpg?auto=webp&s=a3c3e52fc8e7da8fa9293847e1e5a61f56cabb10",
      },
      {
        pid: "0003",
        title: "Nike air max1",
        detail: "dfjgjidfigjytdslgfomvkcdnifghfmijnkdsnguchihhghhindsgkhlfdgf",
        price: "1050",
        selled: "50",
        src: "https://external-preview.redd.it/NM4s5l1oPe6iE2nD2HGueHhV9xTCmpDrGVqtveo2xNA.jpg?auto=webp&s=a3c3e52fc8e7da8fa9293847e1e5a61f56cabb10",
      },
    ],
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.products {
  display: flex;
  padding: 25px;
  margin: 0 auto;
}
</style>
