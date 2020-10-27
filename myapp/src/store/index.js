import Vue from 'vue'
import Vuex from 'vuex'
import product from './product.js'

Vue.use(Vuex)

const store = new Vuex.Store({

	modules: {
		product
	}
})

export default store
