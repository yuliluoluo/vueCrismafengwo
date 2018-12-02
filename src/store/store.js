import Vue from 'vue';
import Vuex, { Store } from 'vuex';
Vue.use(Vuex);

export default new Store({
	state: {
		isPickShow:false,
		fromDate:new Date(),
		toDate:new Date(new Date().getTime()+24*60*60*1000),
		personCount:2,
		childrenCount:0
	},
	mutations: {
		// updateSearchWord(state, msg) {
		// 	state.word = msg
		// }
	}
})