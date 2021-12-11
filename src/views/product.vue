<template>
	<v-container>
		<div class="product-container pt-4">
			<v-card class="product__images" width="800" height="600" flat>
				<v-item-group class="product__sub-image mr-2">
					<v-card flat>
						<div v-for="(image, index) in images" :key="index">
							<v-item v-slot="{ active, toggle }">
								<v-img
									:class="`${active} my-2`"
									:color="active ? 'primary' : ''"
									:src="image"
									width="80"
									height="80"
									contain
									@click="toggle"
								/>
							</v-item>
						</div>
					</v-card>
				</v-item-group>

				<v-card flat class="product__main-image">
					<v-img
						max-width="600"
						height="600"
						contain
						:src="images[0]"
					/>
				</v-card>
			</v-card>

			<v-card
				class="product-menu"
				width="800"
				min-height="400"
				outlined
				elevation="4"
			>
				<v-card-title class="product__name">
					<h2>{{ product.productName }}</h2></v-card-title
				>
				<v-card-subtitle class="product__price">
					<h2>$ {{ product.productPricePerUnit }}</h2>
				</v-card-subtitle>
				<v-divider class="mx-6"></v-divider>

				<v-row
					class="product__option ml-4"
					v-for="(option, optionIndex) in product.option"
					:key="optionIndex"
				>
					<v-card class="pa-2 mr-4" flat>
						{{ option.option_name }}
					</v-card>

					<v-btn-toggle class="product__choice" mandatory>
						<v-btn
							v-for="(list, index) in option.option_list"
							:key="index"
							@click="getSelectOption(optionIndex, index)"
						>
							{{ list }}
						</v-btn>
					</v-btn-toggle>
				</v-row>
			</v-card>
		</div>
	</v-container>
</template>

<style src="./style.css"></style>

<script>
export default {
	data: () => ({
		images: [
			"https://i.ytimg.com/vi/aQWH0ysGXy8/maxresdefault.jpg",
			"https://i.ytimg.com/vi/aQWH0ysGXy8/maxresdefault.jpg",
		],

		productOption: [],
		selectedOption: null,
	}),

	created() {
		this.$store.dispatch("getProduct", {
			productID: this.$route.query.productID,
		});
	},

	methods: {
		getSelectOption(optionIndex, selectedOptionIndex) {
			// let optionName = this.product.option[optionIndex].option_name;
			let selectedOption = this.product.option[optionIndex].option_list[
				selectedOptionIndex
			];
			this.productOption.productOption[optionIndex].option_selected = selectedOption
			console.log(this.productOption)
		},
	},

	computed: {
		product() {
			if (this.productOption.length === 0) {
				let product = this.$store.getters.product;
				this.productOption = {
					productName: "Keychron K8",
					productPrice: product.productName,
					productOption: product.option.map(
						option => {
							return {
								option_name: option.option_name,
								option_selected: option.option_list[0],
							}
						}
					)
				};
				console.log(this.productOption)
			}


			return this.$store.getters.product;
		},

		optionSelection() {},
	},
};
</script>

<style scoped>
.product__name {
	margin-top: 0.5rem;
}
.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
	height: 36px;
	margin: 0 2px;
	border: 1px solid black;
}

/* .theme--light.v-btn--active:hover::before, .theme--light.v-btn--active::before {
	background-color: rgb(165, 165, 165);
	opacity: 1;
} */

.button--active {
	background-color: rgb(255, 172, 77);
}

.product__price {
	margin-top: 2px;
}
.product__option {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin: 12px 0;
}

.product__choice {
	padding: 0.5rem;
	margin-right: 16px;
}

.product__images {
	display: flex;
	flex-direction: row;
	margin-right: 3rem;
}
.product__sub-image {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.sub-image__container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.product-container {
	display: flex;
	flex-direction: columns;
	justify-content: center;
}

.product-menu {
	margin-right: 8rem;
}

.product__item {
	color: rgb(247, 247, 247);
	cursor: pointer;
}

.product__item:hover {
	color: black;
}
</style>
