import axios from "../../api/axios.js";

// import products from '../../assets/products.json'
import carts from "../../assets/cart.json";

// state data
const state = {
	carts: [],
};

// mutate state
const mutations = {
	
	setCart(state, item) {
		state.carts = item;
	},
	addCart(state, item) {
		state.carts.push(item);
	},
	removeCart(state, index) {
		state.carts.splice(index, 1);
	},
	clearCart(state, index) {
		state.carts = [];
	},
};

// action -> define app data logic
const actions = {
	// add cart Item
	addCart({ commit, state }, item) {
		commit("addCart", item);
		let previousCart = localStorage.getItem("cart");
		if (previousCart) {
			let parseCart = JSON.parse(previousCart);
			let combine = [...parseCart, item];
			let stringify = JSON.stringify(combine);
			localStorage.setItem("cart", stringify);
		} else {
			localStorage.setItem("cart", JSON.stringify([item]));
		}
		console.log(state.carts);
	},

	// removeCart from 
	removeCart({ commit }, index) {
		commit("removeCart", index);
		let removedCart = state.carts;
		removedCart = JSON.stringify(removedCart);
		localStorage.setItem("cart", removedCart);
	},

	// retrieve data from localstorage
	tryRetrieveCart({ commit }) {
		// // Check token from localStorage
		const cart = localStorage.getItem("cart");
		if (!cart) {
			return;
		}
		let cartItem = JSON.parse(cart);
		commit("setCart", cartItem);
	},

	// clear cart at localstorage and state
	clearCart({ commit }) {
		let emptyCart = [];
		commit("setCart", emptyCart);
		localStorage.removeItem("cart");
	},

	// update cart / delete at n index or clear cart
	updateCart({ commit, dispatch }, index) {
		if (index === -1) {
			dispatch("clearCart");
		} else {
			let currentCart = state.carts;
			currentCart.splice(index, 1);
			commit("setCart", currentCart);
			localStorage.setItem("cart", JSON.stringify(currentCart));
		}
	},

	
};

// getters return requested data
const getters = {
	// get all cart item
	carts(state) {
		return state.carts;
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
