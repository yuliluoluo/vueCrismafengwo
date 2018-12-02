// 1 安装路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
import Index from '../components/index.vue';
import List from '../components/list.vue';
import Ask from '../components/ask.vue';
import Play from '../components/play.vue';
import Strategy from "../components/Strategys.vue";
import Details from "../components/details.vue";
import Travels from "../components/travels.vue";
import Together from "../components/together.vue";
//文章
import ImgInfo from "../components/imgInfo.vue";
import Hotel from "../components/Hotel.vue";
import Shop from "../components/shop.vue";
/*import DatePick from "../components/Date_Picker.vue";*/


// 安装
Vue.use(VueRouter)
// 3 定义组件
// 简单定义组件
// let Ask = { template: '<h2>Ask page</h2>' }
// let Wendaren = { template: '<h2>Wendaren page</h2>' }
let Detail = { template: '<h2>Detail page</h2>' }
let Question = { template: '<h2>Question page</h2>' }
// 4 定义规则
let routes = [

	// { path: '/wendaren/:id', component: Wendaren },
	// { path: '/list/', component: List ,
	// children:[{path: '问答人',component: List} ]
	{ path: '/list/问答人', component: List },
	{ path: '/list/看游记', component: Travels},
	{ path: '/list/当地玩乐', component: Play },
	{ path: '/list/结伴', component: Together },
	{ path: '/list/找攻略', component: Strategy },
	// , children : [{path: '/list/找攻略/:id', component: Details}]
	{ path: '/list/找攻略/:id', component: Details},
	{ path:'/list/酒店',component:Hotel},
	// { path: '*', component: List 
	// children:[{path:'ask', component:Ask}]
	// },
	{ path: '/ask', component: Ask },
	{ path: '/question', component: Question },
	{ path: '/detail/:id', component: Detail },
	/*{ path: '/datepick',component:DatePick},*/
	{ path: '/imgInfo/:id', component: ImgInfo},
	{ path:'/list/旅行商店',component:Shop},
	{ path: '*', component: Index },

	//文章
]




// 5 实例化
export default new VueRouter({ routes })
