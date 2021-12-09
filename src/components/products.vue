<template>
	<v-container class="products__container">
		<div class="products__item" v-for="(product, index) in products" :key="index">
			<v-img
				src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
				height="200px"
			></v-img>

			<v-card-title>
				Top western road trips
			</v-card-title>

		</div>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		products: [
			{
				productName: "Keychron K8",
				productPrice: 499,
				src:
					"https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K8-tenkeyless-wireless-mechanical-keyboard-for-Mac-Windows-iOS-RGB-white-backlight-with-Keychron-Optical-switch-red_1800x1800.jpg?v=1622187897",
			},
			{
				productName: "Keychron K8",
				productPrice: 499,
				src:
					"https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K8-tenkeyless-wireless-mechanical-keyboard-for-Mac-Windows-iOS-RGB-white-backlight-with-Keychron-Optical-switch-red_1800x1800.jpg?v=1622187897",
			},
			{
				productName: "Keychron K8",
				productPrice: 499,
				src:
					"https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K8-tenkeyless-wireless-mechanical-keyboard-for-Mac-Windows-iOS-RGB-white-backlight-with-Keychron-Optical-switch-red_1800x1800.jpg?v=1622187897",
			},
			{
				productName: "Keychron K8",
				productPrice: 499,
				src:
					"https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K8-tenkeyless-wireless-mechanical-keyboard-for-Mac-Windows-iOS-RGB-white-backlight-with-Keychron-Optical-switch-red_1800x1800.jpg?v=1622187897",
			},
		],
	}),

	methods: {},
};
</script>

<style scoped>
.tabs__container {
	background-color: white;
	color: black;
}

.v-tab {
	padding: 0 4rem;
}
.v-tabs--active {
}

.products__container {
	padding-top: 0;
    display: flex;
    flex-direction: row;
}

.products__item {
    margin: 16px;
}
</style>
