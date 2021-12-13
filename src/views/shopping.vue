<template>
	<v-container class="shopping__container">
		<Tabs />
		<v-divider class="mb-4"></v-divider>
		<!-- <Carousel /> -->
		<v-parallax v-if="categoryQuery !== 'ALL'" dark :src="image">
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12">
					<h1 class="font-weight-bold mb-4">
						{{ categoryQuery }}
					</h1>
				</v-col>
			</v-row>
		</v-parallax>
		<h1 v-if="categoryQuery === 'ALL'" class="font-weight-bold mb-4">
			{{ categoryQuery }}
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

		<section class="products__container" v-if="filteredProduct.length > 0">
			<Product
				v-for="(product, index) in filteredProduct"
				:key="index"
				:product="product"
			/>
		</section>
		<section v-else class="products__container">
			<v-card
				class="product__container d-flex justify-content-mid align-center"
				width="374"
				height="367"
				flat
				outlined
			>
				<v-card-title>ไม่พบสินค้า</v-card-title>
			</v-card>
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
		filterItem: [
			{
				text: "ราคามาก -> น้อย",
				option: "descending",
			},
			{
				text: "ราคาน้อย -> มาก",
				option: "ascending",
			},
		],
		selectedFilter: "ราคาน้อย -> มาก",
		filteredProduct: [],
	}),

	methods: {},

	computed: {
		products() {
			// filter here
			let filteredProduct = this.$store.getters.products;
			console.log(filteredProduct);

			if (this.category === "ALL") {
				return this.$store.getters.products;
			}

			filteredProduct = filteredProduct.filter((product) => {
				return (
					product.category === this.category ||
					product.tags.includes(this.category)
				);
			});
			this.filteredProduct = filteredProduct;

			return filteredProduct;
		},
		categoryQuery() {
			this.category = this.$route.query.category;
			let filteredProduct = this.$store.getters.products;
			console.log(filteredProduct);

			if (this.category === "ALL") {
				return this.$store.getters.products;
			}

			filteredProduct = filteredProduct.filter((product) => {
				return (
					product.category === this.category ||
					product.tags.includes(this.category)
				);
			});
			this.filteredProduct = filteredProduct;
			
			return this.$route.query.category;
		},
		image() {
			return this.$route.query.src;
		},
		productList() {
			// get product name and id
			let products = this.$store.getters.products;
			products = products.map((product) => {
				return {
					text: product.name,
					id: product.id,
				};
			});
			return products;
		},
	},
};
</script>
