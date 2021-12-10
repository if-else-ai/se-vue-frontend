<template>
	<v-container class="shopping__container">
		<Tabs @changeCategory="category = $event" />
		<!-- <Carousel /> -->

		<h1>
			{{ category }}
		</h1>

		<v-divider class="my-4"></v-divider>
		<section class="flex-container" v-if="products.length > 0">
			<Product 
				v-for="product in products"
				:key="product.productID"
				:product="product"
			/>
		</section>
	</v-container>
</template>

<script>
import Carousel from "@/components/home/carousel.vue";
import Tabs from "@/components/tabs.vue";
import Product from "../components/product-card.vue";

export default {
	components: { Carousel, Tabs, Product },
	data: () => ({
		category: "ALL",
	}),

	computed: {
		products() {
			console.log("lol", this.$store.getters.products);
			return this.$store.getters.products;
		},
	},
};
</script>

<style scoped>
.shopping__container {
	padding-top: 0;
	padding: 0;
}
.shopping__container h1 {
	text-align: center;
}

.flex-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
}
</style>
