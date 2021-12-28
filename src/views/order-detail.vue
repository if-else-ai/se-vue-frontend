<template>
	<v-container
		class="order-detail__container d-flex flex-column justify-center align-center"
	>
		<v-btn to="/profile" class="align-self-start mt-4" depressed>
			ย้อนกลับ
		</v-btn>
		<v-card class="product__container my-6" flat outlined>
			<v-card flat v-if="order" width="1200">
				<!-- Main -->
				<v-card-title class="d-flex flex-row justify-space-between ">
					<div>Order#{{ order.id }}</div>
					<div>Status - {{ `${order.status} ${order.trackingNumber}` }}</div>
				</v-card-title>
				<v-divider></v-divider>
				<div class="d-flex flex-column algin-start mx-4">
					<v-card
						height=""
						class="ma-4 order-image__container justify-center d-flex"
						flat
					>
						<!-- <div v-for="(image, index) in orderImage" :key="index">
							<v-img
								:src="image"
								max-width="300"
								max-height="300"
							/>
						</div> -->
					</v-card>
					<div>
						<v-stepper alt-labels flat>
							<v-stepper-header>
								<v-stepper-step
									:complete="shipStatus >= 1"
									step="1"
									color="blue darken-2"
								>
									สั่งซื้อแล้ว
								</v-stepper-step>

								<v-divider></v-divider>

								<v-stepper-step
									step="2"
									color="blue darken-2"
									:complete="shipStatus >= 2"
								>
									ส่งพัสดุแล้ว
								</v-stepper-step>

								<v-divider></v-divider>

								<v-stepper-step
									step="3"
									color="blue darken-2"
									:complete="shipStatus >= 3"
								>
									กำลังจัดส่ง
								</v-stepper-step>
								<v-divider></v-divider>
								<v-stepper-step
									step="4"
									color="blue darken-2"
									:complete="shipStatus >= 4"
								>
									จัดส่งสำเร็จ
								</v-stepper-step>
							</v-stepper-header>
						</v-stepper>
					</div>

					<div class="order-detail__text">
						<ul>
							<li v-for="(item, index) in status" :key="index">
								{{ item }}
							</li>
						</ul>
					</div>

					<div class="d-flex ma-4">
						<v-card flat outlined>
							<v-card-title> ที่อยู่ในการจัดส่ง</v-card-title>
							<v-card-text>
								ที่อยู่: {{ this.orderDetail.address }}
							</v-card-text>
						</v-card>
						<v-card> </v-card>
					</div>

					<div v-if="order" class="pb-5">
						<OrderDetailCard :order="orderDetail" />
					</div>

					<p class="order-total-price align-self-end">
						{{
							`Total Price: ${order.detail.totalPrice.toFixed(
								2
							)} ฿`
						}}
					</p>
				</div>
			</v-card>
		</v-card>
	</v-container>
</template>

<style scoped>
.product-order__containter {
	border: 1px dashed rgb(131, 131, 131);
	margin: 2rem;
}

.cart__content .order__image {
	flex: none;
}

.cart__content {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
}

.order__image {
	border: 1px solid rgb(156, 156, 156, 0.6);
	margin: 12px;
}

.order-detail__container {
	padding: 0 400px;
}
.carts__container {
	display: flex;
	width: 1200px;
}

.menu-list {
	border-left: 1px solid rgb(196, 196, 196);
}
</style>

<script>
import OrderDetailCard from "../components/order-detail-card.vue";

export default {
	components: {
		OrderDetailCard,
	},
	name: "orderDetail",
	data: () => ({
		orderDetail: null,
		orderText: [],
		shipStatus: 0,
		orderImage: [],
	}),

	created() {
		this.$store.dispatch("getOrder", this.$route.query.orderID);
	},

	methods: {
		getDate(text) {
			let date = text.substring(0, 10);
			let time = text.substring(11, 19);
			return `${date} ${time}`;
		},
	},

	computed: {
		order() {
			let order = this.$store.getters.order;
			this.orderDetail = order;
			if (order) {
				this.orderImage = order.detail.product.map((el) => {
					return el.image[0];
				});
			}
			return this.$store.getters.order;
		},

		status() {
			let order = this.$store.getters.order;
			let orderDetail = order
			order = order.updateDate.map((text, index) => {
				switch (index) {
					case 0:
						this.shipStatus = 1;
						return `สั่งซื่อเมื่อ ${this.getDate(text)}`;
					case 1:
						this.shipStatus = 1;
						return `จ่ายเงินเมื่อ ${this.getDate(text)}`;
					case 2:
						this.shipStatus = 2;
						return `เตรียมจัดส่งพัสดุ ${this.getDate(text)}`;
					case 3:
						this.shipStatus = 3;
						return `จัดส่งพัสดุเมื่อ ${this.getDate(text)} หมายเลขพัสดุ [${order.trackingNumber }]`;
					case 4:
						this.shipStatus = 3;
						return `ขนส่งกำลังจัดส่งพัสดุของคุณเมื่อ ${this.getDate(
							text
						)}`;
					case 5:
						this.shipStatus = 4;
						return `จัดส่งสำเร็จ ${this.getDate(text)}`;
					default:
						return "";
				}
			});
			this.orderText = order;
			this.orderText.splice(6, this.orderText.length)
			// If Order Is Completed -> return latest update order
			if(orderDetail.status === 'Completed' ){
				console.log(orderDetail.status)
				this.orderText[this.orderText.length - 1] = `จัดส่งสำเร็จ ${this.getDate(orderDetail.updateDate[orderDetail.updateDate.length - 1])}`
				this.shipStatus = 4
			}
			return this.orderText;
		},
	},
};
</script>
