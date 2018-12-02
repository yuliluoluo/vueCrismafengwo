<template>
	<div class="index" >
		<!-- 头部 -->
		<div class="header">
			<a href="#"><img src="img/logo.png" alt=""></a>
			<div class="search">
				<input type="text" placeholder="搜索目的地/攻略/游记">
				<span class="btn_search"><img src="img/btn_search.png" alt=""></span>
			</div>
			<div class="login">登录</div>
		</div>
		<!-- 轮播图 -->
		<div class="carousel">
				<transition-group tag="ul" name="imgs">
					<li v-for="(item, index) in imgArray" :key="index" v-show="index===mark">
						<a href="#/imgInfo/1"><img :src="item" alt=""></a>
					</li>
				</transition-group>
			<div class="circle">
				<span v-for="(item, index) in imgArray" :key="index" 
				:class="{'active':index===mark}"></span>
			</div>
		</div>
		<!-- 分类按钮 -->
		<ul class="home-type">
		<router-link :to="'/list/' + item.text" tag="li" v-for="(item, index) in types" :key="index">
			<div class="img" :style="'background:url('+'img/icon.png'+') '+item.bgp+';width:46px;height:46px;background-size:187.5px 93px'"></div>
			<!-- <img src="img/icon.png" alt=""> -->
			<p :style="'color:'+item.color">{{item.text}}</p>
		</router-link>
	</ul>
	<!-- 列表 -->
	<div class="guide" >
		<div class="hd">
			<h3>推荐攻略</h3>
		</div>
		<bscroll class="bd" ref="bscroll" :pullup="true" @scrollToEnd="getMore">
			<ul>
				<router-link :to="'/detail/'+item.id" tag="li" v-for="(item, index) in list" :key="index">
					<h3>{{item.title}}</h3>
					<div class="content">
						<div class="image">
							<img :src="'img/list/'+item.img">
						</div>
						<div class="text">
							<div class="top">{{item.text}}</div>
							<div class="bottom">
								<span>{{item.num}}浏览</span>
								<div v-if="item.imgname" class="person">
									<span>{{item.imgname}}</span>
									<img :src="'img/list/'+item.icon" alt="">
								</div>
								<div v-else  class="type" :style="item.type=='问答'?'color:#42d6ba;border-color:#42d6ba':'color:#f63c3c;border-color:#f63c3c'">{{item.type}}</div>
							</div>
						</div>
					</div>
				</router-link>
				<div class="loading" v-if="allList.length">
				<img src="img/loading.gif" alt="">
				<!-- 正在加载 -->
			</div>
			</ul>

		</bscroll>
	</div>
	</div>
</template>
<script>
import  bscroll  from './scroll.vue';
// console.log(bscroll)
// let Bscroll = BScroll;
						
// console.log(this.scroll.refresh)
	export default{
		components: {
			bscroll
		},
		data () {
			return {
				timer: null,
				mark: 0,
				list:[],
				allList:[],
				i:0,
				imgArray: [
					'img/bg1.jpg',
					'img/bg2.jpg',
					'img/bg3.jpg'
				],
				types: [
				{  bgp: '0 0', text: '找攻略', id: 1 ,color:'#ff9d00' },
				{  bgp: '0 -46.5px', text: '看游记', id: 2 ,color:'#feca2b' },
				{  bgp: '-92px -46.5px', text: '问答人', id: 3 ,color:'#42d6ba'},
				{  bgp: '-45px -46.5px', text: '结伴', id: 4 ,color:'#f94a87'},
				{  bgp: '-45px 0', text: '酒店', id: 5 ,color:'#32a2f1'},
				{  bgp: '-93px 0', text: '旅行商店', id: 6 ,color:'#fd4e4e'},
				{  bgp: '-139px 0', text: '机票', id: 7 ,color:'#acce0e'},
				{  bgp: '-139px -46.5px', text: '当地玩乐', id: 8 ,color:'#b160df'},
			]
			}
		},
		methods: {
			getMore() {
				// this.i += 1;
				// this.$http.get('data/list.json')
				// .then(({data}) => {
				// 	// let list1 = data.list.splice(4*this.i, 4*this.i+4);
				// 	// this.list = this.list.concat(list1)
				// })
				let list1 = this.allList.splice(0,5);
				// console.log(11,this.allList)

				// this.allList.splice(0,3);
				this.list = this.list.concat(list1)
				// console.log(33,this.list)
				
					// console.log(111,this.list)


			},
			autoplay () {
				this.mark+=1;
				if (this.mark === this.imgArray.length ) {
					this.mark =0;
				}

			},
			play () {
				this.timer = setInterval(this.autoplay, 2000)
			},
				
		},
		created () {
				this.play();
				this.$http.get('data/list.json')
				.then(({data}) => {
					this.list = data.list.splice(0,5);

					this.allList = data.list;
					// this.allList.slice(0,3)
					// this.allList = this.allList.slice(3)
					// console.log(111,this.allList)
					// console.log(222,this.list)
					// this.$nextTick(() => {
					// 	this.scroll = new Bscroll(this.$refs.wrapper,{})
					// })
				})

			}


	}
	// yarn global add @vue/cli
