<template>
	<div class="play">
		<!-- 头部 -->
		<!-- <div class="header">
			<div class="logo">
				<a href="#"><img src="/img/logo.png"></img></a>
			</div>
			<router-link class="logo" to = "/index" tag="div">
				<a href="#/index"><img src="/img/logo.png" /></a>
			</router-link>
			<div class="text">
				<a href="#/index" class="index">官网首页</a>
				<a href="#" class="search"><img src="/img/search.png" /></a>
			</div>
		</div> -->
		<headers></headers>
		<!-- 搜索框 -->
		<div class="top-search">
			<input type="text" class="search" placeholder="搜索产品名称/目的地">
		</div>
		<!-- 轮播 -->
		<div class="carousel">
			<Swiper>
				<Slide>
					<img src="/img/ban1.jpg" alt="图片">
				</Slide>
				<Slide>
					<img src="/img/ban2.jpeg" alt="图片">
				</Slide>
				<Slide>
					<img src="/img/ban3.jpeg" alt="图片">
				</Slide>
			</Swiper>
		</div>
		<!-- 小图标轮播 -->
		<div class="picicon">
			<Swiper :autoPlay= 'false'>
				<slide>
					<router-link to="/list" tag="a" v-for="(item, index) in firstIconList" :key="index" class="pic">
						<img :src="'/img/' + item.pic" alt="图"/>
						<p>{{item.text}}</p>
					</router-link>
				</slide>
				<slide>
					<router-link to="/list" tag="a" v-for="(item, index) in secondIconList" :key="index"  class="pic">
						<img :src="'/img/' + item.pic" alt="图"/>
						<p>{{item.text}}</p>
					</router-link>
				</slide>
			</Swiper>
		</div>
		<!-- 选项卡 -->
		<div class="tab">
			<ul class="title">
				<li v-for="(item, index) in tabList" :key="index" @click="tab(index)">
					<p :class='item.className'>
						{{item.title}}
						<span class="after" v-show="item.show"></span>
					</p>
					
				</li>
			</ul>

			<div class="card" v-if="this.tabList[0].show">
				<a href="#" v-for="(item, index) in hot" :key="index">{{item}}</a>
			</div>
			<div class="card" v-if="this.tabList[1].show">
				<a href="#" v-for="(item, index) in asia" :key="index">{{item}}</a>
			</div>
			<div class="card" v-if="this.tabList[2].show">
				<a href="#" v-for="(item, index) in europe" :key="index">{{item}}</a>
			</div>
			<div class="card" v-if="this.tabList[3].show">
				<a href="#" v-for="(item, index) in china" :key="index">{{item}}</a>
			</div>
		</div>
		<!-- 自由行攻略 -->
		<div class="item">
			<div class="item-header">
				<p>自由行攻略</p>
			</div>
			<div class="item-content">
				<!-- 头部图片 -->
				<div class="item-top" v-bind:style="{backgroundImage:'url(/img/' + this.itemTop.url + ')'}">
						<p class="addr">{{this.itemTop.addr}}</p>
						<div class="line"></div>
						<p class="title">{{this.itemTop.title}}</p>
						<div class="line"></div>
						<p class="try">{{this.itemTop.num}}人体验过</p>
				</div>
				<!-- 列表图片 -->
				<div class="flashSale">
					<ul class="flashSale-type">
						<li class="item-page" v-for="(item, index) in itemList" :key="index">
							<img :src="'/img/' + item.url" alt="">
							<div class="about">
								<p class="title">{{item.title}}</p>
								<div class="line"></div>
								<p class="price"><span>{{item.price}}&nbsp;</span>起/人</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 当季热卖 -->
		<div class="season">
			<div class="season-header">
				<p>当季热卖</p>
			</div>
			<!-- 热卖导航 -->
			<div class="season-nav">
				<ul class="season-type">
					<li v-for="(item, index) in seasonNavList" :key="index" @click="nav(index)">
						<p :class="item.className" >{{item.city}}</p>
						<span></span>
					</li>
				</ul>
			</div>
			<!-- 文章列表 -->
			<div class="season-list">
				<ul v-if="this.seasonNavList[0].show | this.seasonNavList[2].show | this.seasonNavList[4].show | this.seasonNavList[6].show">
					<li v-for="(item, index) in season1_list" :key = "index">
						<img :src="'/img/' + item.url" alt="">
						<div class="right">
							<p class="title">{{item.title}}</p>
							<p class="price"><span>￥{{item.price}}</span>起</p>
							<p class="sale">已售{{item.sale}}</p>
						</div>
					</li>
				</ul>

				<ul v-if="this.seasonNavList[1].show | this.seasonNavList[3].show | this.seasonNavList[5].show | this.seasonNavList[7].show">
					<li v-for="(item, index) in season2_list" :key = "index">
						<img :src="'/img/' + item.url" alt="">
						<div class="right">
							<p class="title">{{item.title}}</p>
							<p class="price"><span>￥{{item.price}}</span>起</p>
							<p class="sale">已售{{item.sale}}</p>
						</div>
					</li>
				</ul>

			</div>
		</div>

		<!-- 更多按钮 -->
		<div class="more">
			<router-link tag="button" to="/more" class="btn">查看更多产品</router-link>
		</div>

	<!-- </div> -->
	</div>
	


