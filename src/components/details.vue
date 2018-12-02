<template>
<div>
	<!-- 头部区域 -->
	<div class="detail_header">
		<div class="detailGoBack">
			<a href="#/list/找攻略" class="dtl_goback"></a>
		</div>
		<div class="detailSearch">
			<input type="text" placeholder="搜索目的地/攻略/游记/问答">
		</div>
		<div class="detailLogo">
			<a href="" class="dtl_logo"></a>
		</div>	
	</div>

	<!-- 横向滑动信息栏 -->
	<div class="detail_scroll_msg">
		<ul class="detail_scroll">
			<li class="detail_title" v-for="(item, index) in title" :key="index">{{item.text}}</li>
		</ul>
	</div>

	<!-- banner部分 -->
	<div class="detail_banner">
		<img src="../../public/img/item/beijing.jpg" alt="">
		<div class="detail_content">
			<div class="top">
				<h2>北京</h2>
				<p>1371099张照片</p>
			</div>
			<div class="bottom">
				<p class="time">过去24小时</p>
				<p class="detail_tip"><span class="num">196937</span>人用<span class="mfw">马蜂窝</span>在旅行</p>
				<span class="search_road">查看足迹</span>
			</div>
		</div>
	</div>

	<!-- 旅游攻略、信息介绍-->
	<div class="msg_content">
		<h2 class=" journey_strategy">旅游攻略</h2>
		<div class="contentText">
			<p class="detail_text">北京，位于华北平原，有着三千余年的建城史和八百五十余年的建都史。北京是中华人民共和国首都、中央直辖市、中国国家中心城市，也是中国政治、文化、教育和国际交流中心。是一座传统与现代交融的城市。这里既有古典风韵，又具时尚气息。</p>
			<p class="little_tip">
				<span>内容速览</span>
				<a href="">概括</a>
				<a href="">北京不容错过</a>
				<a href="">城市区域</a>
				<a href="">购物逛街指南</a>
				<a href="">活动体验</a>
				<a href="">住宿</a>
				<a href="">实用信息</a>
				<a href="">关于北京要知道</a>
				<a href="">如何到达</a>
				<a href="">市内交通</a>
			</p>
		</div>
	</div>

	<!-- 阅读更多 -->
	<div class="btn">
		<a href="">阅读更多</a>
	</div>
</div>
</template>

<style type="text/css" lang="scss">
	* {
		margin: 0;
		padding: 0px;
	}
	.detail_header {
		width: 100%;
		height: 50px;
		display: flex;
		.detailGoBack {
			height: 50px;
			width: 50px;
			.dtl_goback {
				background: url("../../public/img/icon/spirit.png") no-repeat;
				background-size: 100px 300px;
				display: inline-block;
				height: 50px;
				width: 50px;
			}
		}
		.detailSearch {
			flex: 1;
			box-sizing: border-box;
			padding: 12px 28px;
			text-align: center;
			display: flex;
			input {
				flex: 1;
				display: block;
				width: 80%;
				border-radius: 20px;
				outline: none;
				border: none;
				background-color: #efefef;
				padding-left: 12px;
			}
		}
		.detailLogo {	
			width: 50px;
			height: 50px;		
			.dtl_logo {
				display: block;
				width: 50px;
				height: 50px;	
				background: url("../../public/img/icon/logo2.png") no-repeat;
				background-size: 50px;
				background-position: 0px 10px;
			}
		}
	}
	.detail_scroll_msg {
		overflow: hidden;
		overflow-x: scroll;
		.detail_scroll {
			width: 1000px;
			.detail_title {
				float: left;
				font-size: 20px;
				padding: 0 18px 10px 18px;
			}
		}
	}
	.detail_banner {
		width: 100%;
		position: relative;
		img {
			display: block;
			width: 100%;
		}
		.detail_content {
			width: 100%;
			height: 168px;
			padding-left: 25px;
			box-sizing: border-box;
			padding-right: 25px;
			position: absolute;
			left: 0;
			bottom: 0;
			.top {
				width: 100%;
				color: #fff;
				box-sizing: border-box;
				// padding: 0 25px;
				border-bottom: 1px solid #eee;
				h2 {
					font-size: 31px;
					padding-bottom: 5px;
				}
				p {
					font-size: 15px;
					padding-bottom: 15px; 
				}
			}
			.bottom {
				margin-top: 15px;
				color: #fff;
				font-size: 13px;
				position: relative;
				.time {
					margin-bottom: 3px;
				}
				.detail_tip {
					
					.num {
						font-size: 15px;
						font-weight: bold;
					}
					.mfw {
						color: orange;
						display: inline-block;
						margin: 0 3px;
					}
				}
				.search_road {
					position: absolute;
					right: 0px;
					bottom: 4px;
					color: orange;
				}
			}
		}
		
	}
	.msg_content {
		
		.journey_strategy {
			font-size: 19px;
			margin: 18px 10px 8px 10px;
			font-weight: normal;
		}
		.contentText {
			.detail_text {
				font-size: 18px;
				margin: 0px 20px 0px 10px;
				line-height: 30px;
			}
			.little_tip {
				margin-left: 10px;
				span {
					color: gray;
					font-size: 18px;
				}
				a {
					display: inline-block;
					margin: 0px 3px;
					font-size: 18px;
					color: orange;
				}
			}
		}
		
	}
	.btn {
		text-align: center;
		margin-bottom: 20px;
		a {
			display: inline-block;
			line-height: 41px;
			padding: 0 50px;
			border: 1px solid #ff9d00;
			font-size: 16px;
			color: #ff9d00;
			border-radius: 2px;
		}
	}

</style>

<script type="text/javascript">
	export default {
		data() {
			return {  
				title: [
					{ "text": "全部", "id": 1 },
					{ "text": "攻略", "id": 2 },
					{ "text": "景点", "id": 3 },
					{ "text": "路线", "id": 4 },
					{ "text": "酒店", "id": 5 },
					{ "text": "游记", "id": 6 },
					{ "text": "餐饮", "id": 7 },
					{ "text": "购物", "id": 8 },
					{ "text": "娱乐", "id": 9 },
					{ "text": "机加酒", "id": 10 },
					{ "text": "当地游", "id": 11 }
				]
			}
		},
		// methods: {
		// 	goback() {

		// 	history.go(-1);
		// }
			
		// }
	}
</script>