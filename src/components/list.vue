<template>
	<div class="wenda" ref="pageHeight">
		<bscroll class="bd" ref="bscroll" :pullup="true" @scrollToEnd="getMore">
			<div class="bgin">
		<div class="header">
			<!-- <div class="go-back">
			<span class="arrow">
				<span class="arrow green"></span>
			</span>
			</div> -->
			<div class="go-back" @click="goBack">
				<a></a>
			</div>
			<h1>马蜂窝问答</h1>
			<div class="banner">
				<img src="img/h5_banner.jpg" alt="">
			</div>
			<div class="search">
				<input type="text" v-model="msg" >
				<div class="img">
					<!-- <img src="" alt=""> -->
				</div>
				<ul :class="{hide:!dealList.length}">
				<!-- <ul :class="{hide:!msg&&!!question_list.length}"> -->
					<router-link tag="li" v-for="(item, index) in dealList" :key="index" :to="'/detail/' + item.id">
					{{item.question}}
					</router-link>
				</ul>
			</div>
		</div>
		
			<ul class="list">
				<router-link tag="li" v-for="(item, index) in wenda_list" :key="index" :to="'/detail/'+item.id">
					<h2>{{item.title}}</h2>
					<div class="top">
						<img :src="'img/wenda/'+item.icon" alt="">
						<span>{{item.imgname}}</span>
					</div>
					<div class="content">
						<div class="img">
							<img :src="'img/wenda/'+item.img" alt="">
						</div>
						<div class="text">{{item.text}}</div>
					</div>
					<div class="bottom">
						<span class="left">{{item.country}}</span>
						<span class="right">
							<span><b>{{item.num}}</b>浏览</span>
							<i></i>
							<span><b>{{item.answer}}</b>回答</span>
							<i></i>
							<span class="color"><b>{{item.support}}</b>顶</span>
						</span>
					</div>
				</router-link>
			</ul>
		<!-- 加载更多 -->
			<div class="loadmore" v-show="other.length">
				<div>加载更多</div>
			</div>
		
		<!-- 垫高 -->
		<div class="space"></div>

		
	</div>
		</bscroll>
		<div class="ask">
<!-- 
			<router-link to="/ask" tag='div' v-text="'我要提问'">
			</router-link> -->
			<i></i>
			<a href="#/ask">我要提问</a>
		</div>
	</div>
</template>
<style lang="scss">
@import '../base.scss';