</script>
<style lang="scss">
@import '../base.scss';

* {
	margin: 0;
	padding: 0;
	list-style: none;
}
.index {
	height: 700px;
	background-color: #fff;
	width: 100%;
	.header {
		padding: 10px;
		position: relative;
		height: 36px;
		width: 100%;
		box-sizing: border-box;
		a {
			position: absolute;
			width: 81px;
			height: 21px;
			top: 15px;
			left: 10px;
			img {
				width: 81px;
				height: 21px;
			}
		}
		.search {
			position: absolute;
			left: 101px;
			top: 12px;
			input {
				font-size: 12px;
				padding: 5px;
				width: 150px;
				padding-left: 10px;
				border-radius: 20px;
				border:none;
				outline: none;
				background-color: #f3f3f3;
			}
			.btn_search {
				position: absolute;
				right: 5px;
				top: 2.5px;
				width: 17px;
				height: 17px;
				img {
					width: 17px;
					height: 17px;
				}	
			}
		}
		.login {
			position: absolute;
			right: 15px;
			top: 15px;
			font-size: 12px;
			color: orange;
			margin-left: 10px;
		}
	}
	.carousel {
		width: 100%;
		height: 180px;
		position: relative;
		margin-top: 10px;
		overflow: hidden;
		li {
			position: absolute;
			
			img {
				width: 100%;

			}
		}
		.imgs-enter-active {
			// transform: translateX(0);
			transition: all 1s ease;
		}
		.imgs-leave-active {
			// transform: translateX(-100%);
			transition: all 1s ease;
		}
		.imgs-enter {
			transform: translateX(100%);
		}
		.imgs-enter-to {
			transform: translateX(0);
		}
		.imgs-leave {
			transform: translateX(0);
		}
		.imgs-leave-to {
			transform: translateX(-100%);
		}
		.circle {
			position: absolute;
			width: 60px;
			right:50%;
			margin-right: -30px;
			bottom: 10px;
			z-index:1;
			text-align: center;
			background-color: white;
			opacity: .5;
			border-radius: 2.5px;
			overflow: hidden;
			span {
				width: 20px;
				height: 5px;
				float: left;
				// border: 1px solid #000;
				// background-color: white;
				// opacity: .5;
				// display: inline-block;
				// margin-right: 10px;
			}
			.active {
				background-color: #ffa630;
			}
		}
	}
	.home-type {
		@include clearfix;
		background: #fff;
		padding: 10px 0 5px;
		margin: 10px 0;
		li {
			float: left;
			width: 25%;
			text-align: center;
			.img {
				// margin-left: 17px;
				margin:0 auto;
				width: 60%;
			}
			p {
				font-size: 12px;
				color: #666;
				margin: 2px 0 15px;
			}
		}
	}
	.guide {
		background-color: #f8f8f8;
		.hd {
			h3 {
			font-size: 14px;
			font-weight: normal;
			height: 30px;
			line-height: 30px;
			text-align: center;
			color: #999;
			// 为了两个小图标
			position: relative;
				&:before {
					content:"";
					width: 13px;
					height: 13px;
					position: absolute;
						left: 100px;
						top: 9px;

					background: url("../../public/img/i_guidet.png")  no-repeat 0px 3px;
					background-size: 13px 21px;
					// margin-rignt:10px;
					overflow: hidden;
				}
				&:after {
					content:"";
					// display:inline-block;	
					width: 13px;
					height: 13px;
					position: absolute;
						right: 100px;
						top: 9px;
					overflow: hidden;

					background: url("../../public/img/i_guidet.png")  no-repeat 0px -9px;
					background-size: 13px 21px;
				}
			}
			
		}
		.bd { 
			height:500px;
			overflow: hidden;
			.loading {
				background-color: #fff;
				img {
					display: block;
					width: 40%;
					margin: 0 auto;
				}
			}
			li {
				padding: 10px;
				background-color: #fff;
				margin-bottom: 2px;
			}
			h3 {
			padding: 10px 0;

			font-size: 16px;
			font-weight: normal;
			
			}
			.content {
				display: flex;
				.image {
					// width: 40%;
					flex:2;
					img {
						width: 95%;
					}
				}
				.text {
					// width: 60%;
					flex:3;
					height: 50px;
					font-size: 13px;
					color: #999;
					.top {
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						text-overflow: ellipsis;
						overflow: hidden;
						padding-top: 5px;
						margin-bottom: 10px;
					}
					.bottom {
						// @include clearfix;
						// line-height: 20px;
						// 	height:20px;
						font-size: 12px;
						.type,.person {
							float: right;
							// height:20px;
							// line-height: 20px;
							
							// vertical: middle;
							img {
								float: right;
								border-radius: 50%;
								width: 17px;
								height: 17px;
							}
						}
						.person {
							color:#999;
							height: 17px;
							span {
								// display: inline-block;
								float: right;
								font-size: 12px;
								height:17px;
								line-height: 17px;
							}
							
						}
						.type {	
							font-size: 12px;
							text-align: center;
								width: 37px;
								height:19px;
								line-height: 19px;
								border:1px solid #000;
								border-radius: 2px;
							}

					}
				}
			}
		}
	}
}


</style>
