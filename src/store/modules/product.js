import axios from "../../api/axios.js";

import products from "../../assets/products.json";

// state data
const state = {
	products: [],
	product: {},
};

// mutate state
const mutations = {
	setProducts(state, products) {
		state.products = products;
	},
	setProduct(state, product) {
		state.product = product;
	},
	removeProduct(state){
		state.product = {}
	}
};

// action -> define app data logic
const actions = {
	// get Product => GET
	getProducts({ commit }) {
		// store products in State
		axios.get("/products").then((res) => {
			let item = res.data;
			item = item.filter( item => {
				return (item.image !== null && item.image.length >= 2 )
			})
			commit("setProducts", item);
		});
	},

	getProduct({ commit }, productID) {
		axios.get(`/product/${productID}`).then((res) => {
			let item = res.data;
			item.image === null
				? item.image = []
				: item.image
			commit("setProduct", item);
		});
	},
	
};

// getters return requested data
const getters = {
	// get all assignment
	products(state) {
		return state.products;
	},
	product(state) {
		return state.product;
	},
	
	// get assignment list -> assignment menu
};

export default {
	state,
	mutations,
	actions,
	getters,
};
