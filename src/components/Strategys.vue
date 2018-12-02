<template>
<div class="strategy">
	<!-- <div class="header">
			<a href="#/index" class="btn1">
				<img src="/img/logo.png" alt="">
			</a>
			<a  class="btn3"></a>
	
			<a href="#/index" class="btn2">官网首页</a>
				<img src="/img/i_head.png" alt="">
		</div> -->
		<headers></headers>
	<!-- 搜索框部分 -->
	<div class="searchbox">
		<input type="text" placeholder="搜索目的地">
	</div>
	<!-- banner部分 -->
	<div class="banner">
		<img src="/img/item/banner.jpg" alt="图片加载失败">
		<div class="introduction">
			<p class="txt1">菲耶索莱：佛罗伦萨的起点，亦是俯瞰佛罗伦萨全景的好地方</p>
		</div>
	</div>
	<!-- 分类部分1 -->
	<div class="hotCity">
		<div class="hotCityHead">
			<h2 class="hotCityTitle">热门目的地</h2>
			<p class="hotCityDesc">最受大家喜欢的目的地推荐</p>
		</div>
	</div>
	<!-- 横向滚动条1 -->
	<div class="hotCityList">
		<ul class="hotCityName">
			<li class="hotCityNameItem" v-for="(item, index) in city" :key="index"  :style="item.isActive?'color:#f00':'color:#666'" @click="listOrder(item.id,index)">{{item.text}}</li>
		</ul>
	</div>
	<!-- 城市图片、名称1 -->
	<ul class="hotCityMsg">
		<router-link tag="li" class="hotCityItem" v-for="(item, index) in msg1" :key="index" :to="'/list/找攻略/' + item.id">
			<img :src="'/img/list/' + item.img" alt="">
			<p>{{item.text}}</p>
		</router-link>
	</ul>
	<!-- 底部按钮 -->
	<div class="moreplace">
		<a href="#" class="btn">更多目的地</a>
	</div>

	<!-- 分类部分2 -->
	<div class="hotCity">
		<div class="hotCityHead">
			<h2 class="hotCityTitle">当季推荐</h2>
			<p class="hotCityDesc">每月最适合前往的目的地推荐</p>
		</div>
	</div>
	<!-- 横向滚动条2 -->
	<div class="hotCityList">
		<ul class="hotCityName">
			<li class="hotCityNameItem" v-for="(item, index) in season" :key="index" :style="item.isActive?'color:#f00':'color:#666'" @click="listOrder2(item.id,index)">{{item.text}}</li>
		</ul>
	</div>
	<!-- 城市图片 名称2 -->
	<ul class="hotCityMsg">
		<router-link tag="li" class="hotCityItem" v-for="(item, index) in seasons1" :key="index" :to="'/list/找攻略/'+ item.id">
			<img :src="'/img/list/' + item.img" alt="">
			<p>{{item.text}}</p>
		</router-link>
	</ul>
	<!-- 底部按钮 -->
	<div class="moreplace">
		<a href="#" class="btn">更多目的地</a>
	</div>




	<!-- 分类部分3 -->
	<div class="hotCity">
		<div class="hotCityHead">
			<h2 class="hotCityTitle">主题精选</h2>
			<p class="hotCityDesc">大量主题出行，个性化你的旅行</p>
		</div>
	</div>
	<!-- 横向滚动条3 -->
	<div class="hotCityList">
		<ul class="hotCityName">
			<li class="hotCityNameItem" v-for="(item, index) in theme" :key="index" :style="item.isActive?'color:#f00':'color:#666'" @click="listOrder3(item.id,index)">{{item.text}}</li>
		</ul>
	</div>
	<!-- 城市图片 名称3 -->
	<ul class="hotCityMsg">
		<router-link tag="li" class="hotCityItem" v-for="(item, index) in themes" :key="index" :to="'str_detail' + item.id">
			<img :src="'/img/list/' + item.img" alt="">
			<p>{{item.text}}</p>
		</router-link>
	</ul>
	<!-- 底部按钮 -->
	<div class="moreplace">
		<a href="#" class="btn">更多目的地</a>
	</div>


</div>
</template>
<style type="text/css" lang="scss">
@import '../base.scss';

