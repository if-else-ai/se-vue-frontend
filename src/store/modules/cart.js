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
	// setProduct(state, product) {
	// 	state.product = product;
	// },
};	

// action -> define app data logic
const actions = {
    // get assignemnt => GET
	getCart({ commit }) {
		let cart = carts.carts
		commit('setCart', cart)
		// axios.get('/products').then(res => {
		// 	// store products in State
		// 	commit('setProducts', res.data)
		// })
	},

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
