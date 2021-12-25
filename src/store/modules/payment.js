// state data
const state = {
	payment: null
};

// mutate state
const mutations = {
	setPayment(state, data) {
		state.payment = data;
	},
	removePayment(state){
		state.payment = null
	},
};

// action -> define app data logic
const actions = {
	removePayment({ commit }) {
		commit('removePayment')
	},
	removeProduct({ commit }) {
		commit('removeProduct')
	},
};

// getters return requested data
const getters = {
	// get all assignment
	payment(state) {
		return state.payment;
	},
	
	// get assignment list -> assignment menu
};

export default {
	state,
	mutations,
	actions,
	getters,
};