.strategy{

	.header {
        @include clearfix;
        border-bottom: 1px solid #e5e5e5;
        width: 100%;
        height: 50px;
        .btn1 {
            display:inline-block;
            padding: 15px 15px;
            width: 80px;
            height: 20px;
            img {
                width: 100%;
                height: 100%;
            }
        
        }
        .btn2 {
            float: right;
            width: 93px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 15px;
            color: #ff9d00;
            position: relative;
            &:after {
                content: "";
                width: 1px;
                height: 15px;
                background-color: #efefef;
                position: absolute;
                right: 0;
                top: 17px;
            }
        }
        .btn3 {
            float: right;
            width: 50px;
            height: 50px;
            background: url("/img/i_head.png") no-repeat 0px -50px;
            background-size: 100px 300px;
        }

    }

	.searchbox {
		padding: .26667rem .4rem;
		display: flex;
		background: #fff;
		input {
			padding: .16rem;
			flex: 1;
			background: #efefef;
			border: none;
			outline: none;
			font-size: 12px;
			color:#ccc;
			text-align: center;
			border-radius: 3px;
		}
	}
	.banner {
		position: relative;
		img {
			vertical-align: middle;
			width: 100%;
		}
		.introduction {
			position: absolute;
			left: 0px;
			bottom: 0px;
			width: 100%;
			p {
				color: #fff;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				padding: .4rem 1.06667rem .4rem .4rem;
				line-height: .66667rem;
				font-size: .48rem;
			}
			&:after {
				content: "";
				display: block;
				width: .32rem;
				height: .53333rem;
				background-position: 0 0;
				position: absolute;
				bottom: .45333rem;
				right: .42667rem;
				background: url("/img/icon/i_index.png") no-repeat;
				background-size: 2rem;
			}
		}
	}
	.hotCity {
		.hotCityHead {
			width: 100%;
			padding: .8rem 0 0;
			border-bottom: 1px solid #efefef;
			.hotCityTitle {
				font-size: 20px;
				text-align: center;
				font-weight: normal;
				padding-bottom: .1rem;
				 &::after {
					content: "";
					background: url("/img/icon/i_index.png") no-repeat;
					display: inline-block;
					width: 15px;
			 		height: 15px;
					background-position: -5px -25px;
			 		vertical-align: middle;
			 		background-size: 75px 60px;
					margin: 0 0 .05333rem .26667rem;
			 }
			}

			.hotCityDesc {
				font-size: .37333rem;
				text-align: center;
				color: gray;
				padding-bottom: .8rem;
			}
		}
	}
	.hotCityList {
		margin-bottom: .5rem;
		overflow: hidden;
		width: 100%;
		height: 60px; 
		//padding: 15px 0;
		.hotCityName {
			font-size: 16px;
			overflow-x: auto;
			white-space: nowrap;
			width: 100%;
			height: 80px;
			padding: 15px 20px;
			box-sizing: border-box;
			.hotCityNameItem {
				display: inline-block;
				// height: .5rem;
				padding: .53333rem .53333rem .26667rem 0;
				line-height: 1em;
				font-size: 16px;
			}
			&:before {
				content: "";
				display: block;
				width: 1px;
				height: .26667rem;
				background-color: red;
				position: absolute;
				bottom: .37333rem;
				right: 0
			}
		}
	}
	.hotCityMsg {
		.hotCityItem {
			float: left;
			width: 33.333333333%;
			text-align: center;
			img {
				width: 80%;

			}
			p {
				padding: 2px 0;
				font-size:14px;
			}
		}
	}
	.moreplace {
		width: 100%;
		text-align: center;	
		padding-bottom: .3rem;
		border-bottom: 1px solid #efefef;	
		.btn {
			margin-top: 20px;
			display: inline-block;
			padding: .15rem 1rem;
			line-height: 1rem;
			font-size: .37333rem;
			color: #ff9d00;
			border: 1px solid #ff9d00;
			border-radius: 3px;
			text-align: center;
		}
	}
}
</style>

