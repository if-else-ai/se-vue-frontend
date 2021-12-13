<template>
	<v-app>
		<Navigation
			v-if="currentRouteName !== 'login'"
			:navTitle="currentRouteName"
		/>
		<v-main>
			<router-view></router-view>
			<Footer v-if="currentRouteName !== 'login'" />
		</v-main>
		<!-- <v-footer v-if="currentRouteName !== 'login'" padless>
			<v-card
				flat
				tile
				class="primary mt-6 lighten-1 white--text text-center"
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
					dignissim a sit amet dui. Duis commodo vitae velit et
					faucibus. Morbi vehicula lacinia malesuada. Nulla placerat
					augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
					Vestibulum eu ipsum vel diam elementum tempor vel ut orci.
					Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus.
				</v-card-text>

				<h4 class="term-of-service">
					Term of service
				</h4>

				<v-divider></v-divider>

				<v-card-text class="white--text">
					{{ new Date().getFullYear() }} — <strong>Kibby</strong>
				</v-card-text>
			</v-card>
			
		</v-footer> -->
	</v-app>
</template>

<script>
import Navigation from "@/components/navigation/navigation.vue";
import Footer from "@/components/footer.vue";
// views handle app interface / ui
// can handle some form validation work before sending data to back-end
export default {
	name: "App",

	components: {
		Navigation,
		Footer
	},

	data: () => ({
		links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
	}),

	created() {
		// Initialize App Variable
		this.$store.dispatch("getProducts");
		this.$store.dispatch("getCart");
	},

	computed: {
		// save route name for checking route
		currentRouteName() {
			return this.$route.name;
		},
	},
};
</script>

<style>

.term-of-service {
  	font-weight: normal;
	cursor: pointer;
  	margin: 10px 0;
}

* {
	font-family: "Prompt", sans-serif;
}
</style>
