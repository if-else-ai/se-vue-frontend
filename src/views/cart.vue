<template>
<v-Container>
	<div class="d-flex cart-outer-div">
		<Header/>
		<div class="cart-body">
			<div v-if="totalPrice !==0" class="container mb-5">
				<h4 class="my-4 my-cart">MY CART</h4>
				<div class="d-flex my-3" style="justify-content: space-between;">
					<h4 class="fw-600">SUMMARY</h4>
					<h4 class="fw-600" style="margin-right: 49%">CART</h4>
				</div>
				<div class="d-flex">
					<SummaryCart v-bind:totalPrice="totalPrice"/>
					<div class="row" style="width: 50%">
						<div class="max-width: 70%" style="col-md-12">
							<ul style="padding: 0">
								<li v-for="items in cartItems" :key="items.id" style="list-style: none">
									<div class="cart-items">
										<img src="items.url" width="50px" height="50px" style="border-radius: 50%"/>
										<h6 class="mt-15">{{items.name}}</h6>
										<div class="d-flex mt-10">
											<button v-on:click="remove(items)" class="removeItems" type="button"></button>
											<span class="cart-quantity">{{items.quantity}}</span>
											<button v-on:click="add(items)" class="addItems" type="button"></button>
										</div>
										<h6 class="mt-15">{{items.price}}</h6>
									    </div>
										<div class="line"></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="d-flex justify-content-end" style="width: 80%; margin-top: 2%"></div>
				<button v-on:click="checkout" class="btn btn-primary" type="button">CHECKOUT</button>
			</div>
			<EmptyCart v-else/>
		</div>
		<Footer/>
	</div>
</v-Container>
</template>

<style src="./style.css"></style>

<script>
import SummaryCart from "./SummaryCart.vue";
import EmptyCart from "./EmptyCart.vue";
//import swal from "sweetalert";

export default {
	data: () => ({
		menuList: [
			{ title: "Account", icon: "mdi-account" },
			{ title: "Order History", icon: "mdi-account" },
		],
	}),

	name: "Cart",
	components: {
		SummaryCart,
		EmptyCart
	},
	methods:{
		addItem(items){
			this.$store.dispatch("addToCart",items);
		},
		removeItem(items){
			this.$store.dispatch("removeItem",items);
		},
		checkout(){
		//	swal ("Good Job!", "Your order is placed successfuly!", "success").then (value => {window.location.href = "/cart";
		//	}
			//);
		}
	},
	computed: {
		cartItems(){
			return this.$store.state.cartItems;
		},
		totalPrice(){
			let price = 0;
			this.$store.state.cartItems.map(el => {
				price += el["price"]
			})
		return price;
		}
	}
};


</script>
<style scoped>
.cart-outer-div {
flex-direction: column;
height: 100vh;
}
.cart-body{
background: white;
flex: 1;
overflow-y: auto;
}
.cart-quantity{
display: inline-block;
padding: 3px 6px;
width: 40px;
height: 28px;
border-radius: 2px;
background-color: #fff;
margin: 0 5px;
text-align: center;
}
.cart-item{
display: flex;
justify-content: space-between;
padding: 10px;
background: white;
}
.my-cart{
color: darkblue;
font-weight: 600;
}
input[type="text"]{
border: none;
width: 100%;
font-size: 14px;
font-weight: 500;
vertical-align: middle;
text-align: center;
outline: none;
}
.fw-600{
font-weight: 600;
}
.line{
height: 1px;
border-bottom: 1px solid black;
}
.w-120{
width: 120%;
}
.add,
.remove{
width: 28px;
height: 28px;
background: linear-gradient(#fff , #f9f9f9);
border: 1px solid #c2c2c2;
cursor: pointer;
font-size: 16px;
border-radius: 7px;
padding-top: 1px;
outline: none;
}
.mt-10{
margin-top: 10px;
}
.mt-15{
margin-top: 15px;
}
.orange-red{
	color: orangered;
}
.darkblue{
color: darkblue;
}
</style>

