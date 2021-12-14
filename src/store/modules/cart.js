import axios from '../../api/axios.js'

// import products from '../../assets/products.json'
import carts from '../../assets/cart.json'

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
		state.carts.push(item)
	},
	removeCart(state, index) {
		state.carts.splice(index, 1)
	},
	// setProduct(state, product) {
	// 	state.product = product;
	// },
};	

// action -> define app data logic
const actions = {
    // get assignemnt => GET
	getCart({ commit }) {
		let cart = []
		commit('setCart', cart)
	},
	addCart({ commit, state }, item) {
		commit('addCart', item)
        // let expiresIn = 3600;
        // const now = new Date();
        // const expirationDate = new Date(
        //     now.getTime() + expiresIn * 1000
        // );
		
		let previousCart = localStorage.getItem('cart')
		if(previousCart){
			console.log(previousCart)
			let parseCart = JSON.parse(previousCart)
			console.log(parseCart)
			let combine = [...parseCart,item ]
			console.log(combine)
			let stringify = JSON.stringify(combine)
			localStorage.setItem("cart", stringify);
		} else {
        	localStorage.setItem("cart", JSON.stringify([item]));
		}
        // localStorage.setItem("cartExpiration", expirationDate);
        
	},

	removeCart({ commit, state }, index) {
		commit('removeCart', index)
        // let expiresIn = 3600;
        // const now = new Date();
        // const expirationDate = new Date(
        //     now.getTime() + expiresIn * 1000
        // );
		
		let removedCart = state.carts
		console.log(removedCart)
		removedCart = JSON.stringify(removedCart)
		localStorage.setItem("cart", removedCart);
	},

	tryRetrieveCart({ commit }) {
		// // Check token from localStorage
		const cart = localStorage.getItem('cart');
		if (!cart) {
			return;
		}
		// Check if token is expired
		// const expirationDate = new Date(localStorage.getItem("cartExpiration"));
		// const now = new Date();
		// if (now >= expirationDate) {
		// 	return;
		// }
		// Authorize user
		// const userId = localStorage.getItem('userId')
		let cartItem = JSON.parse(cart)
		// console.log(b)
		commit('setCart', cartItem);
	}
};

// getters return requested data
const getters = {
	// get all cart item
	carts(state){
		return state.carts
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
