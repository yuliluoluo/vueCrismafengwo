import Vue from 'vue';
import App from './App.vue';
// 引入路由
import store from './store/store.js';

import router from './router/router.js';
import axios from 'axios';
import VueAMap from 'vue-amap';
import VueAwesomeSwiper from 'vue-awesome-swiper'  //轮播图插件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueAMap);
Vue.use(VueAwesomeSwiper)

VueAMap.initAMapApiLoader({
  key: 'eb3a4484e85c73dfd9a0235948b168cd',
  plugin: [
'AMap.Autocomplete', 
        'AMap.PlaceSearch', 
        'AMap.Scale', 
        'AMap.OverView', 
        'AMap.ToolBar', 
        'AMap.MapType', 
        'AMap.PolyEditor',
        'AMap.CircleEditor',
        'AMap.Geolocation'
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
new Vue({
	// 6 注册路由
	router,
	store,
	render: h => h(App)
}).$mount('#app')