<script type="text/javascript">
	import headers from "./Header.vue";
	export default {
		components:{
			headers
		},
		data() {
			return {  
				city: [
					{ "text": "国内", "id": 1 ,"isActive":true},
					{ "text": "港澳台", "id": 2 ,"isActive":false},
					{ "text": "日韩", "id": 3 ,"isActive":false},
					{ "text": "东南亚", "id": 4 ,"isActive":false},
					{ "text": "南亚 西亚", "id": 5 ,"isActive":false},
					{ "text": "欧洲 美洲", "id": 6 ,"isActive":false},
					{ "text": "澳洲 非洲", "id": 7 ,"isActive":false}
				],
				season: [
					{ "text": "1月", "id": 1 ,"isActive":false},
					{ "text": "2月", "id": 2 ,"isActive":false},
					{ "text": "3月", "id": 3 ,"isActive":false},
					{ "text": "4月", "id": 4 ,"isActive":false},
					{ "text": "5月", "id": 5 ,"isActive":false},
					{ "text": "6月", "id": 6 ,"isActive":false},
					{ "text": "7月", "id": 7 ,"isActive":false},
					{ "text": "8月", "id": 8 ,"isActive":false},
					{ "text": "9月", "id": 9 ,"isActive":false},
					{ "text": "10月", "id": 10 ,"isActive":false},
					{ "text": "11月", "id": 11 ,"isActive":false},
					{ "text": "12月", "id": 12 ,"isActive":false},
				],
				theme: [
					{ "text": "全年适宜", "id": 1 ,"isActive":true},
					{ "text": "季节", "id": 2 ,"isActive":false},
					{ "text": "出行方式", "id": 3 ,"isActive":false},
					{ "text": "节假日", "id": 4 ,"isActive":false},
					{ "text": "用户搜索", "id": 5 ,"isActive":false}
				],
				msg1: [],
				msg2: [],
				msg3: [],
				msg4: [],
				msg5: [],
				msg6: [],
				msg7: [],
				seasons1: [],
				seasons2: [],
				seasons3: [],
				seasons4: [],
				seasons5: [],
				seasons6: [],
				seasons7: [],
				seasons8: [],
				seasons9: [],
				seasons10: [],
				seasons11: [],
				seasons12: [],
				themes: []
			}
		},
		created() {
			this.$http
				.get("data/cities.json")
				.then(({data}) => {
					this.msg1 = data.msg.slice(0, 6);
					// console.log(this.msg1);
					this.msg2 = data.msg.slice(6, 12);
					this.msg3 = data.msg.slice(12, 18);
					this.msg4 = data.msg.slice(18, 24);
					this.msg5 = data.msg.slice(24, 30);
					this.msg6 = data.msg.slice(30, 36);
					this.msg7 = data.msg.slice(36, 42);
				}),
			this.$http
				.get("data/season.json")
				.then(({data}) => {
					// this.seasons = data.seasons
					this.seasons1 = data.seasons.slice(0, 6);
					this.seasons2 = data.seasons.slice(6, 12);
					this.seasons3 = data.seasons.slice(12, 18);
					this.seasons4 = data.seasons.slice(18, 24);
					this.seasons5 = data.seasons.slice(24, 30);
					this.seasons6 = data.seasons.slice(30, 36);
					this.seasons7 = data.seasons.slice(36, 42);
					this.seasons8 = data.seasons.slice(36, 42);
					this.seasons9 = data.seasons.slice(36, 42);
					this.seasons10 = data.seasons.slice(36, 42);
					this.seasons11 = data.seasons.slice(36, 42);
					this.seasons12 = data.seasons.slice(36, 42);
					// console.log(this.seasons)
				})	

			this.$http
				.get("data/theme.json")
				.then(({data}) => {
					this.themes = data.themes.slice(0, 6);
				})
			let month=new Date().getUTCMonth();
			console.log(month);
			//this.season[month].isActive=true;
			let id=month+1;
			this.listOrder2(id,month);	
		},
		methods: {
			listOrder(id,index) {
				console.log(id);
				// this.msg1 = this.msg[id]
				this.$http
				.get("data/cities.json")
				.then(({data}) => {
					this.msg1 = data.msg.slice(6*(id -1), 6*id);
				})
				this.city.forEach(item=>{
					item.isActive=false;
				})
				this.city[index].isActive=true;
			},
			listOrder2(id,index) {
				this.$http
					.get("data/season.json")
					.then(({data}) => {
						this.seasons1 = data.seasons.slice(6*(id - 1), 6*id)
					})
					this.season.forEach(item=>{
					item.isActive=false;
				})
				this.season[index].isActive=true;
			},
			listOrder3(id,index) {
				this.$http
					.get("data/theme.json")
					.then(({data}) => {
						this.seasons1 = data.seasons.slice(6*(id - 1), 6*id)
					})
					this.theme.forEach(item=>{
					item.isActive=false;
				})
				this.theme[index].isActive=true;
			}
		}
	}
</script>