* {
	margin: 0;
	padding: 0;
}
.wenda {
		background-color:#f0f0f0; 

	.header {
		background-color: #fff;
		position: relative;
		.go-back {
		position: absolute;
		width: 50px;
		height: 50px;
		top: 0;
		left: 0;
			a {
				display: block;
				width: 100%;
				height: 100%;
				background: url("../../public/img/i_head.png") no-repeat 0 0;
				background-size: 100px 300px;
			}
		}
		h1 {
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 16px;
			font-weight: normal;
		}
		.banner {
			width: 100%;
			img {
				width: 100%;
				// 解决3px
				display: block;
			}
		}
		.search {
			padding: 10px 15px;
			display: flex;
			height: 30px;
			position: relative;
			border-bottom: 1px solid #e5e5e5;
			input {
				flex: 1;
				height: 30px;
				border-radius: 5px;
				padding-left: 40px;
				border:none;
				outline: none;
				// background: url("/img/ico5.png") no-repeat 0px 0px;
				// background-size: 18px 150px;
				background-color: #f0f0f0;

			}
			.img {
				position: absolute;
				top: 16px;
				left: 27px;
				width: 18px;
				height: 18px;
				background: url("../../public/img/ico5.png") no-repeat 0px 0px;
				background-size: 18px 150px;
				z-index: 1;
			}
			ul {
				// padding: 0 10px ;
				position: absolute;
				top: 40px;
				left: 20px;
				width: 90%;
				border-radius: 5px;
				overflow: hidden;
				// border: 1px solid #000;
				// background-color: #ccc;
			}
			li {
				// flex: 1;
				// display:block;
				box-sizing: border-box;
				background-color: #fff;
				width: 100%;
				line-height: 30px;
				border-bottom: 1px solid #e5e5e5;
				height: 30px;
				padding-left: 16px;
				color:#666;
			}
		}
	}
	.list {
		// padding: 14px 0;
		list-style: none;
		// background-color:#f0f0f0; 
		li {
			padding: 14px 14px;
			background-color: #fff;
			margin-bottom: 10px;
		}
		h2 {
			font-size: 19px;
			font-weight: normal;
		}
		.top {
			height: 20px;
			width: 100%;
			margin: 10px 0;

			img {
				float: left;
				width: 20px;
				height: 20px;
				border-radius: 50%;
			}
			span {
				float: left;
				font-size:14px;
				line-height: 20px;
				height: 20px;
				margin-left: 10px;
				color: #666;
			}
		}
		.content {
			@include clearfix;
			margin-bottom: 10px;
			// display: flex;
			.img {
				// flex:2;
				float: left;
				
			}
			.text {
				float: right;
				width: 50%;
				color: #666;
				font-size: 16px;
				line-height: 26px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 4;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
		.bottom {
			font-size: 15px;
			color: #999;
			@include clearfix;
			.left {
				float: left;
			}
			.right {
				float: right;
				i {
					margin: 4px 2px;
					display: inline-block;
					width: 3px;
					height: 3px;
					background-color: #999;
				}
			}
			.color {
				color: #ff9d00;
			}
		}

	}
	.space {
		height: 50px;
	}
	.loadmore {
		margin-top:-9px;
		color: #999;
		border-radius: 3px;
		// border-top:1px solid #f0f0f0;
		text-decoration: none;
		text-align: center;
		display: block;
		width: 100%;
		height: 30px;
		line-height: 30px;
		// background-color: #f0f0f0;
		padding: 10px 0;
		background-color: #fff;
		div {
			width: 90%;
			margin: 0 auto;
			background-color: #f0f0f0;
		}
	}
	.ask {
		position: fixed;
		// bottom: 0;
		bottom: 0px;
		left: 0;
		right: 0;
		width: 100%;
		height: 30px;
		padding: 10px 0;
		background-color: #fff;
		border-top: 1px solid #e5e5e5;

		// text-align: center;
		a {
			margin: 0 auto;
			color: #fff;
			border-radius: 3px;
			text-decoration: none;
			text-align: center;
			display: block;
			width: 90%;
			height: 30px;
			line-height: 30px;
			background-color: #ffa800;
		}
		i {	
			position: absolute;
			width: 12px;
			height: 12px;
			background: url("../../public/img/wenda/new-ask-icon4.png") no-repeat -20px -12px;
			background-size: 50px;

			top: 18px;
			left: 109px;

		}

	}
	.hide {
		display:none;
	}
}
.bd{
	height: 100%;
	overflow: hidden;
}
</style>
<script>
import  bscroll  from './scroll.vue';
export default {
	components: {
			bscroll
		},
	data () {
		return {
			wenda_list:[],
			other:[],
			msg:'',
			question_list:[],
			isHide:true,
			clientHeight:""
		}
	},
	computed: {
		dealList() {
			if(this.msg){
				return this.question_list.filter(item => item.question.indexOf(this.msg) >= 0)
			}
			return []
			
		}
	},
	methods : {
		getMore () {
			this.wenda_list = this.wenda_list.concat(this.other.slice(0,3));
			this.other.splice(0,3)
		},
		goBack () {
			history.go(-1);
		},
		changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight);
        this.$refs.pageHeight.style.height = clientHeight+'px';
    	}
	},
	mounted(){
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`          //document.body.clientWidth;
      //console.log(self.clientHeight);
      console.log(this.clientHeight+"lala");
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
      
	created () {
				this.$http.get('data/wenda.json')
				.then(({data}) => {
					this.wenda_list = data.list.slice(0,3);
					this.other = data.list.slice(3);
					this.question_list = data.question_list;
					// console.log(this.question_list)
				})
				
			}
}
</script>