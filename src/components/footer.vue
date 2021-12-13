<template>
	<v-footer padless>
		<v-card
			flat
			tile
			class="primary lighten-1 white--text text-center"
		>
			<v-row justify="center" no-gutters>
				<v-btn
					v-for="link in links"
					:key="link"
					color="white"
					text
					class="my-4 mx-2"
				>
					{{ link }}
				</v-btn>
			</v-row>

			<v-card-text class="white--text pt-0 ">
				Phasellus feugiat arcu sapien, et iaculis sit amet. Mauris
				cursus commodo interdum. Praesent ut risus eget metus luctus
				accumsan id ultrices nunc. Sed at orci sed massa consectetur
				dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
				Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
				ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum
				vel diam elementum tempor vel ut orci. Orci varius natoque
				penatibus et magnis dis parturient montes, nascetur ridiculus
				mus.
			</v-card-text>

			<h4 class="term-of-service">
				Term of service
			</h4>

			<v-divider></v-divider>

			<v-card-text class="white--text">
				{{ new Date().getFullYear() }} — <strong>Kibby</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<style scoped>
.term-of-service {
	font-weight: normal;
	cursor: pointer;
	margin: 10px 0;
}
</style>

<script>
export default {
	name: "product",
	props: ["product"],
	data: () => ({
		links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
	}),
};
</script>
