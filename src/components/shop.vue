<template>
	<div class="shop">
		<crishead></crishead>
		<div class="loading" v-if="loading">加载中...</div>
		<div v-else>
			<detail-banner 
			:sightName="sightName"
			:bannerImg="bannerImg"
			:gallaryImgs="gallaryImgs"
			class="banner">
		</detail-banner>
		</div>
		
	</div>
</template>
<style>
	.shop{
		width: 100%;
		height: 100%;
		.banner{
			width: 100%;
		}
		.loading{
			width: 100%;
			height: 100%;
			text-align: center;
			background-color: #fff;
		}
	}
</style>
<script>
	import Banner from './Banner';
	import crishead from "./Header.vue";
	export default{
		data() {
			return {
				loading:true,
				sightName: "大连圣亚海洋世界(AAAA景区)",
				bannerImg:"http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
				gallaryImgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png","http://img1.qunarzz.com/sight/p0/1507/53/79fae10c0bacc4dccfc9f43e39f751e7.water.jpg_r_800x800_61495d49.jpg"],
			}
		},
		components: {
			"detail-banner": Banner,
			crishead
		},
		created(){
			setTimeout(
				function(){

					this.loading=false;
				}.bind(this),3000
			);
		}
	}
</script>