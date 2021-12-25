<template>
    <v-container class="order__container">
		<v-card class="product__container my-6" flat outlined>
			<v-card flat>
				<!-- Main -->
				<v-card-title class="d-flex flex-row justify-space-between ">
					<div>Order#{{ order.id }}</div>
					<div>Status - {{ order.status }}</div>
				</v-card-title>
				<v-divider></v-divider>
				<!-- Product -->
				<v-card
					class="product-order__containter"
					v-for="(product, index) in priceAddedProduct"
					:key="index"
					flat
				>
					<v-card-title class="flex-title ">
						{{ product.name }}
					</v-card-title>
					<v-divider />

					<div class="cart__content">
						<v-img
							class="order__image"
							width="300"
							height="200"
							:src="product.image[0]"
						/>
						<div>
							<p
								v-for="(option, index) in product.option"
								:key="index"
								class="option-description"
							>
								{{ `${option.name}: ${option.select}` }}
							</p>
							<p>
								{{
									`Price: (${product.price.toFixed(2)} + ${product.priceAdded} AddedPrice ) x ${
										product.quantity
									} `
								}}
							</p>
						</div>
					</div>
				</v-card>

				<p class="order-total-price">
					{{ `Total Price: ${order.detail.totalPrice.toFixed(2)} ฿` }}
				</p>
			</v-card>
		</v-card>
	</v-container>
</template>

<style scoped>
.carts__container {
	display: flex;
	width: 1200px;
}

.menu-list {
	border-left: 1px solid rgb(196, 196, 196);
}

</style>


<script>
export default{
    name: "orderDetail",
    data: () => ({
        orderDetail: null
    }),

    created(){
        this.$store.dispatch('getOrder', this.$route.query.orderID)
    },

    methods: {

    },

    computed: {
        order(){
            let order = this.$store.getters.order
            console.log(order)
            return this.$store.getters.order
        },
        // priceAddedProduct() {
		// 	let b = this.order.detail.product.map((order) => {
		// 		return order;
		// 	});
		// 	let priceAdded = 0;
		// 	let c = b.map((item) => {
		// 		priceAdded = 0;
		// 		item.option.forEach((el) => {
		// 			priceAdded += el.priceAdded;
		// 		});

		// 		return {
		// 			...item,
		// 			priceAdded: priceAdded,
		// 		};
		// 	});
			
		// 	return c
		// },
    },
};
</script>

