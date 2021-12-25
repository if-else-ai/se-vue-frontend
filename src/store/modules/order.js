import router from "../../router/index";
import axios from "../../api/axios-order.js";

const state = {
	orders: null,
    order: null
};

const mutations = {
	setOrders(state, orders) {
		state.Orders = orders;
	},
};

const actions = {
	getOrders({ commit }, userData) {
		axios
			// .get(`/orders/${userData.id}`,)
			.get(`/orderByUser/${userData.id}`)
			.then((res) => {
				commit("setOrders", res.data);
			})
			.catch((err) => {
				alert("fail to get order");
			});
	},

	getOrder({ commit }, orderData) {
		axios.post('/order', 
		).then((res) => {
			
		});
	},

    updateOrder({ commit, dispatch }, orderData) {
		if (orderData.paymentId) {
			axios
				.put("/order", {
					id: orderData.id,
					status: orderData.status,
					trackingNumber: orderData.trackingStatus,
				})
				.then((res) => {
					dispatch("updateCart", orderData.deletedIndex);
				});
		}
		if (!orderData.paymentId) {
			axios
				.put("/order", {
					id: orderData.id,
					status: orderData.status,
				})
				.then((res) => {
					dispatch("updateCart", orderData.deletedIndex);
				});
		}
	},

};

const getters = {
	// get login'd user
	orders(state) {
		return state.Orders;
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
