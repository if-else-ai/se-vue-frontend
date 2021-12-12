<template>
	<v-container class="carts__container">
		<v-card elevation="4" width="1200">
			<!-- Proudct-cart Card -->
			<v-card
				class="d-flex flex-column pa-6"
				v-if="carts.length !== 0"
				flat
			>
				<h1>My cart</h1>
				<div
					class="d-flex my-3"
					style="justify-content: space-between;"
				>
					<h4 class="fw-600">SUMMARY</h4>
				</div>
				<!-- Cart Item -->
				<div v-for="(item, itemIndex) in cartItem" :key="itemIndex" class="mb-6">
					<v-card>
						<v-card-title>
							{{ item.productName }}
						</v-card-title>
						<v-divider></v-divider>
						<v-card class="cart__content" flat>
							<v-img
								class="cart__image"
								:src="item.product_image[0]"
								contain
								max-width="300px"
								min-height="200px"
							/>
							<div v-for="(option, index) in item.option" :key="index">
								{{ `${option.option_name}: ${option.option_selected}` }}
							</div>
							<div class="d-flex flex-row">
								<v-btn icon @click="decrement(itemIndex)">
									<v-icon>mdi-minus</v-icon>
								</v-btn>
								<input
									class="item__quantity"
									type="text"
									v-model="item.productQuantity"
								/>
								<v-btn icon @click="increment(itemIndex)">
									<v-icon>mdi-plus</v-icon>
								</v-btn>
							</div>
							<v-btn class="align-self-center"
								><v-icon>mdi-cart</v-icon> checkout</v-btn
							>
						</v-card>
					</v-card>
				</div>
				<!-- <v-btn class="align-self-end"
					><v-icon>mdi-cart</v-icon> checkout</v-btn
				> -->
			</v-card>
			<EmptyCart v-else />
		</v-card>
	</v-container>
</template>

<style scoped>
.carts__container {
	display: flex;
	width: 1200px;
}

.cart__image {
	border: 1px solid rgb(156, 156, 156, 0.6);
	margin: 12px;
}

.cart__content {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-evenly;
}

.item__quantity {
	width: 40px;
	border: 2px solid gray;
	border-radius: 4px;
	text-align: center;
}
</style>

<script>
import SummaryCart from "./SummaryCart.vue";
import EmptyCart from "./EmptyCart.vue";

export default {
	name: "Cart",
	components: {
		SummaryCart,
		EmptyCart,
	},

	data: () => ({
		menuList: [
			{ title: "add", icon: "mdi-plus" },
			{ title: "remove", icon: "mdi-minus" },
		],
		cartItem: []
	}),

	created() {},

	methods: {

		// add product
		increment(productIndex) {
			this.cartItem[productIndex].productQuantity += 1
		},
		// decrease product
		decrement(productIndex) {
			if(this.cartItem[productIndex].productQuantity > 1){
				this.cartItem[productIndex].productQuantity -= 1
			}
		},


		// addItem(items){
		// 	this.$store.dispatch("addToCart",items);
		// },
		// removeItem(items){
		// 	this.$store.dispatch("removeItem",items);
		// },
		checkout() {
			//	swal ("Good Job!", "Your order is placed successfuly!", "success").then (value => {window.location.href = "/cart";
		},
	},
	computed: {
		carts() {
			if(this.cartItem.length === 0){
				this.cartItem = this.$store.getters.carts
			}
			return this.$store.getters.carts;
		},
	},
};
</script>
