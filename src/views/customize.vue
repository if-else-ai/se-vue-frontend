<template>
	<v-container class="shopping__container">
		<v-divider class="mb-4"></v-divider>
		<div class="product-container pt-4">
			<!-- รูป -->
			<v-card class="product__images" width="800" height="600" outlined>
				<v-item-group class="product__sub-image">
					<v-card outlined>
						<div v-for="(image, index) in images" :key="index">
							<v-img
								:class="{ active: image.active, side: side}"
								:src="image.src"
								width="80"
								height="80"
								contain
								@click="changeImage(index)"
							/>
						</div>
					</v-card>
				</v-item-group>

				<v-card outlined class="product__main-image">
					<!-- main tap -->
					<v-tabs
						v-model="selectedTab"
						class="tabs__container mb-6"
						centered
						fixed-tabs
						v-bind="attrs"
						v-on="on"
						optional
					>
					<v-tab
						v-for="(tab, index) in tabsItem"
						:key="index"
						v-bind="attrs"
						v-on="on"
						@change="onChangeCategory(tab, tabsImage[index])"
					>
					{{ tab }}
					</v-tab>
					</v-tabs>

					<!-- sub tap -->
					<v-card class="category__items" flat>
					<ul
						class="category__item"
						v-for="(item, index) in keyboardList"
						:key="index"
						@click="onChangeSubCategory(item, keyboardImage[index])"
					>
					<li class="py-3">
						{{ item }}
					</li>
					</ul>
					</v-card>

					<v-img height="600" contain :src="currentImage" />
				</v-card>
			</v-card>

			<v-card
				class="product__detail pa-2"
				width="800"
				min-height="400"
				outlined
				elevation="1"
			>
				<v-card-title class="product__name">
					<h2>Customize</h2></v-card-title
				>
				<v-card-subtitle class="product__price">
					<!-- <h2>$ {{ price }}</h2> -->
				</v-card-subtitle>
				<v-divider class="mx-6"></v-divider>

			<v-autocomplete
				:items="ModelList"
				label="Model"
				prepend-icon="mdi-magnify"
			>
			</v-autocomplete>

			<v-autocomplete
				:items="SwitchList"
				label="Switch"
				prepend-icon="mdi-magnify"
			>
			</v-autocomplete>

			<v-autocomplete
				:items="KeycapList"
				label="Keycap"
				prepend-icon="mdi-magnify"
			>
			</v-autocomplete>

				<div class="product__add">
					<v-card class="ml-4 mr-4" flat>
						Quantity
					</v-card>
					<v-btn icon @click="decrement">
						<v-icon>mdi-minus</v-icon>
					</v-btn>
					<input
						class="quantity-input"
						type="text"
						v-model="quantity"
					/>
					<v-btn icon @click="increment">
						<v-icon>mdi-plus</v-icon>
					</v-btn>
				</div>
				<v-btn
					class="product__button mb-4"
					block
					outlined
					@click="addToCart"
				>
					เพิ่มลงตะกร้า
				</v-btn>
			</v-card>
		</div>
	</v-container>
</template>

<style src="./style.css"></style>

<script>
// image assets
import accessoriesImage from "../assets/image/accessoriesImage.js"
import keyboardImage from "../assets/image/keyboardImage.js"
import switchImage from "../assets/image/switchImage.js"
import tabsImage from "../assets/image/tabsImage.js"
import keycapImage from "../assets/image/keycapImage.js"
import toolsImage from "../assets/image/toolsImage.js"

