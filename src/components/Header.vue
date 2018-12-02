<template>
	<div class="header">
		<a href="./index.html" class="logo">
		</a>
		<div class="right">
			<a href="./index.html" class="title">官网首页</a>
			<a href="#" class="search"></a>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	@import "../base.scss";
	a{
		display: inline-block;
		text-decoration: none;
		color:#ff9d00;
	}
	.header{
		height: 42.656/$baseFontSize*1rem;
		width: 100%;
		background-color: #fff;
		border-bottom: .5px solid #ccc;
		@include clearfix;
		.logo{
			width: 87/$baseFontSize*1rem;
			height: 23/$baseFontSize*1rem;
			padding: 8.533/$baseFontSize*1rem 12.8/$baseFontSize*1rem;
			background: url("../../public/img/hotel/logo-new204.png") 12.8/$baseFontSize*1rem 8.533/$baseFontSize*1rem no-repeat;
			background-size: 87/$baseFontSize*1rem;
		}
		.right{
			float: right;
			text-align: center;
			.title{
				width: 79/$baseFontSize*1rem;
				line-height: 42.656/$baseFontSize*1rem;
				font-size:.4rem;
				vertical-align: top;
			}
			.search{
				height: 42.656/$baseFontSize*1rem;
				width: 42.656/$baseFontSize*1rem;
				background: url("../../public/img/hotel/i_head5.png") 0 -42.656/$baseFontSize*1rem no-repeat;
				background-size: 42.656*2/$baseFontSize*1rem;
			}
		}
	}
</style>
<script>
	export default{

	}
</script>