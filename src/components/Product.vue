<template>
  <v-card class="product-card" max-width="374">
    <v-img height="250px" :src="product.src" class="image" />
    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text class="description">
      <p>{{ product.detail }}</p>
    </v-card-text>

    <v-divider></v-divider>

    <v-card>
      <v-row>
        <v-col cols="auto" class="mr-auto price">
          <p>฿{{ product.price }}</p>
        </v-col>
        <v-col cols="auto" class="selled">
          <p>ขายแล้ว {{ product.selled }} ชิ้น</p>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "product",
  props: ["product"],
};
</script>

<style>
.product-card {
  margin: 20px;
}
.description p {
  color: rgb(36, 36, 36);
  height: 60px;
}
.price p {
  color: rgb(0, 162, 255);
  padding-top: 10px;
  padding-left: 15px;
}
.selled p {
  color: rgb(206, 206, 206);
  padding-top: 10px;
  padding-right: 15px;
}
</style>