export default {
	data: () => ({
		images: [
			{ src: "https://i.ytimg.com/vi/aQWH0ysGXy8/maxresdefault.jpg", active: true },
			{ src: "https://i.imgur.com/YazpFQt.jpg", active: false },
		],
		currentImage: "https://i.ytimg.com/vi/aQWH0ysGXy8/maxresdefault.jpg",
		productOption: [],
		tempProduct: null,
		selectedOption: null,
		quantity: 1,
		computedPrice: 0,
		side: "side",

		tabsItem: ["Model", "Switch", "Keycap"],
		tabsImage: tabsImage,
		keyboardList: ["Full-Size", "TKL", "75%", "65%", "60%"],
		keyboardImage: keyboardImage,
		switchList: ["Linear", "Tactile", "Clicky"],
		switchImage: switchImage,
		keycapList: ["OEM Profile", "Cherry Profile", "XDA Profile"],
		keycapImage: keycapImage,
		accesoriesList: ["Deskmat", "Palm Rest", "Keyboard Pouch", "Aviator Cable"],
		accessoriesImage: accessoriesImage,
		toolList: ["Keycap Puller", "Lubricant", "other"],
		toolImage: toolsImage,

		selectedTab: "",

	}),

	created() {
		this.$store.dispatch("getProduct", {
			productID: this.$route.query.productID,
		});
	},

	methods: {
		// trigger on pick option
		getSelectedOption(optionIndex, selectedOptionIndex) {
			// get SelectedOption => name of selectedOption
			let selectedOption = this.product.option[optionIndex].option_list[
				selectedOptionIndex
			];
			// get selected option price
			let priceAdded = this.product.option[optionIndex]
				.option_price_added[selectedOptionIndex];

			// set seleceted option name
			this.productOption.productOption[
				optionIndex
			].option_selected = selectedOption;

			// set selected option priceAdded
			this.productOption.productOption[
				optionIndex
			].option_price_added = priceAdded;
		},

		changeImage(index) {
			this.currentImage = this.images[index];
			this.toggleActive(index);
		},

		toggleActive(index) {
			let item = this.images[index];

			this.images = this.images.map(
				item => {
					return {
						src: item.src,
						active: false
					}
				}
			)

			if(item.active === false){
				item.active = !item.active;
			}

			this.$set(this.images, index, item);
		},

		// add product
		increment() {
			this.quantity += 1;
		},
		// decrease product
		decrement() {
			if (this.quantity > 1) {
				this.quantity -= 1;
			}
		},

		// add to cart
		addToCart() {
			let formData = {
				productID: this.productOption.productID,
				productName: this.productOption.productName,
				productPrice: this.productOption.productPrice,
				productQuantity: this.quantity,
				productOption: this.productOption.productOption,
				totalPrice: this.computedPrice,
			};
			console.log(formData);
		},
	},

	computed: {
		price() {
			let addedPrice = 0;
			this.productOption.productOption.map((option) => {
				addedPrice += option.option_price_added;
			});
			// Price = (BasePrice + AddedPrice) * Quantity
			// this.computedPrice =
			// 	(this.productOption.productPrice + addedPrice) * this.quantity;
			return (
				(this.productOption.productPrice + addedPrice) * this.quantity
			);
		},

		product() {
			// Initialize Product
			if (this.productOption.length === 0) {
				// let product = this.$store.getters.product;
				// this.tempProduct = this.$store.getters.product;
				// this.productOption = {
				// 	productID: product.productID,
				// 	productName: "Keychron K8",
				// 	productPrice: product.productPricePerUnit,
				// 	productOption: product.option.map((option) => {
				// 		return {
				// 			option_name: option.option_name,
				// 			option_selected: option.option_list[0],
				// 			option_price_added: option.option_price_added[0],
				// 		};
				// 	}),
				// };
			}

			return this.$store.getters.product;
		},

		// KeycapList() {
		// 	// get Keycap name and id
		// 	let keycap = this.$store.getters.Keycap;
		// 	keycap = keycap.map((keycap) => {
		// 		return {
		// 			text: keycap.keycapName,
		// 			id: keycap.keycapID,
		// 		};
		// 	});
		// return keycap;
		// },


	},
};
</script>

<style scoped>
.active {
	border: 1px solid black;
	transition: all 0.4s;
}

.side {
	cursor: pointer;
}

.product__add {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 200px;
}

.quantity-input {
	width: 40px;
	height: 40px;
	border: 1px solid black;
	border-radius: 4px;
	text-align: center;
}

.number-input {
	border: 1px solid black;
}

.product__main-image {
	border-right: none;
	border-top: none;
	border-bottom: none;
	overflow: hidden;
}
.product__main-image img {
	transition: all 0.5s;
}

.shopping__container {
	padding-top: 0;
	padding: 0;
}

.product__name {
	margin-top: 0.5rem;
}
.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
	height: 40px;
	margin: 0 2px;
	border: 1px solid black;
}

.product-small-image {
	cursor: pointer;
}

.product__selection {
	margin-left: 16px;
}

.product__button.v-btn--block {
	margin-top: auto;
	align-self: center;
	bottom: 0;
	display: flex;
	flex: none;
	height: 48px;
	min-width: 80% !important;
	max-width: 80%;
}

/* .theme--light.v-btn--active:hover::before, .theme--light.v-btn--active::before {
	opacity: 1;
} */

.button--active {
	background-color: rgb(255, 172, 77);
}

.product__price > h2 {
	font-family: Helvetica;
	margin-top: 1rem;
	color: rgb(0, 141, 35);
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
.product__choice button.product__choice-button {
	height: 32px;
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

.product__detail {
	display: flex;
	flex-direction: column;
}

.product__item {
	color: rgb(247, 247, 247);
	cursor: pointer;
}

.product__item:hover {
	color: black;
}

.category__items > .category__item {
  padding: 0;
}

.category__items {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  padding-top: 0.2rem;
}

</style>


