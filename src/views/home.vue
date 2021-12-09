<template>
	<container class="home-container">
		<Carousel />
	</container>
</template>

<script>
import Carousel from "@/components/home/carousel.vue";

export default {
	components: { Carousel },
	data: () => ({

	}),
};
</script>

<style scoped>
	.home-container{
		background-color: aquamarine;
	}
</style>

