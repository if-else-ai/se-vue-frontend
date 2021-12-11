import axios from '../../api/axios.js'

// import products from '../../assets/products.json'
import cart from '../../assets/cart.json'

// state data
const state = {
	cart: [],
};

// mutate state
const mutations = {
	setCart(state, products) {
		state.products = products;
	},
	// setProduct(state, product) {
	// 	state.product = product;
	// },
};	

// action -> define app data logic
const actions = {
    // get assignemnt => GET
	getCart({ commit }) {
        console.log(cart.cart)
		commit('setCart', cart.cart )
		// axios.get('/products').then(res => {
		// 	// store products in State
		// 	commit('setProducts', res.data)
		// })
	},

};

// getters return requested data
const getters = {
	// get all cart item
	cart(state){
		return state.products
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
