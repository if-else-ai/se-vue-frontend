<template>
	<v-container class="home-container">
		<Tabs/>
		<!-- <Carousel /> -->
		<Products />
	</v-container>
</template>

<script>
import Carousel from "@/components/home/carousel.vue";
import Tabs from "@/components/tabs.vue"
import Products from '../components/products.vue';

export default {
	components: { Carousel, Tabs, Products },
	data: () => ({

	}),
};
</script>

<style scoped>
	.home-container{
		padding-top: 0;
	}
</style>

