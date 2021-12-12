<template>
	<v-container class="shopping__container">
		<v-divider class="mb-4"></v-divider>
		<div class="product-container pt-4">
			<v-card outlined class="mr-4" width="800" height="600">
				<v-tabs
					v-model="selectedTab"
					class="tabs__container"
					centered
					fixed-tabs
				>
					<v-tab
						v-for="(tab, index) in tabsItem"
						:key="index"
					>
						{{ tab }}
					</v-tab>
				</v-tabs>
				<v-card v-if="selectedTab === 0 && this.selectedKeyboard" class="product__images" flat>
					<div class="product__sub-image">
						<v-item-group>
							<v-card outlined >
								<div
									v-for="(image, index) in selectedKeyboard.detail.images"
									:key="index"
								>
									<v-img
										:class="{
											active: image.active,
										}"
										:src="image.src"
										width="80"
										height="80"
										contain
										@click="changeImage(selectedTab, index)"
									/>
								</div>
							</v-card>
						</v-item-group>
					</div>
					<div outlined class="product__main-image">
						<v-img height="600" contain :src="currentImage" />
					</div>
				</v-card>
				<v-card v-if="selectedTab === 1 && this.selectedSwitch" class="product__images" flat>
					<div class="product__sub-image">
						<v-item-group>
							<v-card outlined>
								<div
									v-for="(image, index) in selectedSwitch.detail.images"
									:key="index"
								>
									<v-img
										:class="{
											active: image.active,
										}"
										:src="image.src"
										width="80"
										height="80"
										contain
										@click="changeImage(selectedTab, index)"
									/>
								</div>
							</v-card>
						</v-item-group>
					</div>
					<div outlined class="product__main-image">
						<v-img height="600" contain :src="currentImage" />
					</div>
				</v-card>
				<v-card v-if="selectedTab === 2 && this.selectedKeycap" class="product__images" flat>
					<div class="product__sub-image">
						<v-item-group>
							<v-card outlined>
								<div
									v-for="(image, index) in selectedKeycap.detail.images"
									:key="index"
								>
									<v-img
										:class="{
											active: image.active,
										}"
										:src="image.src"
										width="80"
										height="80"
										contain
										@click="changeImage(selectedTab, index)"
									/>
								</div>
							</v-card>
						</v-item-group>
					</div>
					<div outlined class="product__main-image">
						<v-img height="600" contain :src="currentImage" />
					</div>
				</v-card>
				
			</v-card>
			<v-card
				class="product__detail pa-4"
				width="800"
				min-height="600"
				outlined
				elevation="1"
			>
				<v-card-title class="product__name">
					<h2>Customize</h2></v-card-title
				>
				<v-card-subtitle class="product__price">
					<h2>$ {{ price }}</h2>
				</v-card-subtitle>

				<div class="custom-input__container">
					<div>เลือก Keyboard:</div>
					<v-autocomplete
						:items="keyboardList"
						label="Model"
						prepend-icon="mdi-magnify"
						return-object
						v-model="selectedKeyboard"
					>
					</v-autocomplete>
				</div>

				<v-divider class="custom-input__bar"></v-divider>

				<div class="custom-input__container">
					<div>เลือก Switch:</div>
					<v-autocomplete
						:items="switchList"
						label="Switch"
						prepend-icon="mdi-magnify"
						return-object
						v-model="selectedSwitch"
					>
					</v-autocomplete>
				</div>

				<div class="custom-input__container">
					<div>เลือก Keycap:</div>
					<v-autocomplete
						:items="keycapList"
						label="Keycap"
						prepend-icon="mdi-magnify"
						return-object
						v-model="selectedKeycap"
					>
					</v-autocomplete>
				</div>

				<div class="product__add mt-3">
					<v-card class="mr-4" flat>
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
					class="product__button mb-4 mt-4"
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
export default {
	data: () => ({
		images: [
			{
				src: "https://i.ytimg.com/vi/aQWH0ysGXy8/maxresdefault.jpg",
				active: true,
			},
			{ src: "https://i.imgur.com/YazpFQt.jpg", active: false },
		],
		currentImage: "https://i.ytimg.com/vi/aQWH0ysGXy8/maxresdefault.jpg",
		tabsItem: ["Model", "Switch", "Keycap"],
		selectedTab: 0,
		quantity: 1,
		selectedKeyboard: "",
		selectedSwitch: "",
		selectedKeycap: "",
		
	}),

	created() {
		this.$store.dispatch("getProduct", {
			productID: this.$route.query.productID,
		});
	},

	methods: {

		changeImage(currentTab, imageIndex) {
			switch(currentTab){
				case 0:
				this.currentImage = this.selectedKeyboard.detail.product_image[imageIndex]
				break;
				case 1:
				this.currentImage = this.selectedSwitch.detail.product_image[imageIndex]
				break;
				case 2:
				this.currentImage = this.selectedKeycap.detail.product_image[imageIndex]
				break;
				default:
					null
			}
			// this.toggleActive(index);
		},

		toggleActive(index) {
			let item = this.images[index];

			this.images = this.images.map((item) => {
				return {
					src: item.src,
					active: false,
				};
			});

			if (item.active === false) {
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
			// let formData = {
			// 	productID: this.productOption.productID,
			// 	productName: this.productOption.productName,
			// 	productPrice: this.productOption.productPrice,
			// 	productQuantity: this.quantity,
			// 	productOption: this.productOption.productOption,
			// 	totalPrice: this.computedPrice,
			// };
			// console.log(formData);
		},
		onChangeCategory(tab) {
		},
	},

	computed: {
		price() {
			let price = 0;
			let keyboardPrice = 0
			let keycapPrice = 0
			let switchPrice = 0

			if(this.selectedKeyboard){
				keyboardPrice = this.selectedKeyboard.detail.productPricePerUnit
				this.selectedKeyboard.detail.images = this.selectedKeyboard.detail.product_image.map(
					(product, index) => {
						return {
							src: product,
							active: index === 0 ? true : false
						}
					}
				)
				console.log(this.selectedKeyboard)
				this.currentImage = this.selectedKeyboard.detail.product_image[0]
				this.selectedTab = 0
			}

			if(this.selectedSwitch){
				switchPrice = this.selectedSwitch.detail.productPricePerUnit
				this.selectedSwitch.detail.images = this.selectedSwitch.detail.product_image.map(
					(product, index) => {
						return {
							src: product,
							active: index === 0 ? true : false
						}
					}
				)
				console.log(this.selectedSwitch)
				this.currentImage = this.selectedSwitch.detail.product_image[0]
				this.selectedTab = 1
			}
			
			if(this.selectedKeycap){
				keycapPrice = this.selectedKeycap.detail.productPricePerUnit
				this.selectedKeycap.detail.images = this.selectedKeycap.detail.product_image.map(
					(product, index) => {
						return {
							src: product,
							active: index === 0 ? true : false
						}
					}
				)
				console.log(this.selectedKeycap)
				this.currentImage = this.selectedKeycap.detail.product_image[0]
				this.selectedTab = 2
			}

			price =
				(keyboardPrice + switchPrice * 80 + keycapPrice) *
				this.quantity;
			return price;
		},

		product() {
			// Initialize Product
			if (this.productOption.length === 0) {
				let product = this.$store.getters.product;
				this.tempProduct = this.$store.getters.product;
				this.productOption = {
					productID: product.productID,
					productName: "Keychron K8",
					productPrice: product.productPricePerUnit,
					productOption: product.option.map((option) => {
						return {
							option_name: option.option_name,
							option_selected: option.option_list[0],
							option_price_added: option.option_price_added[0],
						};
					}),
				};
			}

			return this.$store.getters.product;
		},

		keyboardList() {
			let products = this.$store.getters.products;
			let keyboardList = products.filter(
				(product) => product.productCategory === "Keyboard"
			);
			keyboardList = keyboardList.map((product) => {
				return {
					text: product.productName,
					detail: product,
				};
			});
			return keyboardList;
		},

		switchList() {
			let products = this.$store.getters.products;
			let switchList = products.filter(
				(product) => product.productCategory === "Switch"
			);
			switchList = switchList.map((product) => {
				return {
					text: product.productName,
					detail: product,
				};
			});

			return switchList;
		},

		keycapList() {
			let products = this.$store.getters.products;
			let keycapList = products.filter(
				(product) => product.productCategory === "Keycap"
			);
			keycapList = keycapList.map((product) => {
				return {
					text: product.productName,
					detail: product,
				};
			});

			return keycapList;
		},

	},
};
</script>

<style scoped>
.custom-input__container {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.custom-input__container > div {
	margin-right: 2rem;
}

.active {
	border: 1px solid black;
	transition: all 0.4s;
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
	flex-grow: 1;
}

.shopping__container {
	padding-top: 0;
	padding: 0;
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
	margin-top: auto !important;
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
}

.product__images img {
	max-width: 100%;
	max-height: 100%;
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
	align-items: flex-start;
}

.product__detail {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
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