</template>
<!-- 样式 -->
<style lang='scss'>
@import '../base.scss';
	* {
		padding: 0;
		margin: 0;
	}
	a {
		color: black;
		text-decoration: none;
	}
	ul {
		list-style: none;
	}

.play {

	background: #efefef;
	
	/*头部*/
	.header {
		background: white;
		height: 50px;
		display:flex;
		border-bottom: 1px solid #efefef;
		.logo {
			flex:1;
			height:50px;
			a {
				display:inline-block;
				height:25px;
				padding: 12.5px 10px;
				img {
					height: 25px;
				}
			}
		}
		.text {
			position: relative;
			right: 30px;
			height:50px;
			line-height:50px;
			color: $navColor;
			font-size: 16px;
			.index {
				border-right: 1px solid #efefef;
				padding: 0 15px;
				color: $navColor;
			}
			.search {
				display: inline-block;
				height: 30px;
				margin-left: 15px;
				img {
					height: 25px;
					width: 25px;
					position: relative;
					top: 5px;
				}
			}
		}
		background: white;
	}
	/*搜索框*/
	.top-search {
		background: white;
		display: flex;
		font-size: 14px;
		text-align: center;
		padding: 10px;
		input {
			flex: 1;
			height: 30px;
			line-height: 30px;
			text-align: center;
			border-radius: 5px;
			background: #efefef;
			outline: none;
			border: none;
		}
	}
	/*轮播*/
	.carousel {
		background: white;
		display:flex;
		img {
		width: 100%;
		flex:1;
		}
	}
	/*小图标轮播*/
	.picicon {
		background: #fff;
		padding: 25px 0 25px;
		margin-bottom: 15px;
		.wh_indicator {
			position: relative;
			
		}
		a.pic {
			// background: pink;
			// widtSh: 25%;
			// height:72.38px;
			// float: left;
			// text-align: center;
			// img {
			// 	width: 50%;
			// 	margin: 0 auto;
			// }
			
			// display: block;
			float: left;
			width: 25%;
			height: 73px;
			text-align: center;
			img {
				width: 50%;
				margin-left: 25%;
			}
			p {
				font-size: 16px;
				color: #666;
				margin: 2px 0 15px;
			}
		}
	}
	/*选项卡*/
	.tab {
		background: #fff;
		ul {
			border-bottom: 1px solid #eee;
			padding: 0 15px;
			li {
				height: 60px;
				line-height: 70px;
				text-align: center;
				font-size: 16px;
				color: #696969;
				display: inline-block;
				width: 25%;
				/*background: pink;*/
				p {
					position: relative;
					&.show {
						color: $navColor;
					}
					.after {
						display: inline-block;
						content: "";
						background: $navColor;
						width: 50%;
						height: 3px;
						position: absolute;
						bottom: 8px;
						left: 22px;
					}
				}
				
				
			}
		}
		.card {
			padding: 15px;
			a {
				display: inline-block;
				width: 20%;
				height: 30px;
				line-height: 30px;
				text-align: center;
				border-radius: 3px;
				background: #efefef;
				margin-left: 6.5%;
				margin-top: 10px;
				color: #696969;
				&:nth-Child(1),
				&:nth-Child(5),
				&:nth-Child(9),
				&:nth-Child(13)
				{
					margin-left: 0;
				}
				&:nth-Child(1),
				&:nth-Child(2),
				&:nth-Child(3),
				&:nth-Child(4)
				{
					margin-top: 0;
				}
			}
		}
	}
	/*自由行攻略*/
	.item {
		height: 460px;
		background: #fff;
		margin-top: 15px;
		.item-header {
			padding: 20px 15px;
			p {
				border-left: 4px solid $navColor;
				padding-left: 15px;
				font-size: 18px;
			}
		}
		.item-content {
			padding: 0 15px;
			/*头部图片*/
			.item-top {
				background-size: cover;
				width: 100%;
				height: 90px;
				background-color: pink;
				color: #fff;
				text-align: center;
				padding: 45px 0;
				.line {
					background-color: #fff;
					height: 2px;
					width: 80%;
					margin: 0 auto;
				}
				.addr {
					height: 20%;
					line-height: 20%;
				}
				.title {
					font-size: 26px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					height: 45px;
					line-height: 45px;
				}
				.try {
					height: 20%;
					line-height: 20%;
					margin-top: 15px;
				}
			}
			/*列表图片*/
			
			.flashSale {
				/*width: 360px;*/
				width: 100%;
				height: 165px;
				padding-top: 20px;
				overflow: hidden;
				&::-webkit-scrollbar{
					width:0px;
					opacity:0; 
					-webkit-overflow-scrolling: touch;
				}
				ul {
					/*background-color: pink;*/
					width: 100%;
					white-space: nowrap;
					height: 185px;
					overflow-x:auto;
					li {
						list-style: none;
						display: inline-block;
						width: 100px;
						text-align: center;
						margin: 0 9px;
					img {
							width: 100%;
						}
					.about {
						width: 100%;
						border: 1px solid #efefef;
						color: #696969;
						font-size: 12px;
						text-align: center;
						.line {
							height: 2px;
							width: 80%;
							background-color: #efefef;
							margin: 0 auto;
						}
						.title {
							// text-overflow: -o-ellipsis-lastline;
							// overflow: hidden;
							// text-overflow: ellipsis;
							// display: -webkit-box;
							// webkit-line-clamp: 2;
							// line-clamp: 2;
							// -webkit-box-orient: vertical;
							
							line-height: 20px;
							padding: 3px 5px;

							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
						}
						.line {
							margin-top: 5px;
						}
						.price {
							padding: 0 5px;
							height: 40px;
							line-height: 40px;
							span {
								color: $navColor;
							}
						}
					}
				}
				}	
			}
		}
	}
	/*当季热卖*/
	.season {
		margin-top: 15px;
		background-color: #fff;
		.season-header {
			padding: 20px 15px;
			p {
				border-left: 4px solid $navColor;
				padding-left: 15px;
				font-size: 18px;
			}
		}
		/*当季导航*/
		.season-nav {
			width: 100%;
			border-bottom: 1px solid #eee;
			height: 40px;
			overflow: hidden;
			&::-webkit-scrollbar{
				width:0px;
				opacity:0; 
				-webkit-overflow-scrolling: touch;
			}
			ul {
				width: 100%;
				height: 60px;
				white-space: nowrap;
				overflow-x:auto;
				li {
					list-style: none;
					display: inline-block;
					color: #696969;
					font-size: 16px;
					text-align: center;
					margin: 0 15px;
					
					p {
						height: 39px;
						text-align: center;
						padding: 0;
						&.show {
							color: $navColor;
						}
					}
					
				}
			}	
		}
		/*文章列表*/
		.season-list {
			/*background-color: pink;*/
			padding: 0 15px;
			li {
				border-bottom: 1px solid #efefef;
				padding: 10px 0;
				width: 100%;
				position: relative;
				img {
					/*height: 100px;*/
					width: 35%;
				}
				.right {
					height: 100px;
					position: absolute;
					top: 10px;
					right: 0;
					width: 60%;
					/*background-color: skyblue;*/
					text-align: center;
					.title {
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						line-clamp: 3;
						-webkit-box-orient: vertical;
						font-size: 16px;
					}
					.price {
						/*float: left;*/
						position: absolute;
						bottom: 5px;
						font-size: 12px;
						left: 10px;
						span {
							color: $navColor;
							font-size: 16px;
						}
					}
					.sale {
						position: absolute;
						bottom: 5px;
						font-size: 14px;
						right: 10px;
					}
				}
			}
		}
	}
	/*更多*/
	.more {
		/*width: 187.5px;*/
		width: 50%;
		background-color: #fff;
		/*padding: 0 93.75px;*/
		padding: 0 25%;
		.btn {
			background-color: #fff;
			height: 40px;
			/*width: 187.5px;*/
			width: 100%;
			line-height: 40px;
			margin:  10px auto;
			border: 1px solid $navColor;
			border-radius: 8px;
			color: $navColor;
			font-size: 18px;
		}
	}
}
		
	
</style>
<!--  -->
<script type="text/javascript">

	import { Swiper, Slide } from 'vue-swiper-component';
	import headers from "./Header.vue";

	export default {
		data() {
			return {
				
				firstIconList: [],

				secondIconList:[
					{ pic: "icon9.png", text: "多日游"},
					{ pic: "icon10.png", text: "包拼车"},
					{ pic: "icon11.png", text: "美食"},
					{ pic: "icon12.png", text: "租车"},
					{ pic: "icon13.png", text: "体验"}
				],

				tabList: [
					{"title": "热门", "show": true, "text": "热门部分", "className":"show"},
					{"title": "东南亚", "show": false, "text": "东南亚部分", "className":""},
					{"title": "欧美澳", "show": false, "text": "欧美澳部分", "className":""},
					{"title": "国内", "show": false, "text": "国内部分", "className":""}
				],


				hot: ["普吉岛", "日本", "三亚", "丽江", "台湾", "香港", "哈尔滨", "首尔", "新加坡", "上海", "沙巴", "桂林"],

				asia: ["泰国", "新加坡", "马来西亚", "越南", "巴厘岛", "菲律宾", "柬埔寨", "兰卡威", "芽庄", "斯里兰卡", "曼谷", "沙巴"],

				europe: [ "美国", "西班牙", "迪拜", "帕劳", "澳大利亚", "新西兰", "法国", "意大利", "英国", "毛里求斯", "悉尼", "黄金海岸"],

				china: [ "云南", "长白山", "四川", "西安", "厦门", "张家界", "桂林", "浙江", "雪乡", "北京", "珠海", "漠河"],

				itemList: [],

				itemTop: {url:"item-top1.jpeg", addr: "美国", title: "一步步教你搞定十年美国签证！美签面试小技巧！", num: 256943},
				// 热卖导航
				seasonNavList:[
					{"city": "普吉岛", "show": true, "className": "show"},
					{"city": "日本", "show": false, "className": ""},
					{"city": "三亚", "show": false, "className": ""},
					{"city": "丽江", "show": false, "className": ""},
					{"city": "台湾", "show": false, "className": ""},
					{"city": "香港", "show": false, "className": ""},
					{"city": "哈尔滨", "show": false, "className": ""},
					{"city": "首尔", "show": false, "className": ""}
				],
				season1_list: [],
				season2_list: []
			}
		},
		//请求数据
		created() {
			this.$http
			.get('data/play.json')
			.then(({data}) => {
				// this.tabList = data.tabList;
				this.firstIconList = data.firstIconList;
				this.itemList = data.itemList;
				// this.seasonNavList = data.seasonNavList;
				this.season1_list = data.season1_list;
				this.season2_list = data.season2_list;
				// console.log(data.season1_list);
			})

		},

		components: {
			Swiper,
			Slide,
			headers
		},

		methods: {
			tab: function(index) {
				for(let i = 0; i < this.tabList.length; i ++) {
					this.tabList[i].show = false;
					this.tabList[i].className = "";
					if (index === i) {
						this.tabList[i].show = true;
						this.tabList[i].className = "show";
					}
				}
			},

			nav: function(index) {
				for(let i = 0; i < this.seasonNavList.length; i ++) {
					this.seasonNavList[i].show = false;
					this.seasonNavList[i].className = "";
					if (index === i) {
						this.seasonNavList[i].show = true;
						this.seasonNavList[i].className = "show";
					}
				}
			},
			
		}
	}
</script>

