<template>
	<v-container class="shopping__container">
		<Tabs @changeCategory="category = $event" @changeSubCategory="category = $event" />
		<!-- <Carousel /> -->

		<h1>
			{{ category }}
		</h1>

		<v-divider class="my-4"></v-divider>

		<div class="product-filter">
			<v-combobox class="filter" prepend-icon="mdi-filter-outline" :items="filterItem" v-model="selectedFilter">

			</v-combobox>


			<v-autocomplete :items="productList" class="search" label="Search" prepend-icon="mdi-magnify">

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

.product-filter{
	display: flex;
	flex-direction: row;
}

.product-filter .v-input.search{
	max-width: 300px;
}

.product-filter .v-input.filter{
	max-width: 250px;
}
</style>


<script>
import Carousel from "@/components/home/carousel.vue";
import Tabs from "@/components/tabs.vue";
import Product from "../components/product-card.vue";

export default {
	components: { Carousel, Tabs, Product },
	data: () => ({
		category: "ALL",
		filterItem: ["ราคามาก -> น้อย", "ราคาน้อย -> มาก"],
		selectedFilter: "ราคาน้อย -> มาก"
	}),

	computed: {
		// selectedCategory(){
		// 	return
		// },

		products() {
			if(this.category === 'ALL'){
				console.log('ALL Object')
			} else {
				console.log('Log Filter')
			}

			return this.$store.getters.products;
		},
		
		productList() {
			let products = this.$store.getters.products;
			products = products.map(product => {
				return {
					text: product.productName,
					id: product.productID
				}
			})
			return products
		}
	},
};
</script>


