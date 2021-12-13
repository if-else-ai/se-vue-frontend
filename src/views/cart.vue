<template>
	<v-container class="carts__container">
		<v-card elevation="4" width="1200">
			<!-- Proudct-cart Card -->
			<v-card
				class="d-flex flex-column pa-6"
				v-if="carts.length !== 0"
				flat
			>
				<h1>Carts</h1>
				<div class="d-flex my-3">
					<h4 class="fw-600">SUMMARY</h4>
				</div>
				<!-- Cart Item -->
				<div
					v-for="(item, itemIndex) in cartItem"
					:key="itemIndex"
					class="mb-6"
				>
					<v-card>
						<v-card-title>
							{{ item.productName }}
						</v-card-title>
						<v-divider></v-divider>
						<v-card class="cart__content" flat>
							<v-img
								class="cart__image"
								:src="item.image[0]"
								contain
								max-width="300px"
								min-height="200px"
							/>
							<div>
							<div
								v-for="(option, index) in item.option"
								:key="index"
							>
								<p>
								{{
									`${option.name}: ${option.select}`
								}}
								</p>
							</div>
							</div>
							<div class="action-button d-flex align-center">
								<div class="d-flex flex-row">
									<v-btn icon @click="decrement(itemIndex)">
										<v-icon>mdi-minus</v-icon>
									</v-btn>
									<input
										class="item__quantity"
										type="text"
										v-model="item.quantity"
									/>
									<v-btn icon @click="increment(itemIndex)">
										<v-icon>mdi-plus</v-icon>
									</v-btn>
								</div>
								<div class="cart__price mx-2">
									{{ `$ ${item.totalPrice}` }}
								</div>
								<v-btn class="align-self-center mx-4"
									><v-icon>mdi-cart</v-icon> checkout</v-btn
								>
							</div>
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
.action-button {
	margin-left: auto;
}
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
	justify-content: flex-start;
}

.item__quantity {
	width: 40px;
	border: 2px solid gray;
	border-radius: 4px;
	text-align: center;
}

.cart__price {
	color: rgb(46, 146, 33);
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
		cartItem: [],
	}),

	created() {},

	methods: {
		// add product
		increment(index) {
			// this.cartItem[index].totalPrice =
			// 	(this.cartItem[index].totalPrice /
			// 		this.cartItem[index].quantity) *
			// 	this.cartItem[index].quantity;
			
			this.cartItem[index].quantity += 1;
			let quantity = this.cartItem[index].quantity;
			let totalPrice = this.cartItem[index].totalPrice
			let PricePerUnit = totalPrice / quantity
			console.log(PricePerUnit)
		},
		// decrease product
		decrement(index) {
			if (this.cartItem[index].quantity > 1) {
				this.cartItem[index].quantity -= 1;
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
				let data = this.$store.getters.carts
				data = data.map(item => {
					return {
						...item,pricePerUnit: item.totalPrice / item.quantity
					}
				})
				console.log(data)
			}
			this.cartItem = this.$store.getters.carts;
			return this.$store.getters.carts;
		},

		// price() {
		// 	let addedPrice = 0;
		// 	this.productOption.productOption.map((option) => {
		// 		addedPrice += option.option_price_added;
		// 	});
		// 	// Price = (BasePrice + AddedPrice) * Quantity
		// 	this.computedPrice =
		// 		(this.productOption.productPrice + addedPrice) * this.quantity;
		// 	return (
		// 		(this.productOption.productPrice + addedPrice) * this.quantity
		// 	);
		// },
	},
};
</script>
