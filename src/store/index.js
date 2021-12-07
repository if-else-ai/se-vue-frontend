import Vue from "vue";
import Vuex from "vuex";

import product from "./modules/product.js";

// State management in vue
Vue.use(Vuex);

export default new Vuex.Store({
	// defined module used
	modules: {
		product
	},
});
