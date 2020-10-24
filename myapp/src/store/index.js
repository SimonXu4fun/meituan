import Vue from 'vue'
import Vuex from 'vuex'
import {
	getStore
} from '../api/home.js'

Vue.use(Vuex)

const store = new Vuex.Store({

	state: {
		//商户列表
		storeList: [],
		//点餐页信息
		navData: {},
		//评价页信息
		infoData: {}

	},
	mutations: {
		saveStoreList(state, arr) {
			state.storeList = [...arr];
		}
	},
	actions: {
		getStoreList({
			commit
		}) {
			return new Promise(resolve => {
				getStore().then(res => {
					commit('saveStoreList', res.data.list);
					resolve();
				})
			})
		}

	},
	modules: {}
})

export default store
