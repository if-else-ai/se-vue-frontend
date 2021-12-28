import router from "../../router/index";
import axios from "../../api/axios-order.js";

const state = {
	orders: null,
    order: null
};

const mutations = {
	setOrders(state, orders) {
		state.orders = orders;
	},
	setOrder(state, order) {
		state.order = order;
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

	getOrder({ commit }, orderID) {
		axios.get(`/orderById/${orderID}`, 
		).then((res) => {
			commit("setOrder", res.data);
		});
	},

	// store order to backend
	// and then get payment data from backend 
	// and set to state
    sendOrder({ commit }, orderData) {
		axios.post('/order', {
			...orderData
		}).then((res) => {
			commit('setPayment', res.data)
		});
	},

	// onPaid / onCancel payment
    updateOrder({ commit, dispatch }, orderData) {
		// paid Order
		if (orderData.paymentId) {
			axios
				.put("/order", {
					id: orderData.id,
					status: orderData.status,
					trackingNumber: orderData.trackingStatus, // add tracking number ''
				})
				.then((res) => {
					dispatch("updateCart", orderData.deletedIndex);
				});
		}
		// cancel Order
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
		return state.orders;
	},
	order(state) {
		return state.order;
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
